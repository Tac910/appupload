import axios from 'axios';
import React, { useState } from 'react';

const ProductUploadForm = ({ setError, setSuccess, error, success }) => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productSize, setProductSize] = useState('');
  const [productImage, setProductImage] = useState('');
  const [productCategory, setProductCategory] = useState('');
const [imageloader, setimageLoader] = useState('Import An Image');
  const [image, setImage] = useState('');
  const [url, setUrl] = useState('');
  const uploadImage = (e) => {
    setimageLoader('Loading...');
    e.preventDefault();
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'ibwh28zw');
    data.append('cloud_name', 'ecommerceupload');

    fetch('https://api.cloudinary.com/v1_1/ecommerceupload/image/upload', {
      method: 'post',
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.url);
        setProductImage(data.url);
      })
      .catch((err) => console.log(err));
  };
  const string_to_array = (str) => {
    return str.split(' ');
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');
    // Make a POST request to the server to upload the product
    console.log({
      title: productName,
      description: productDescription,
      price: productPrice,
      image: productImage,
      category: productCategory,
      size: productSize,
    });
    axios
      .post('https://ecommerce-api-wheat.vercel.app/api/product', {
        title: productName,
        description: productDescription,
        price: productPrice,
        image: productImage,
        category: string_to_array(productCategory),
        size: productSize,
      })
      .then((response) => {
        setSuccess('Product successfully uploaded!' , response);
        setImage('');
        setProductCategory('');
        setProductName('');
        setProductPrice('');
        setProductDescription('');
        setProductSize('');
      })
      .catch((error) => {
        setError('There was an error uploading the product.', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="flex max-w-[320px] text-md lg:max-w-full flex-col space-y-3">
      {error && <div className="error  bg-red-500 text-white rounded-lg  py-3">{error} !</div>}
      {success && <div className="success bg-green-500 py-3 rounded-lg text-white">{success}</div>}
      <label>
         Title:
        <input type="text" className="border rounded mx-3" value={productName} onChange={(event) => setProductName(event.target.value)} />
      </label>
      <label>
         Description:
        <input type="text" className="border rounded mx-3" value={productDescription} onChange={(event) => setProductDescription(event.target.value)} />
      </label>
      <label>
         Price:
        <input type="number" className="border rounded mx-3" value={productPrice} onChange={(event) => setProductPrice(event.target.value)} />
      </label>
      <label>
         Sizes:
        <input type="text" className="border rounded mx-3" value={productSize} onChange={(event) => setProductSize(event.target.value)} />
      </label>
      <label>
         Categories:
        <input type="text" className="border rounded mx-3 " value={productCategory} onChange={(event) => setProductCategory(event.target.value)} />
      </label>
      <div className="gap-3 ">
        <input type="file" className=" my-auto py-2 rounded mx-auto" onChange={(e) => setImage(e.target.files[0])}></input>
        <button className="bg-green-500 " onClick={uploadImage}>
          Upload the Image
        </button>{' '}
      </div>
      {

        productImage ?
        <img src={productImage} /> : <div>{imageloader}</div>
      }
     

      <button className="bg-red-500" type="submit">
        Upload Product
      </button>
    </form>
  );
};

export default ProductUploadForm;
