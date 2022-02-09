import { useEffect, useState } from 'react';
import './App.css';
import ProductList from './components/ProductList/productList';

function App() {

  const [data, setData] = useState([]);

  // Fetch data before the first render
  useEffect(() => fetch(' http://localhost:3003/products')
    .then(data => data.json())
    .then(data => setData(data)), []);

  return (
    <div className="App">
      <header className="App-header">
        <ProductList products={data} />
      </header>
    </div>
  );
}

export default App;
