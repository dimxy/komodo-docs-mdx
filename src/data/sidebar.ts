import { NavigationRouteType } from "@/store/navigation/types";

const startHerePageNavigation: NavigationRouteType = {
  "/start-here/": [
    {
      title: "Komodo Documentation",
      titleLink: "/",
      links: [
        {
          title: "About Komodo Platform",
          href: "/start-here/",
        },
        {
          title: "Platform Overview",
          href: "/start-here/about-komodo-platform/",
        },
        {
          title: "Product Introductions",
          href: "/start-here/about-komodo-platform/product-introductions/",
        },
        {
          title: "Doc Orientation",
          href: "/start-here/about-komodo-platform/orientation/",
        },
        {
          title: "Simple Installations",
          href: "/start-here/about-komodo-platform/simple-installations/",
        },
      ],
    },
    {
      title: "Learning Launchpad",
      links: [
        {
          title: "Learning Path Outline",
          href: "/start-here/learning-launchpad/",
        },
        {
          title: "Common Technologies and Concepts",
          href: "/start-here/learning-launchpad/common-terminology-and-concepts/",
        },
      ],
    },
    {
      title: "Core Technology Discussions",
      links: [
        {
          title: "Introduction",
          href: "/start-here/core-technology-discussions/",
        },
        {
          title: "Delayed Proof of Work",
          href: "/start-here/core-technology-discussions/delayed-proof-of-work/",
        },
        {
          title: "Initial DEX Offering (IDO)",
          href: "/start-here/core-technology-discussions/initial-dex-offering/",
        },
        {
          title: "The Antara Framework",
          href: "/start-here/core-technology-discussions/antara/",
        },
        {
          title: "AtomicDEX and Atomic Swaps",
          href: "/start-here/core-technology-discussions/atomicdex/",
        },
        {
          title: "Miscellaneous",
          href: "/start-here/core-technology-discussions/miscellaneous/",
        },
        {
          title: "References",
          href: "/start-here/core-technology-discussions/references/",
        },
      ],
    },
  ],
};

