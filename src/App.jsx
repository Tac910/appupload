import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Formpage from './Formpage';

function App() {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    axios.get('https://productapi.vercel.app/api/product').then((response) => {
      setproducts(response.data);
    });
  }, []);
 async function handledelete(id) {
    console.log(`https://productapi.vercel.app/api/product/${id}`);
    axios.delete(`https://productapi.vercel.app/api/product/${id}`).then((res) => {
      console.log(res.data);
    });
  }
  return (
    <>
      <div>
        <Formpage />
      </div>
      <div className="flex flex-wrap gap-3">
        {products.map((e) => (
          <div className="w-[200px] h-[300px] border-2 border-white" key={e._id}>
            <img src={e.image} alt="" />
            <div>{e._id}</div>
            <div>${e.price}</div>
            <button onClick={()=>handledelete(e._id)}>delete</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
