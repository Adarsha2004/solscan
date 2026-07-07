<p align="center">
  <img src="./assets/icon.png" alt="SolScan Logo" width="120" height="120" style="border-radius: 24px;" />
</p>

<h1 align="center">SolScan</h1>

<p align="center">
  <strong>A sleek, mobile-first Solana blockchain explorer & wallet app</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React_Native-0.83-61DAFB?logo=react&logoColor=white" alt="React Native" />
  <img src="https://img.shields.io/badge/Expo-55-000020?logo=expo&logoColor=white" alt="Expo" />
  <img src="https://img.shields.io/badge/Solana-Web3.js-9945FF?logo=solana&logoColor=white" alt="Solana" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Platform-Android-3DDC84?logo=android&logoColor=white" alt="Android" />
  <img src="https://img.shields.io/badge/Platform-iOS-000000?logo=apple&logoColor=white" alt="iOS" />
</p>

---

## About

**SolScan** is a mobile blockchain explorer for the **Solana** network. Look up any wallet address to instantly view its SOL balance, SPL token holdings, and recent transaction history — all from your phone. Connect your own wallet via **Phantom** (or any Solana mobile wallet) to send SOL, swap tokens through **Jupiter**, and manage a personal watchlist of addresses.

---

## Demo

<p align="center">
  <video src="./assets/solscan-demo.mp4" width="300" controls>
    Your browser does not support the video tag.
  </video>
</p>

> **Watch the full demo above** — Search wallets, view token holdings, swap tokens via Jupiter, and more!

---

## Features

### Wallet Explorer
- Search **any Solana wallet address** to view its on-chain data
- View **SOL balance** in a beautiful card UI
- Browse **SPL token holdings** with amounts
- See **recent transactions** with status indicators (success/fail) and timestamps
- Tap any transaction to view it on Solscan.io

### Wallet Connect
- Connect your **Phantom** wallet (or any MWA-compatible wallet) via Solana Mobile Wallet Adapter
- Auto-fetch your wallet data on connect
- Send SOL directly to any address with real-time transaction confirmation
- View your connected wallet address with one-tap disconnect

### Token Swap
- Swap between popular Solana tokens (SOL, USDC, USDT, BONK, JUP, WIF)
- Powered by **Jupiter Aggregator** for best swap rates
- Real-time price quotes with slippage protection
- Swap direction toggle with smooth UI

### Watchlist
- Save wallet addresses to your personal watchlist
- Auto-fetches live SOL balances for all saved wallets
- Pull-to-refresh for latest data
- Long-press to remove from watchlist

### Search History
- Automatically saves your recent searches (up to 20)
- Swipe-to-delete individual history entries
- One-tap to re-search a previous address

### Network Toggle
- Switch between **Mainnet** and **Devnet** with a single tap
- Visual indicator dot (green for Mainnet, amber for Devnet)
- All RPC calls automatically route to the selected network

### UI/UX
- Dark theme with Solana's signature color palette (#14F195 green, #9945FF purple)
- Smooth entry animations powered by React Native Reanimated
- Gesture-based interactions (swipe-to-delete)
- Responsive layout with safe area handling

---

## Architecture

```
solscan/
├── app/                          # Expo Router (file-based routing)
│   ├── _layout.tsx               # Root layout with stack navigator
│   ├── (tabs)/                   # Bottom tab navigation
│   │   ├── _layout.tsx           # Tab bar config (Wallet, Swap, Settings)
│   │   ├── index.tsx             # Home — Wallet Explorer
│   │   └── swap.tsx              # Token Swap screen
│   ├── send.tsx                  # Send SOL (modal screen)
│   ├── watchlist.tsx             # Watchlist screen
│   └── token/
│       └── [mint].tsx            # Token detail (dynamic route)
│
├── src/
│   ├── components/
│   │   ├── ConnectButton.tsx     # Wallet connect/disconnect button
│   │   ├── FavouriteButton.tsx   # Heart toggle for watchlist
│   │   └── SwipeableHistoryItem.tsx  # Swipeable search history row
│   │
│   ├── hooks/
│   │   └── useWallet.ts          # Wallet connection, send SOL, swap logic
│   │
│   ├── services/
│   │   └── jupiter.ts            # Jupiter Aggregator API (quotes & swaps)
│   │
│   ├── stores/
│   │   └── wallet-store.ts       # Zustand store (favorites, history, network)
│   │
│   ├── lib/
│   │   └── storage.ts            # AsyncStorage wrapper
│   │
│   └── polyfills.ts              # Node.js polyfills for React Native
│
├── assets/                       # App icons, splash screen, logo
├── app.json                      # Expo configuration
└── package.json
```

