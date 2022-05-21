import './App.css';
import ProductsList from './components/ProductsList';
import { useEffect, useState } from 'react';

function App() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/products')
    .then(resp => resp.json())
    .then((response) => {
      setProductsList(response)
    })
  }, [setProductsList])

  return (
    <div className="App">
      <h1>HoneyWell Shopping</h1>
      <ProductsList productsList={productsList}/>
    </div>
  );
}

export default App;
