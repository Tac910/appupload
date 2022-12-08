import axios from "axios";
import React, { useState } from "react";
export default function Formpage() {
  const [formdata, setformdata] = useState({
    title: "",
    price: null,
    description: "",
    image: "",
    size: "",
    category: "",
  });
  const sendData = async (data) => {
    const res = await axios
      .post("https://productapi.vercel.app/api/product", {
        title: data.title,
        size: "m",
        price: Number(data.price),
        description: data.description,
        image: data.image,
        category: data.category,
      }).then(alert("product successfully added"))
      .catch((err) => console.log(err));
    if (res.status !== 200) {
      return <div>

        "Request Rejected"
      </div>
    }
    const resData = await res.data;
   
    return resData;
  };
  const handleChange = (e) => {
    setformdata((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const submithandler = (e) => {
    e.preventDefault();
    console.log(formdata);
    sendData(formdata);
    setformdata({
      title: "",
      price: 0,
      description: "",
      image: "",
      category: "",
    });
  };
  return (
    <div className="flex gap-4 flex-col w-[500px]  ">
      <form className="space-y-5    mx-auto">
        <div className="gap-3 bg-white  flex">
          <div>Name</div>
          <input
            className="bg-white  border-2 border-black "
            value={formdata.title}
            onChange={handleChange}
            name="title"
          />
        </div>
        <div className="gap-3 flex">
          <div>price</div>
          <input
            className="bg-white  border-2 border-black "
            value={formdata.price}
            type="number"
            onChange={handleChange}
            name="price"
          />
        </div>
        <div className="gap-3 flex">
          <div>description</div>
          <input
            className="bg-white  border-2 border-black "
            value={formdata.description}
            onChange={handleChange}
            name="description"
          />
        </div>
        <div className="gap-3 flex">
          <div>size</div>
          <input
            className="bg-white  border-2 border-black "
            value={formdata.size}
            onChange={handleChange}
            name="size"
          />
        </div>
        <div className="gap-3 flex">
          <div>image</div>
          <input
            className="bg-white  border-2 border-black "
            value={formdata.image}
            onChange={handleChange}
            name="image"
          />
        </div>
        <div className="gap-3 flex">
          <div>category</div>
          <input
            className="bg-white  border-2 border-black "
            value={formdata.category}
            onChange={handleChange}
            name="category"
          />
        </div>
        <button
          className="bg-rose-500 rounded-xl px-4 py-2"
          type="submit"
          onClick={submithandler}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
