import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Formpage from "./Formpage";

function App() {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    axios.get("https://productapi.vercel.app/api/product").then((response) => {
      setproducts(response.data);
    });
  }, []);
  async function handledelete(id) {
    console.log(`https://productapi.vercel.app/api/product/${id}`);
    axios
      .delete(`https://productapi.vercel.app/api/product/${id}`)
      .then((res) => {
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
          <div className="w-[200px] border-2 border-white" key={e._id}>
            <img src={e.image} alt="" />
            <div className="flex w-10/12 mx-auto justify-between">
              <div className="my-auto">
                <div>{e.title}</div>
                <div>${e.price}</div>
                {e.category.map((e) => (
                  <div className=" bg-yellow-300 m-2">{e}</div>
                ))}
              </div>
              <button
                className="bg-white text-black py-1 rounded-full px-2  m-4"
                onClick={() => handledelete(e._id)}
              >
                x
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