const atomicdexPageNavigation: NavigationRouteType = {
  "/atomicdex/": [
    {
      title: "AtomicDEX",
      links: [
        {
          title: "Introduction to AtomicDEX Documentation",
          href: "/atomicdex/",
        },
        {
          title: "RPC Methods for AtomicDEX",
          href: "/atomicdex/api/",
        },
      ],
    },
    {
      title: "Setup",
      links: [
        {
          title: "Installing AtomicDEX-API",
          href: "/atomicdex/setup/",
        },
        {
          title: "Configuring AtomicDEX-API",
          href: "/atomicdex/setup/configure-mm2-json/",
        },
      ],
    },
    {
      title: "Tutorials",
      titleLink: "/atomicdex/tutorials/",
      links: [
        {
          title: "AtomicDEX Walkthrough",
          href: "/atomicdex/tutorials/atomicdex-walkthrough/",
        },
        {
          title: "DEX Metrics",
          href: "/atomicdex/tutorials/atomicdex-metrics/",
        },
        {
          title: "Adding a new coin to the AtomicDEX-API",
          href: "/atomicdex/tutorials/listing-a-coin-on-atomicdex/",
        },
        {
          title: "How to Become a Liquidity Provider",
          href: "/atomicdex/tutorials/how-to-become-a-liquidity-provider/",
        },
        {
          title: "Compile MM2 from Source",
          href: "/atomicdex/tutorials/how-to-compile-mm2-from-source/",
        },
        {
          title: "How to Query the MM2 SQLite Database",
          href: "/atomicdex/tutorials/query-the-mm2-database/",
        },
        {
          title: "How to Setup and Use AtomicDEX-API on a AWS EC2 Instance",
          href: "/atomicdex/tutorials/setup-atomicdex-aws/",
        },
        {
          title: "How to Update your Coins File",
          href: "/atomicdex/tutorials/coins-file-update/",
        },
        {
          title: "More Information About AtomicDEX",
          href: "/atomicdex/tutorials/additional-information-about-atomicdex/",
        },
      ],
    },
    {
      title: "User Guides (Mobile) ",
      links: [
        {
          title: "Create a New Wallet Using AtomicDEX Mobile",
          href: "/atomicdex/mobile/",
        },
        {
          title: "Restore Wallet Using AtomicDEX Mobile",
          href: "/atomicdex/mobile/restore-wallet-using-atomicdex-mobile/",
        },
        {
          title: "Add and Activate Coins on AtomicDEX Mobile",
          href: "/atomicdex/mobile/add-and-activate-coins-on-atomicdex-mobile/",
        },
        {
          title: "View Your Receiving Address to Send Funds for Trading",
          href: "/atomicdex/mobile/view-your-receiving-address-to-send-funds-for-trading/",
        },
        {
          title: "Withdraw or Send Funds Using AtomicDEX Mobile",
          href: "/atomicdex/mobile/withdraw-or-send-funds-using-atomicdex-mobile/",
        },
        {
          title: "Perform Cross-Chain Atomic Swaps Using AtomicDEX Mobile",
          href: "/atomicdex/mobile/perform-cross-chain-atomic-swaps-using-atomicdex-mobile/",
        },
        {
          title: "View Ongoing Orders and Swap History on AtomicDEX Mobile",
          href: "/atomicdex/mobile/view-ongoing-orders-and-swap-history-on-atomicdex-mobile/",
        },
        {
          title: "Recover Seed on AtomicDEX Mobile",
          href: "/atomicdex/mobile/recover-seed-on-atomicdex-mobile/",
        },
        {
          title: "Delete Seed (Wallet) on AtomicDEX Mobile",
          href: "/atomicdex/mobile/delete-seed-from-atomicdex-mobile/",
        },
      ],
    },
    {
      title: "Changelog",
      links: [
        {
          title: "Changelog",
          href: "/atomicdex/changelog/",
        },
      ],
    },
  ],
};

const atomicdexApi20MasterPageNavigation: NavigationRouteType = {
  "/atomicdex/api/v20/": [
    {
      title: "AtomicDEX API 2.0 (Master)",
      links: [
        {
          title: "AtomicDEX-API RPC Protocol v2.0 (Master)",
          href: "/atomicdex/api/v20/",
        },
      ],
    },
    {
      title: "Coin Activation",
      links: [
        {
          title: "enable_bch_with_slp_tokens",
          href: "/atomicdex/api/v20/enable_bch_with_tokens/",
        },
        {
          title: "enable_slp",
          href: "/atomicdex/api/v20/enable_slp/",
        },
        {
          title: "enable_tendermint_with_assets",
          href: "/atomicdex/api/v20/enable_tendermint_with_assets/",
        },
        {
          title: "enable_tendermint_token",
          href: "/atomicdex/api/v20/enable_tendermint_token/",
        },
        {
          title: "enable_eth_with_tokens",
          href: "/atomicdex/api/v20/enable_eth_with_tokens/",
        },
        {
          title: "enable_erc20",
          href: "/atomicdex/api/v20/enable_erc20/",
        },
      ],
    },
    {
      title: "Market Maker Bot",
      links: [
        {
          title: "start_simple_market_maker_bot",
          href: "/atomicdex/api/v20/start_simple_market_maker_bot/",
        },
        {
          title: "stop_simple_market_maker_bot",
          href: "/atomicdex/api/v20/stop_simple_market_maker_bot/",
        },
        {
          title: "telegram_alerts",
          href: "/atomicdex/api/v20/telegram_alerts/",
        },
      ],
    },
    {
      title: "Message Signing",
      links: [
        {
          title: "Signing and verifying messages",
          href: "/atomicdex/api/v20/message_signing/",
        },
      ],
    },
    {
      title: "Orders",
      links: [
        {
          title: "best_orders",
          href: "/atomicdex/api/v20/best_orders/",
        },
      ],
    },
    {
      title: "Seednode Version Stats ",
      links: [
        {
          title: "add_node_to_version_stat",
          href: "/atomicdex/api/v20/add_node_to_version_stat/",
        },
        {
          title: "remove_node_from_version_stat",
          href: "/atomicdex/api/v20/remove_node_from_version_stat/",
        },
        {
          title: "start_version_stat_collection",
          href: "/atomicdex/api/v20/start_version_stat_collection/",
        },
        {
          title: "stop_version_stat_collection",
          href: "/atomicdex/api/v20/stop_version_stat_collection/",
        },
        {
          title: "update_version_stat_collection",
          href: "/atomicdex/api/v20/update_version_stat_collection/",
        },
      ],
    },
    {
      title: "Staking",
      links: [
        {
          title: "add_delegation",
          href: "/atomicdex/api/v20/add_delegation/",
        },
        {
          title: "get_staking_infos",
          href: "/atomicdex/api/v20/get_staking_infos/",
        },
        {
          title: "remove_delegation",
          href: "/atomicdex/api/v20/remove_delegation/",
        },
      ],
    },
    {
      title: "Swaps",
      links: [
        {
          title: "recreate_swap_data",
          href: "/atomicdex/api/v20/recreate_swap_data/",
        },
        {
          title: "trade_preimage",
          href: "/atomicdex/api/v20/trade_preimage/",
        },
      ],
    },
    {
      title: "Wallet",
      links: [
        {
          title: "get_public_key",
          href: "/atomicdex/api/v20/get_public_key/",
        },
        {
          title: "get_public_key_hash",
          href: "/atomicdex/api/v20/get_public_key_hash/",
        },
        {
          title: "get_raw_transaction",
          href: "/atomicdex/api/v20/get_raw_transaction/",
        },
        {
          title: "my_tx_history",
          href: "/atomicdex/api/v20/my_tx_history/",
        },
        {
          title: "withdraw",
          href: "/atomicdex/api/v20/withdraw/",
        },
      ],
    },
  ],
};

