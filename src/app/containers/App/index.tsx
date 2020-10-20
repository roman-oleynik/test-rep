import React, { useEffect, useState } from 'react';
import { Product } from 'app/types';
import { ProductCard } from 'app/components/ProductCard/Root';
import './style.scss';



function App() {
  const [ products, setProducts ] = useState<Product[]>([]);

  const fetchProducts = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:4000/data', false);
    xhr.send();

    if (xhr.status != 200) {
      console.log(xhr.status + ': ' + xhr.statusText );
    } else {
      setProducts(JSON.parse(xhr.responseText));
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="products-list">
      {
        products.map((el: Product) => <ProductCard key={el.productId} data={el} />)
      }
    </div>
  );
}

export default App;