import * as fs from "fs";
import * as path from "path";


function walkDir(dirPath, callback, ...callbackArgs) {
    fs.readdirSync(dirPath).forEach((file) => {
        const filePath = path.join(dirPath, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            walkDir(filePath, callback, ...callbackArgs);
        } else {
            callback(filePath, ...callbackArgs);
        }
    });
}

function readFileAndAddContentToFIle(filePath, contentHolder) {
    const fileContent = fs.readFileSync(filePath, 'utf8')
    contentHolder.content += fileContent;
}

const pathsNames = [["", "all"], ["komodo-defi-framework", "komodo-defi-framework"], ["historical", "historical"], ["smart-chains", "smart-chains"], ["antara", "antara"], ["start-here", "start-here"], ["komodo-defi-framework/api", "komodefi-api/all-api"], ["komodo-defi-framework/api/legacy", "komodefi-api/legacy-api"], ["komodo-defi-framework/api/v20", "komodefi-api/v20-api"], ["komodo-defi-framework/api/v20-dev", "komodefi-api/v20-dev-api"]]

for (let index = 0; index < pathsNames.length; index++) {
    const element = pathsNames[index];
    let contentHolder = { content: "" };
    walkDir(`./src/pages/${element[0]}`, readFileAndAddContentToFIle, contentHolder)
    fs.writeFileSync(`./data-for-gpts/${element[1]}-content.txt`, contentHolder.content)
}