const atomicdexApi_20_Dev_PageNavigation: NavigationRouteType = {
  "/atomicdex/api/v20-dev/": [
    {
      title: "AtomicDEX API 2.0 (Dev)",
      links: [
        {
          title: "AtomicDEX-API RPC Protocol v2.0 (Dev)",
          href: "/atomicdex/api/v20-dev/",
        },
      ],
    },
    {
      title: "Utility",
      links: [
        {
          title: "get_current_mtp",
          href: "/atomicdex/api/v20-dev/get_current_mtp/",
        },
      ],
    },
    {
      title: "HD Wallet Tasks",
      links: [
        {
          title: "Overview",
          href: "/atomicdex/api/v20-dev/hd_wallets_overview/",
        },
        {
          title: "Trezor Initialization",
          href: "/atomicdex/api/v20-dev/trezor_initialisation/",
        },
        {
          title: "Address Management",
          href: "/atomicdex/api/v20-dev/hd_address_management/",
        },
        {
          title: "Account Balance Tasks",
          href: "/atomicdex/api/v20-dev/account_balance_tasks/",
        },
      ],
    },
    {
      title: "Lightning Network",
      links: [
        {
          title: "Overview",
          href: "/atomicdex/api/v20-dev/lightning/",
        },
        {
          title: "Lightning Initialization",
          href: "/atomicdex/api/v20-dev/lightning/activation/",
        },
        {
          title: "Lightning Nodes",
          href: "/atomicdex/api/v20-dev/lightning/nodes/",
        },
        {
          title: "Lightning Channels",
          href: "/atomicdex/api/v20-dev/lightning/channels/",
        },
        {
          title: "Lightning Payments",
          href: "/atomicdex/api/v20-dev/lightning/payments/",
        },
      ],
    },
    {
      title: "Coin Activation Tasks",
      titleLink: "/atomicdex/api/v20-dev/coin_activation_tasks/",
      links: [],
    },
    {
      title: "get_locked_amount",
      titleLink: "/atomicdex/api/v20-dev/get_locked_amount/",
      links: [],
    },
    {
      title: "max_maker_vol",
      titleLink: "/atomicdex/api/v20-dev/max_maker_vol/",
      links: [],
    },
    {
      title: "Withdraw Tasks",
      titleLink: "/atomicdex/api/v20-dev/withdraw_tasks/",
      links: [],
    },
    {
      title: "ZHTLC Coins",
      titleLink: "/atomicdex/api/v20-dev/zhtlc_coins/",
      links: [],
    },
  ],
};

