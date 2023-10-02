import React from "react";

const instagramImages = [
  "https://images.unsplash.com/photo-1612817288484-6f916006741a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80",
  "https://images.unsplash.com/photo-1631390179406-0bfe17e9f89d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3396&q=80",
  "https://images.unsplash.com/photo-1597931752949-98c74b5b159f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  "https://st4.depositphotos.com/1000589/21181/i/450/depositphotos_211816616-stock-photo-magnesium-rich-foods-top-view.jpg",
  "https://media.istockphoto.com/id/502151114/photo/products-rich-in-magnesium-on-wooden-spoons.jpg?s=612x612&w=0&k=20&c=FexJZIXfVN7h3OEcgIaMD78sf-2DuAfxvk75f_4JTwk=",
  "https://st3.depositphotos.com/1665362/15741/i/450/depositphotos_157419920-stock-photo-assortment-of-healthy-high-magnesium.jpg",
  "https://media.istockphoto.com/id/676447482/photo/products-rich-of-potassium-and-magnesium.jpg?s=612x612&w=0&k=20&c=ZAN6B8DYryv_KwPUk_1qhB4HR1N3lsq0rp8z4sQEgog=",
  "https://thumbs.dreamstime.com/b/healthy-food-nutrition-dieting-concept-assortment-high-magne-healthy-food-nutrition-dieting-concept-assortment-high-115023517.jpg",
];

const Instagram = () => {
  return (
    <div className="">
      <h2 className="pl-16 text-xl font-bold">Follow us on instagram</h2>
      <div className="  grid grid-cols-6 grid-rows-2  place-items-center mt-12 gap-y-6 px-8 ">
        {instagramImages.map((gram, key) => (
          <img
            src={gram}
            key={gram}
            className="h-60 w-60 object-fit rounded-md"
            alt={gram}
          ></img>
        ))}
      </div>
    </div>
  );
};

export default Instagram;
