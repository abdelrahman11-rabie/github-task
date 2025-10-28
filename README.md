# GitHub Top Stars

A React Native application for browsing top GitHub repositories.

## Folder Structure

```
github_topStars/
├── src/
│   ├── assets/         # Images, fonts, and other static files
│   ├── components/     # Reusable UI components
│   │   ├──atoms/       # Reusable UI components
│   │   ├──molecules/   # Reusable UI components
│   │   └──organisms/   # Reusable UI components
│   ├── constants/      # App constants and configuration
│   ├── hooks/          # Custom React hooks
│   ├── navigation/     # Navigation configuration
│   ├── redux/          # Redux store, slices, and actions
│   ├── screens/        # App screens/pages
│   └── utils/          # Helper functions and utilities
├── App.tsx             # Main app component
└── package.json        # Dependencies and scripts
└── .env                # Environment variables
```

## How to Run the App

### Prerequisites
- Node.js (v20 or higher)
- React Native development environment set up

### Installation

1. Install dependencies:
```sh
npm install
```

2. For iOS (Mac only), install CocoaPods:
```sh
cd ios && pod install && cd ..
```

### Running the App

**Start Metro bundler:**
```sh
npm start
```

**Run on Android:**
```sh
npm run android
```

**Run on iOS:**
```sh
npm run ios
```