const atomicdexApiLegacyPageNavigation: NavigationRouteType = {
  "/atomicdex/api/legacy/": [
    {
      title: "AtomicDEX API (Legacy)",
      titleLink: "/atomicdex/api/legacy/",
      links: [
        {
          title: "batch_requests",
          href: "/atomicdex/api/legacy/batch_requests/",
        },
      ],
    },
    {
      title: "Note about rational number type",
      titleLink: "/atomicdex/api/legacy/rational_number_note/",
      links: [],
    },
    {
      title: "AtomicDEX Metrics",
      titleLink: "/atomicdex/api/legacy/metrics/",
      links: [],
    },
    {
      title: "Coin Activation ",
      links: [
        {
          title: "Activation Methods",
          href: "/atomicdex/api/legacy/coin_activation/",
        },
        {
          title: "coins_needed_for_kick_start",
          href: "/atomicdex/api/legacy/coins_needed_for_kick_start/",
        },
        {
          title: "disable_coin",
          href: "/atomicdex/api/legacy/disable_coin/",
        },
        {
          title: "get_enabled_coins",
          href: "/atomicdex/api/legacy/get_enabled_coins/",
        },
        {
          title: "set_required_confirmations",
          href: "/atomicdex/api/legacy/set_required_confirmations/",
        },
        {
          title: "set_requires_notarization",
          href: "/atomicdex/api/legacy/set_requires_notarization/",
        },
      ],
    },
    {
      title: "Network",
      links: [
        {
          title: "get_gossip_mesh",
          href: "/atomicdex/api/legacy/get_gossip_mesh/",
        },
        {
          title: "get_gossip_peer_topics",
          href: "/atomicdex/api/legacy/get_gossip_peer_topics/",
        },
        {
          title: "get_gossip_topic_peers",
          href: "/atomicdex/api/legacy/get_gossip_topic_peers/",
        },
        {
          title: "get_my_peer_id",
          href: "/atomicdex/api/legacy/get_my_peer_id/",
        },
        {
          title: "get_peers_info",
          href: "/atomicdex/api/legacy/get_peers_info/",
        },
        {
          title: "get_relay_mesh",
          href: "/atomicdex/api/legacy/get_relay_mesh/",
        },
      ],
    },
    {
      title: "Orders",
      links: [
        {
          title: "best_orders",
          href: "/atomicdex/api/legacy/best_orders/",
        },
        {
          title: "buy",
          href: "/atomicdex/api/legacy/buy/",
        },
        {
          title: "cancel_all_orders",
          href: "/atomicdex/api/legacy/cancel_all_orders/",
        },
        {
          title: "cancel_order",
          href: "/atomicdex/api/legacy/cancel_order/",
        },
        {
          title: "my_orders",
          href: "/atomicdex/api/legacy/my_orders/",
        },
        {
          title: "orderbook",
          href: "/atomicdex/api/legacy/orderbook/",
        },
        {
          title: "orderbook_depth",
          href: "/atomicdex/api/legacy/orderbook_depth/",
        },
        {
          title: "orders_history_by_filter",
          href: "/atomicdex/api/legacy/orders_history_by_filter/",
        },
        {
          title: "order_status",
          href: "/atomicdex/api/legacy/order_status/",
        },
        {
          title: "recover_funds_of_swap",
          href: "/atomicdex/api/legacy/recover_funds_of_swap/",
        },
        {
          title: "sell",
          href: "/atomicdex/api/legacy/sell/",
        },
        {
          title: "setprice",
          href: "/atomicdex/api/legacy/setprice/",
        },
        {
          title: "update_maker_order",
          href: "/atomicdex/api/legacy/update_maker_order/",
        },
      ],
    },
    {
      title: "Swaps",
      links: [
        {
          title: "active_swaps",
          href: "/atomicdex/api/legacy/active_swaps/",
        },
        {
          title: "all_swaps_uuids_by_filter",
          href: "/atomicdex/api/legacy/all_swaps_uuids_by_filter/",
        },
        {
          title: "get_trade_fee",
          href: "/atomicdex/api/legacy/get_trade_fee/",
        },
        {
          title: "import_swaps",
          href: "/atomicdex/api/legacy/import_swaps/",
        },
        {
          title: "min_trading_vol",
          href: "/atomicdex/api/legacy/min_trading_vol/",
        },
        {
          title: "max_taker_vol",
          href: "/atomicdex/api/legacy/max_taker_vol/",
        },
        {
          title: "my_recent_swaps",
          href: "/atomicdex/api/legacy/my_recent_swaps/",
        },
        {
          title: "my_swap_status",
          href: "/atomicdex/api/legacy/my_swap_status/",
        },
        {
          title: "trade_preimag",
          href: "/atomicdex/api/legacy/trade_preimage/",
        },
      ],
    },
    {
      title: "Utility",
      links: [
        {
          title: "ban_pubkey",
          href: "/atomicdex/api/legacy/ban_pubkey/",
        },
        {
          title: "help",
          href: "/atomicdex/api/legacy/help/",
        },
        {
          title: "list_banned_pubkeys",
          href: "/atomicdex/api/legacy/list_banned_pubkeys/",
        },
        {
          title: "stop",
          href: "/atomicdex/api/legacy/stop/",
        },
        {
          title: "unban_pubkeys",
          href: "/atomicdex/api/legacy/unban_pubkeys/",
        },
        {
          title: "version",
          href: "/atomicdex/api/legacy/version/",
        },
      ],
    },
    {
      title: "Wallet",
      links: [
        {
          title: "convertaddress",
          href: "/atomicdex/api/legacy/convertaddress/",
        },
        {
          title: "convert_utxo_address",
          href: "/atomicdex/api/legacy/convert_utxo_address/",
        },
        {
          title: "kmd_rewards_info",
          href: "/atomicdex/api/legacy/kmd_rewards_info/",
        },
        {
          title: "my_balance",
          href: "/atomicdex/api/legacy/my_balance/",
        },
        {
          title: "my_tx_history",
          href: "/atomicdex/api/legacy/my_tx_history/",
        },
        {
          title: "send_raw_transaction",
          href: "/atomicdex/api/legacy/send_raw_transaction/",
        },
        {
          title: "show_priv_key",
          href: "/atomicdex/api/legacy/show_priv_key/",
        },
        {
          title: "validateaddress",
          href: "/atomicdex/api/legacy/validateaddress/",
        },
        {
          title: "withdraw",
          href: "/atomicdex/api/legacy/withdraw/",
        },
      ],
    },
  ],
};

