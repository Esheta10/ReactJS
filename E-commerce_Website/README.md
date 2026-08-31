# 🛍️ E-Commerce Website

A modern, responsive e-commerce website built with **React**, **Vite**, **Tailwind CSS**, and **React Router**. The application fetches product data from the FakeStore API and provides a smooth shopping experience with product browsing and detailed product views.

## ✨ Features

- **Product Listing**: Browse all products with beautiful cards displaying:
  - Product image with hover animation
  - Product title
  - Rating and review count
  - Price information
  
- **Single Product View**: Detailed view of individual products with:
  - Large product image
  - Complete product description
  - Rating and availability
  - Price information

- **Smooth Navigation**: React Router based navigation between pages

- **Loading State**: Animated loader while fetching data from API

- **Responsive Design**: Mobile-first approach with Tailwind CSS:
  - 5 columns on large screens
  - 4 columns on 1200px and below
  - 3 columns on 900px and below
  - 2 columns on 600px and below

- **Dark Theme**: Modern dark UI with Tailwind CSS

## 🚀 Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 19.2.8 | UI Framework |
| Vite | 8.2.2 | Build Tool & Dev Server |
| Tailwind CSS | 4.3.3 | Styling |
| React Router | 7.18.3 | Client-side Routing |
| Axios | 1.20.0 | HTTP Client |
| ESLint | 10.9.0 | Code Quality |

## 📋 Project Structure

```
E-commerce_Website/
├── src/
│   ├── components/
│   │   ├── App.jsx           # Main app component with routing
│   │   ├── Home.jsx          # Home page
│   │   ├── NavBar.jsx        # Navigation bar
│   │   ├── Products.jsx      # Products listing page
│   │   ├── SingleProduct.jsx # Individual product detail page
│   │   └── Loader.jsx        # Loading spinner component
│   ├── App.css               # App styles
│   ├── index.css             # Global styles (Tailwind)
│   └── main.jsx              # React entry point
├── public/                   # Static assets
├── index.html                # HTML template
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── eslint.config.js         # ESLint configuration
└── package.json             # Dependencies and scripts
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone or download the project**
   ```bash
   cd E-commerce_Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will open at `http://localhost:5173` (or another available port)

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

6. **Run ESLint checks**
   ```bash
   npm run lint
   ```

## 📚 API Integration

This project uses the **FakeStore API** (https://fakestoreapi.com/):

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/products` | GET | Fetch all products |
| `/products/{id}` | GET | Fetch single product by ID |

**Sample Response**:
```json
{
  "id": 1,
  "title": "Product Name",
  "price": 109.95,
  "description": "Product description...",
  "category": "electronics",
  "image": "https://...",
  "rating": {
    "rate": 3.9,
    "count": 120
  }
}
```

## 🎨 Key Components

### Products.jsx
- Displays a responsive grid of all products
- Fetches data from FakeStore API
- Shows loading state with Loader component
- Click on any product to navigate to its detail page
- Hover animation on product image (scale-down effect)
- Responsive grid layout using Tailwind CSS

### SingleProduct.jsx
- Displays detailed view of a selected product
- Uses URL parameter (`id`) to fetch specific product
- Shows large product image and full description
- Loading state while fetching data
- Centered layout with detailed information

### Loader.jsx
- Animated loading spinner component
- Displayed while API data is being fetched
- Provides user feedback during data loading

### NavBar.jsx
- Navigation component for page links
- Consistent header across all pages

## 🎯 Routes

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | Home | Home page |
| `/products` | Products | All products listing |
| `/products/:id` | SingleProduct | Individual product detail |

## 🎯 Component Props & State

### Products Component
```javascript
// State
const [products, setProducts] = useState([])        // Product array
const [loading, setLoading] = useState(false)       // Loading state

// Hooks
const navigate = useNavigate()                      // Navigation function
```

### SingleProduct Component
```javascript
// State
const [product, setProduct] = useState({})          // Single product
const [loading, setLoading] = useState(false)       // Loading state

// Hooks
const { id } = useParams()                          // Extract product ID from URL
```

## 🚀 Performance & Optimizations

- **Lazy Loading**: Products load on-demand from API
- **Error Handling**: Try-catch blocks for API calls with finally blocks
- **Responsive Images**: Optimized image display with `object-contain`
- **Smooth Transitions**: Tailwind CSS transitions for animations
- **Code Splitting**: Component-based architecture for better tree-shaking
- **Production Build**: Optimized bundle with Vite

## 📱 Browser Support

| Browser | Minimum Version |
|---------|-----------------|
| Chrome | Latest |
| Firefox | Latest |
| Safari | Latest |
| Edge | Latest |

## 🐛 Troubleshooting

### Issue: Loader not showing during data fetching
**Solution**: Ensure `return <Loader/>` statement is used in conditional rendering
```javascript
if(loading)
  return <Loader/>    // ✅ Correct
```

### Issue: Image hover animation not working
**Solution**: Add `group` class to parent div and use `group-hover:` prefix
```javascript
<div className="...group...">
  <img className="...group-hover:scale-90..." />
</div>
```

### Issue: API calls timing out
**Solution**: 
- Check internet connection
- Verify FakeStore API is accessible
- Add error handling with try-catch-finally blocks

### Issue: Page not loading
**Solution**:
- Clear browser cache
- Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for errors

## 🎓 Learning Outcomes

This project demonstrates:
- ✅ React hooks (useState, useEffect, useNavigate)
- ✅ React Router for client-side navigation
- ✅ Axios for HTTP requests to external APIs
- ✅ Tailwind CSS for responsive design
- ✅ Component composition and reusability
- ✅ State management patterns
- ✅ API error handling
- ✅ Responsive web design principles
- ✅ Modern JavaScript (ES6+)

## 📝 Future Enhancements

- [ ] Add shopping cart functionality
- [ ] Implement product filters and sorting
- [ ] Add product search feature
- [ ] User authentication system
- [ ] Order checkout process
- [ ] Product recommendations engine
- [ ] Dark/Light theme toggle
- [ ] Wishlist feature
- [ ] Product reviews and ratings
- [ ] Payment gateway integration
- [ ] Order history tracking
- [ ] Admin dashboard

## 🤝 Contributing

Feel free to fork this project and submit pull requests with improvements!

## 📄 License

This project is open source and available under the MIT License.

---

**Happy Shopping! 🛒✨**
