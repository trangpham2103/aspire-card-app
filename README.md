# Card Management Application
This application is built using React, TypeScript, and Vite for a fast, type-safe, and modern development experience.

## Table of Contents
- [Usage](#usage)
- [Setup and Running](#setup-and-running)

## Usage
### Hosted Application
You can access the hosted application at: [https://aspire-card-app.vercel.app](https://aspire-card-app.vercel.app)

### Key Features
- **Add Card**: Enter a valid card name (max 50 characters, letters/numbers/spaces/-/.') and submit.
- **Freeze/Unfreeze**: Toggle card state via the action menu.
- **Show/Hide**: Toggle card visibility in the carousel.
- **Slide Card**: Swipe through cards in the carousel to view and select different cards.
- **Mobile Swipeable Drawer**: On mobile, use the swipe-up/down drawer for additional interactions (e.g., viewing card details or actions).
- **Responsive Design**: Adjust your browser window or use a mobile device to see the mobile layout.

### Notes
- The app uses a mock API located in src/api/mockAPI.ts to simulate card and transaction data.

## Setup and Running
1. Clone the repository:
   ```
   git clone https://github.com/trangpham2103/aspire-card-app
   cd aspire-card-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```
   - This will launch the app at `http://localhost:5173` (default Vite port). Open this URL in your browser.