const antaraFrameworkPageNavigation: NavigationRouteType = {
  "/antara/": [
    {
      title: "Introduction to Antara Documentation",
      titleLink: "/antara/",
      links: [],
    },
    {
      title: "Antara Setup",
      titleLink: "/antara/setup/",
      links: [
        {
          title: "Antara Customizations",
          href: "/antara/setup/antara-customizations/",
        },
      ],
    },
    {
      title: "Antara Tutorials",
      titleLink: "/antara/tutorials/",
      links: [
        {
          title: "Introduction to Antara Tutorials",
          href: "/antara/tutorials/introduction-to-antara-tutorials/",
        },
        {
          title: "Understanding Antara Addresses",
          href: "/antara/tutorials/understanding-antara-addresses/",
        },
        {
          title: "Overview of Antara Modules — Part I",
          href: "/antara/tutorials/overview-of-antara-modules-part-i/",
        },
        {
          title: "Overview of Antara Modules — Part II",
          href: "/antara/tutorials/overview-of-antara-modules-part-ii/",
        },
        {
          title: "Beginner Series — Preparation",
          href: "/antara/tutorials/beginner-series-part-0/",
        },
        {
          title: "Beginner Series — Create a Blockchain",
          href: "/antara/tutorials/beginner-series-part-1/",
        },
        {
          title: "Beginner Series — Using a Faucet",
          href: "/antara/tutorials/beginner-series-part-2/",
        },
        {
          title:
            "Beginner Series — Connecting to Another Programming Environment",
          href: "/antara/tutorials/beginner-series-part-3/",
        },
        {
          title: "Beginner Series — Understanding Tokens",
          href: "/antara/tutorials/beginner-series-part-4/",
        },
        {
          title: "Advanced Series — Introduction",
          href: "/antara/tutorials/advanced-series-0/",
        },
        {
          title: "Advanced Series — Smart Chain Development Basics",
          href: "/antara/tutorials/advanced-series-1/",
        },
        {
          title: "Advanced Series — Antara Module Development Basics",
          href: "/antara/tutorials/advanced-series-2/",
        },
        {
          title: "Advanced Series — Preparing for Heir Development",
          href: "/antara/tutorials/advanced-series-3/",
        },
        {
          title: "Advanced Series — Final Conceptual Discussion",
          href: "/antara/tutorials/advanced-series-4/",
        },
        {
          title: "Advanced Series — Developing the Heir Module Prototype",
          href: "/antara/tutorials/advanced-series-5/",
        },
        {
          title: "Advanced Series — Miscellaneous",
          href: "/antara/tutorials/advanced-series-6/",
        },
        {
          title: "Module Tutorial — Dilithium",
          href: "/antara/tutorials/dilithium-module-tutorial/",
        },
        {
          title: "Module Tutorial — Gateways",
          href: "/antara/tutorials/gateways-module-tutorial/",
        },
        {
          title: "Module Tutorial — Musig",
          href: "/antara/tutorials/musig-module-tutorial/",
        },
        {
          title: "Module Tutorial — Rogue",
          href: "/antara/tutorials/rogue-module-tutorial/",
        },
        {
          title: "Module Tutorial — Pegs | User",
          href: "/antara/tutorials/pegs-module-user-tutorial/",
        },
        {
          title: "Module Tutorial — Pegs | Creator",
          href: "/antara/tutorials/pegs-module-creator-tutorial/",
        },
      ],
    },
    {
      title: "Antara Modules",
      titleLink: "/antara/api/",
      links: [
        {
          title: "Assets",
          href: "/antara/api/assets/",
        },
        {
          title: "Channels",
          href: "/antara/api/channels/",
        },
        {
          title: "Custom",
          href: "/antara/api/custom/",
        },
        {
          title: "Dice",
          href: "/antara/api/dice/",
        },
        {
          title: "Dilithium",
          href: "/antara/api/dilithium/",
        },
        {
          title: "Faucet",
          href: "/antara/api/faucet/",
        },
        {
          title: "Gaming",
          href: "/antara/api/gaming/",
        },
        {
          title: "Gateways",
          href: "/antara/api/gateways/",
        },
        {
          title: "Heir",
          href: "/antara/api/heir/",
        },
        {
          title: "MuSig",
          href: "/antara/api/musig/",
        },
        {
          title: "Oracles",
          href: "/antara/api/oracles/",
        },
        {
          title: "Payments",
          href: "/antara/api/payments/",
        },
        {
          title: "Pegs",
          href: "/antara/api/pegs/",
        },
        {
          title: "Prices",
          href: "/antara/api/prices/",
        },
        {
          title: "Rewards",
          href: "/antara/api/rewards/",
        },
        {
          title: "Rogue",
          href: "/antara/api/rogue/",
        },
        {
          title: "Sudoku",
          href: "/antara/api/sudoku/",
        },
        {
          title: "Tokens",
          href: "/antara/api/tokens/",
        },
      ],
    },
  ],
};

