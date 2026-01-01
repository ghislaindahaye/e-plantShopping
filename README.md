# coding-project-template

# 🌿 e-plantShopping - Plant E-commerce Application

![React](https://img.shields.io/badge/React-18.2.0-blue.svg)
![Redux](https://img.shields.io/badge/Redux-8.1.3-purple.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

**e-plantShopping** is a modern e-commerce application for selling indoor and outdoor plants. The application allows users to browse different plant categories, add items to cart, and manage their purchases in real-time.

## ✨ Live Demo
🔗 [View Live Application](https://ghislaindahaye.github.io/e-plantShopping)

## 📱 Features

### 🛒 **Shopping Cart Management**
- ✅ Add/Remove items from cart
- ✅ Update item quantities (increase/decrease)
- ✅ Automatic total and subtotal calculations
- ✅ Visual cart item counter
- ✅ Data persistence with localStorage

### 🌱 **Plant Catalog**
- ✅ 5 different plant categories
- ✅ 30+ plant varieties with detailed descriptions
- ✅ Category filtering (Air Purifying, Aromatic, Insect Repellent, Medicinal, Low Maintenance)
- ✅ Product cards with high-quality images
- ✅ Responsive and modern interface

### ⚡ **User Experience**
- ✅ Intuitive and user-friendly interface
- ✅ Visual feedback for user actions
- ✅ Smooth navigation between pages
- ✅ Mobile-first responsive design
- ✅ Subtle animations for better UX

## 🚀 Quick Start

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/ghislaindahaye/e-plantShopping.git

# Navigate to project directory
cd e-plantShopping

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will open at `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├
├── ProductList.jsx      # Main product listing page
├── CartItem.jsx         # Shopping cart component
├── CartSlice.jsx        # Redux slice for cart management
└── AboutUs.jsx          # About page component
├── store.js                 # Redux store configuration
├── App.jsx                  # Root component
├── main.jsx                 # Application entry point
├── ProductList.css      # Product listing styles
└── CartItem.css         # Cart component styles
```

## 🔧 Technologies Used

- **React 18.2.0** - Frontend library
- **Redux Toolkit 1.9.7** - State management
- **React Redux 8.1.3** - React bindings for Redux
- **CSS3** - Styling (Flexbox/Grid)
- **GitHub Pages** - Deployment

## 📦 Key Components

### 1. **ProductList Component**
Displays all plants organized by categories with "Add to Cart" functionality.

### 2. **CartItem Component**
Manages the shopping cart with quantity controls and total calculations.

### 3. **CartSlice (Redux)**
Handles all cart-related state management:
- `addItem()` - Add new items to cart
- `removeItem()` - Remove items from cart
- `updateQuantity()` - Update item quantities

### 4. **Redux Store**
Centralized state management for the entire application.

## 🎨 Design Features

### Color Scheme
- Primary Green: `#4CAF50` (Buttons, header)
- Secondary Green: `#45a049` (Hover states)
- Accent Red: `#e74c3c` (Prices, badges)
- Neutral White: `#FFFFFF`
- Neutral Gray: `#f0f0f0`
- Text Dark: `#333333`

### Responsive Layout
- **Mobile**: 1 column (100% width)
- **Tablet**: 2 columns (50% width)
- **Desktop**: 3 columns (33.33% width)
- **Breakpoints**: 768px and 1200px

## 🔄 Redux State Management

### Store Configuration
```javascript
// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default store;
```

### Cart Slice
```javascript
// CartSlice.jsx
export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Add or increment item quantity
    },
    removeItem: (state, action) => {
      // Remove item from cart
    },
    updateQuantity: (state, action) => {
      // Update item quantity
    },
  },
});
```

## 📱 Features in Detail

### Home Page
- Elegant landing page with "Get Started" button
- Integrated "About Us" section
- Smooth transitions to product catalog

### Product Catalog
- Organized by plant categories
- Detailed product information
- High-quality plant images
- Price display for each item

### Shopping Cart
- Real-time quantity updates
- Individual item totals
- Order summary with shipping
- Continue shopping option

## 🚀 Deployment

### Deploy to GitHub Pages

1. **Install gh-pages**
```bash
npm install gh-pages --save-dev
```

2. **Update package.json**
```json
"homepage": "https://ghislaindahaye.github.io/e-plantShopping",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. **Deploy the application**
```bash
npm run deploy
```

4. **Configure GitHub Pages**
   - Go to repository Settings > Pages
   - Select "GitHub Actions" as source
   - Your app will be available at: `https://your-username.github.io/paradise-nursery`

```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 👨‍💻 Author

**Your Name**
- GitHub: [@ghislaindahaye](https://github.com/ghislaindahaye)


## 🙏 Acknowledgments

- React and Redux communities
- Unsplash photographers for beautiful plant images
- All contributors and testers