---

## Tech Stack

| Category | Technology |
|---|---|
| **Framework** | [React Native](https://reactnative.dev/) 0.83 + [Expo](https://expo.dev/) SDK 55 |
| **Language** | [TypeScript](https://www.typescriptlang.org/) 5.9 |
| **Navigation** | [Expo Router](https://docs.expo.dev/router/introduction/) (file-based routing) |
| **Blockchain** | [Solana Web3.js](https://solana-labs.github.io/solana-web3.js/) — JSON-RPC client |
| **Wallet** | [Solana Mobile Wallet Adapter](https://github.com/solana-mobile/mobile-wallet-adapter) |
| **DEX** | [Jupiter Aggregator API](https://station.jup.ag/docs/) — Token swaps |
| **State** | [Zustand](https://zustand-demo.pmnd.rs/) with AsyncStorage persistence |
| **Animations** | [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) 4.x |
| **Gestures** | [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/) |
| **Icons** | [@expo/vector-icons](https://icons.expo.fyi/) (Ionicons) |

---

## Getting Started

### Prerequisites

- **Node.js** >= 18
- **npm** or **yarn**
- **Expo CLI** (`npx expo`)
- **Android Studio** (for Android emulator/device) or **Xcode** (for iOS simulator)
- A Solana mobile wallet app (e.g. [Phantom](https://phantom.app/)) installed on your device/emulator

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/solscan.git
cd solscan

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
EXPO_PUBLIC_JUPITER_API_KEY=your_jupiter_api_key_here
```

> Get your Jupiter API key from [portal.jup.ag](https://portal.jup.ag)

### Run the App

```bash
# Start the development server
npx expo start

# Run on Android
npx expo run:android

# Run on iOS
npx expo run:ios
```

---

## Screens Overview

| Screen | Route | Description |
|---|---|---|
| **Wallet Explorer** | `/` | Search any wallet, view balance/tokens/txns |
| **Token Swap** | `/swap` | Swap tokens via Jupiter |
| **Settings** | `/settings` | App settings |
| **Send SOL** | `/send` | Transfer SOL to any address |
| **Watchlist** | `/watchlist` | Saved wallet addresses with live balances |
| **Token Detail** | `/token/[mint]` | Token supply & metadata by mint address |

---

## Key Implementation Details

### Solana JSON-RPC
The app communicates directly with Solana's RPC nodes — no backend server required. All blockchain queries (`getBalance`, `getTokenAccountsByOwner`, `getSignaturesForAddress`, etc.) are made client-side.

### Mobile Wallet Adapter (MWA)
Wallet connections use the **Solana Mobile Wallet Adapter** protocol, which opens the user's installed wallet app (like Phantom) for authorization and transaction signing. The flow:
1. `wallet.authorize()` — Request permission
2. `wallet.signTransactions()` — Sign transactions
3. `connection.sendRawTransaction()` — Submit to network (with retry logic)

### Jupiter Integration
Token swaps use the **Jupiter Metis API** (`api.jup.ag/swap/v1`):
1. **Quote** — Fetch the best swap route and expected output
2. **Swap Transaction** — Get a pre-built, optimized transaction
3. **Sign & Send** — Authorize via wallet and submit to chain

### Persistent State
Zustand store with AsyncStorage persistence keeps:
- Favorite wallet addresses (watchlist)
- Search history (last 20 searches)
- Network preference (Mainnet/Devnet)
- Connected wallet public key