const historicalPageNavigation: NavigationRouteType = {
  "/historical/": [
    {
      title: "Historical Documentation",
      titleLink: "/historical/",
      links: [],
    },
    {
      title: "How to write UTXO based CC modules for KMD based chains",
      titleLink: "/historical/cc-jl/",
      links: [
        {
          title: "Chapter 00 - Bitcoin Protocol Basics",
          href: "/historical/cc-jl/chapter00/",
        },
        {
          title: "Chapter 01 - OP_CHECKCRYPTOCONDITION",
          href: "/historical/cc-jl/chapter01/",
        },
        {
          title: "Chapter 02 - CC Contract Basics",
          href: "/historical/cc-jl/chapter02/",
        },
        {
          title: "Chapter 03 - CC vins and vouts",
          href: "/historical/cc-jl/chapter03/",
        },
        {
          title: "Chapter 04 - CC RPC Extensions",
          href: "/historical/cc-jl/chapter04/",
        },
        {
          title: "Chapter 05 - CC Validation",
          href: "/historical/cc-jl/chapter05/",
        },
        {
          title: "Chapter 06 - Faucet Example",
          href: "/historical/cc-jl/chapter06/",
        },
        {
          title: "Chapter 07 - Rewards Example",
          href: "/historical/cc-jl/chapter07/",
        },
        {
          title: "Chapter 08 - Assets Example",
          href: "/historical/cc-jl/chapter08/",
        },
        {
          title: "Chapter 09 - Dice Example",
          href: "/historical/cc-jl/chapter09/",
        },
        {
          title: "Chapter 10 - Channels Example",
          href: "/historical/cc-jl/chapter10/",
        },
        {
          title: "Chapter 11 - Oracles Example",
          href: "/historical/cc-jl/chapter11/",
        },
        {
          title: "Chapter 12 - Limitless Possibilities",
          href: "/historical/cc-jl/chapter12/",
        },
        {
          title: "Chapter 13 - Different Languages",
          href: "/historical/cc-jl/chapter13/",
        },
        {
          title: "Chapter 14 - Runtime Bindings",
          href: "/historical/cc-jl/chapter14/",
        },
        {
          title: "Chapter 15 - RPC based dAPPS",
          href: "/historical/cc-jl/chapter15/",
        },
        {
          title: "Frequently Asked Questions",
          href: "/historical/cc-jl/faq/",
        },
      ],
    },
    {
      title: "Whitepaper",
      titleLink: "/historical/whitepaper/",
      links: [
        {
          title: "Whitepaper: Chapter-1",
          href: "/historical/whitepaper/chapter1/",
        },
        {
          title: "Whitepaper: Chapter-2",
          href: "/historical/whitepaper/chapter2/",
        },
        {
          title: "Whitepaper: Chapter-3",
          href: "/historical/whitepaper/chapter3/",
        },
        {
          title: "Whitepaper: Chapter-4",
          href: "/historical/whitepaper/chapter4/",
        },
        {
          title: "Whitepaper: Chapter-5",
          href: "/historical/whitepaper/chapter5/",
        },
        {
          title: "Whitepaper: Chapter-6",
          href: "/historical/whitepaper/chapter6/",
        },
        {
          title: "Whitepaper: Chapter-7",
          href: "/historical/whitepaper/chapter7/",
        },
        {
          title: "Whitepaper: Chapter-8",
          href: "/historical/whitepaper/chapter8/",
        },
        {
          title: "Acknowledgements and References",
          href: "/historical/whitepaper/references/",
        },
      ],
    },
  ],
};

