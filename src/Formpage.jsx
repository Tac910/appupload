import axios from 'axios';
import React, { useState } from 'react';
export default function Formpage() {
  const [formdata, setformdata] = useState({
    title: '',
    price: null,
    description: '',
    image: '',
    size: '',
    category: '',
  });
  const [image, setImage] = useState('');
  const [url, setUrl] = useState('');

  const sendData = async (data) => {
    const res = await axios
      .post('https://productapi.vercel.app/api/product', {
        title: data.title,
        size: data.size,
        price: Number(data.price),
        description: data.description,
        image: data.image,
        category: string_to_array(data.category),
      })
      .then(alert('product successfully added'))
      .catch((err) => console.log(err));
    if (res.status !== 200) {
      return <div>"Request Rejected"</div>;
    }
    const resData = await res.data;

    return resData;
  };
  const string_to_array = (str) => {
    return str.split(' ');
  };
  const uploadImage = (e) => {
    ``;
    e.preventDefault();
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'ibwh28zw');
    data.append('cloud_name', 'ecommerceupload');

    fetch('  https://api.cloudinary.com/v1_1/ecommerceupload/image/upload', {
      method: 'post',
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setformdata({
          image: data.url,
        });
      })
      .catch((err) => console.log(err));
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
      title: '',
      price: 0,
      description: '',
      image: '',
      category: '',
    });
    setImage('')
  };
  return (
    <div className="flex gap-4 flex-col w-[500px]  ">
      <form className="space-y-5    mx-auto">
        <div className="gap-3   flex">
          <div>Name</div>
          <input className="  border-2 border-black " value={formdata.title} onChange={handleChange} name="title" />
        </div>
      
        <div className="gap-3 flex">
          <div>price</div>
          <input className="  border-2 border-black " value={formdata.price} type="number" onChange={handleChange} name="price" />
        </div>
        <div className="gap-3 flex">
          <div>description</div>
          <input className="  border-2 border-black " value={formdata.description} onChange={handleChange} name="description" />
        </div>
        <div className="gap-3 flex">
          <div>size</div>
          <input className="  border-2 border-black " value={formdata.size} onChange={handleChange} name="size" />
        </div>
        <div className="gap-3 flex">
          <input type="file" onChange={(e) => setImage(e.target.files[0])}></input>
          <button onClick={uploadImage}>Upload</button>{' '}
        </div>
        <div>
        <div className='text-white text-sm border-'>{formdata.image}</div>
          <img src={formdata.image} />
        </div>
        <div className="gap-3 flex">
          <div>category</div>
          <input className="  border-2 border-black " value={formdata.category} onChange={handleChange} name="category" />
        </div>
        <button className="bg-rose-500 rounded-xl px-4 py-2" type="submit" onClick={submithandler}>
          Submit
        </button>
      </form>

    </div>
  );
}
