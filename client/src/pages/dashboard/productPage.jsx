import React, { useEffect, useState } from "react";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase";

const ProductPage = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");

  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className="bg-gray-50">
      <div className="pt-12  flex flex-col items-center pb-12">
        <h3 className="text-3xl">New Product</h3>
        <div className=" bg-white border w-2/3 mt-4">
          <form className="flex justify-evenly py-4">
            <div className="p-6 border-r-2">
              <div className="flex flex-col">
                <label className="pb-2">Product</label>
                <input
                  name="product"
                  type="text"
                  className="h-8 border w-72 bg-gray-100 rounded-md pl-2 font-medium text-gray-600"
                ></input>
              </div>
              <div className="flex flex-col">
                <label className="py-2">Title</label>
                <input
                  name="title"
                  type="text"
                  className="h-8 border w-72 bg-gray-100 rounded-md pl-2 font-medium text-gray-600"
                ></input>
              </div>
              <div className="flex flex-col">
                <label className="py-2">Price</label>
                <input
                  name="price"
                  type="number"
                  className="h-8 border w-72 bg-gray-100 rounded-md pl-2 font-medium text-gray-600"
                ></input>
              </div>
              <div className="flex flex-col">
                <label className="py-2">SKU</label>
                <input
                  name="sku"
                  type="text"
                  className="h-8 border w-72 bg-gray-100 rounded-md pl-2 font-medium text-gray-600"
                ></input>
              </div>
              <div className="flex flex-col">
                <label className="py-2">Brand</label>
                <input
                  name="brand"
                  type="text"
                  className="h-8 border w-72 bg-gray-100 rounded-md pl-2 font-medium text-gray-600"
                ></input>
              </div>
              <div className="flex flex-col">
                <label className="py-2">Ingredients</label>
                <input
                  name="ingredients"
                  type="text"
                  className="h-8 border w-72 bg-gray-100 rounded-md pl-2 font-medium text-gray-600"
                ></input>
              </div>
              <div className="flex flex-col">
                <label className="py-2">Tags</label>
                <input
                  name="tags"
                  type="text"
                  className="h-8 border w-72 bg-gray-100 rounded-md pl-2 font-medium text-gray-600"
                ></input>
              </div>
            </div>
            <div className="p-6">
              <div className="flex flex-col">
                <label className="pb-2">Title Description </label>
                <textarea
                  rows="2"
                  cols="50"
                  wrap="physical"
                  className="border bg-gray-100 p-2 font-medium text-gray-600"
                  type="text"
                  name="titleDescription"
                ></textarea>
              </div>
              <div className="flex flex-col">
                <label className="py-2">Product Description</label>
                <textarea
                  rows="2"
                  cols="50"
                  wrap="physical"
                  name="productDescription"
                  className="border bg-gray-100 p-2 font-medium text-gray-600"
                  type="text"
                ></textarea>
              </div>
              <div className="flex flex-col">
                <label className="py-2">Benefits</label>
                <textarea
                  rows="2"
                  cols="50"
                  wrap="physical"
                  name="benefits"
                  className="border bg-gray-100 p-2 font-medium text-gray-600"
                  type="text"
                ></textarea>
              </div>
              <div className="flex flex-col">
                <label className="py-2">How to use</label>
                <textarea
                  rows="2"
                  cols="50"
                  wrap="physical"
                  name="howToUse"
                  className="border bg-gray-100 p-2 font-medium text-gray-600"
                  type="text"
                ></textarea>
              </div>
              <div className="flex flex-col py-2 items-start">
                <label className="pb-2">Upload Images</label>
                <input
                  type="file"
                  onChange={(e) => {
                    setImageUpload(e.target.files[0]);
                  }}
                ></input>
                <button className="pt-2" onClick={uploadFile}>
                  Upload Image
                </button>
              </div>

              <button className="bg-sky-800 rounded-md w-32 text-sm h-8 mt-6 text-gray-200">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ProductPage;