const smartChainPageNavigation: NavigationRouteType = {
  "/smart-chains/": [
    {
      title: "Introduction to Smart Chain Documentation",
      titleLink: "/smart-chains/",
      links: [],
    },
    {
      title: "Komodo Changelog",
      titleLink: "/smart-chains/changelog/",
      links: [],
    },
    {
      title: "Smart Chain Setup",
      titleLink: "/smart-chains/setup/",
      links: [
        {
          title: "Installing Smart Chain Software From Source Code",
          href: "/smart-chains/setup/installing-from-source/",
        },
        {
          title: "Updating Smart Chain Software From Source Code",
          href: "/smart-chains/setup/updating-from-source/",
        },
        {
          title: "Interacting with Smart Chains",
          href: "/smart-chains/setup/interacting-with-smart-chains/",
        },
        {
          title: "Ecosystem Smart Chain Launch Commands",
          href: "/smart-chains/setup/ecosystem-launch-parameters/",
        },
        {
          title: "Smart Chain Maintenance",
          href: "/smart-chains/setup/smart-chain-maintenance/",
        },
        {
          title: "Common Runtime Parameters",
          href: "/smart-chains/setup/common-runtime-parameters/",
        },
        {
          title: "nSPV (Enhanced Lite Mode)",
          href: "/smart-chains/setup/nspv/",
        },
      ],
    },
    {
      title: "Smart Chain Tutorials",
      titleLink: "/smart-chains/tutorials/",
      links: [
        {
          title: "Introduction to Smart Chain Tutorials",
          href: "/smart-chains/tutorials/introduction-to-smart-chain-tutorials/",
        },
        {
          title: "Basic Environment Setup for Linux VPS",
          href: "/smart-chains/tutorials/basic-environment-setup-for-linux-vps/",
        },
        {
          title: "Create a Default Smart Chain",
          href: "/smart-chains/tutorials/create-a-default-smart-chain/",
        },
        {
          title: "Creating a Smart Chain on a Single Node",
          href: "/smart-chains/tutorials/creating-a-smart-chain-on-a-single-node/",
        },
        {
          title: "Running Komodo Software in Debug Mode",
          href: "/smart-chains/tutorials/running-komodo-software-in-debug-mode/",
        },
        {
          title: "Multisignature Transaction Creation and Walkthrough",
          href: "/smart-chains/tutorials/multisignature-transaction-creation-and-walkthrough/",
        },
        {
          title: "Smart Chain API Basics",
          href: "/smart-chains/tutorials/smart-chain-api-basics/",
        },
      ],
    },
    {
      title: "Smart Chain API",
      titleLink: "/smart-chains/api/",
      links: [
        {
          title: "Address",
          href: "/smart-chains/api/address/",
        },
        {
          title: "Blockchain",
          href: "/smart-chains/api/blockchain/",
        },
        {
          title: "CC Lib",
          href: "/smart-chains/api/cclib/",
        },
        {
          title: "Control",
          href: "/smart-chains/api/control/",
        },
        {
          title: "Cross-Chain API",
          href: "/smart-chains/api/crosschain/",
        },
        {
          title: "Disclosure",
          href: "/smart-chains/api/disclosure/",
        },
        {
          title: "Generate",
          href: "/smart-chains/api/generate/",
        },
        {
          title: "Mining",
          href: "/smart-chains/api/mining/",
        },
        {
          title: "Jumblr",
          href: "/smart-chains/api/jumblr/",
        },
        {
          title: "Network",
          href: "/smart-chains/api/network/",
        },
        {
          title: "Raw Transactions",
          href: "/smart-chains/api/rawtransactions/",
        },
        {
          title: "Util",
          href: "/smart-chains/api/util/",
        },
        {
          title: "Wallet",
          href: "/smart-chains/api/wallet/",
        },
      ],
    },
  ],
};

export const sidebarNavData: NavigationRouteType[] = [
  startHerePageNavigation,
  atomicdexPageNavigation,
  atomicdexApi20MasterPageNavigation,
  atomicdexApi_20_Dev_PageNavigation,
  atomicdexApiLegacyPageNavigation,
  antaraFrameworkPageNavigation,
  historicalPageNavigation,
  smartChainPageNavigation,
];
