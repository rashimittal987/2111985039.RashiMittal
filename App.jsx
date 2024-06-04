import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  const ProductList = () => {
      const [products, setProducts] = useState([]);
  
      useEffect(() => {
          fetch('/products')
              .then(response => response.json())
              .then(data => setProducts(data))
              .catch(error => console.error('Error fetching products:', error));
      }, []);
  
      return (
          <div>
              {products.map(product => (
                  <div key={product.id}>
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>
                      <p>Price: ${product.price}</p>
                      {/* Additional product details can be displayed here */}
                  </div>
              ))}
          </div>
      );
  };
}  
export default ProductList;
  
 