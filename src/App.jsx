import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import ProductUploadForm from './ProductUpload';

function getData(setproducts) {
  axios.get('https://productapi.vercel.app/api/product').then((response) => {
    setproducts(response.data);
  });
}
function App() {
  const [products, setproducts] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  useEffect(() => {
    getData(setproducts);
  }, [products]);
  async function handledelete(id) {
    axios.delete(`https://productapi.vercel.app/api/product/${id}`).then((res) => {
      console.log(res.data);
      setError(res.data);
    });
  }
  return (
    <>
      <div>
        <ProductUploadForm setError={setError} error={error} success={success} setSuccess={setSuccess} />
      </div>

      <div className="flex flex-wrap gap-3">
        {products &&
          products.map((product) => (
            <div className="w-[300px] rounded overflow-hidden text-gray-800 bg-white shadow-lg">
              <button onClick={() => handledelete(product._id)} className="absolute  bg-white">
                remove
              </button>
              <img className="w-full" src={product.image} alt="Sunset in the mountains" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.title}</div>
                <div className="text-md mb-2">${product.price}</div>
                <p className="text-gray-700 text-base">{product.description} </p>
              </div>
              <div className="px-6 py-2">
                {product.category.map((e) => (
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{e}</span>
                ))}
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default App;
