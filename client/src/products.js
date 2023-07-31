import elderberry from "./elderberry.jpg";

export const productsList = [
  {
    id: "price_1NXAMKBG3FoOFehU9UM2qCJb",
    stripe: "price_1NXAMKBG3FoOFehU9UM2qCJb",
    sku: "elderberry200",
    name: "Sambucus",
    name2: "Elderberry Syrup",
    brand: "natural and naqi",
    size: "200ml",
    price: 9.99,
    image: elderberry,
    ingredients: "honey water cinamon cloves",
    description1: "here is some description about elderberry",
    description2:
      "here is the second description about elderberr hefsjhad jfskn dbsnb hsnkjfbnskl jhnskljf jksfsjks jflsnd ksjf nskjfl nklsfjldnknj bsdfnjaskf bjvaksv bafsnz` jkvx bdjfy",
    benefits: "here are some benefits about elderberry",
    howToUse: "here are some ways how to use Elderberry",
    catergoryTags: "organic healthy natural",
  },
  {
    id: "price_1NXAMKBG3FoOFehU9UM2qCJb",
    sku: "Seamoss100",
    name: "Seamoss",
    name2: "Irish Sea Moss",
    brand: "natural and naqi",
    size: "380ml",
    price: 19.99,
    image: elderberry,
    ingredients: "honey water cinamon cloves",
    description1: "here is some description about elderberry",
    description2:
      "here is the second description about elderberr hefsjhad jfskn dbsnb hsnkjfbnskl jhnskljf jksfsjks jflsnd ksjf nskjfl nklsfjldnknj bsdfnjaskf bjvaksv bafsnz` jkvx bdjfy",
    benefits: "here are some benefits about elderberry",
    howToUse: "here are some ways how to use Elderberry",
    catergoryTags: "organic healthy natural",
  },
  {
    id: "price_1NXAMKBG3FoOFehU9UM2qCJb",
    sku: "magnesium",
    name: "magnesium",
    name2: "Magnesium Spray ",
    brand: "natural and naqi",
    size: "200ml",
    price: 239.99,
    image: elderberry,
    ingredients: "honey water cinamon cloves",
    description1: "here is some description about elderberry",
    description2:
      "here is the second description about elderberr hefsjhad jfskn dbsnb hsnkjfbnskl jhnskljf jksfsjks jflsnd ksjf nskjfl nklsfjldnknj bsdfnjaskf bjvaksv bafsnz` jkvx bdjfy",
    benefits: "here are some benefits about elderberry",
    howToUse: "here are some ways how to use Elderberry",
    catergoryTags: "organic healthy natural",
  },
];
export const getProductData = (id) => {
  let productData = productsList.find((product) => product.id === id);

  if (productData == undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return productData;
};
