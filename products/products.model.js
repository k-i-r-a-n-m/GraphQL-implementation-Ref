const products = [
  {
    id: "redShoe",
    description: "red shoe",
    price: 42.12,
    reviews: [],
  },
  {
    id: "blueJean",
    description: "Blue Jeans",
    price: 55.55,
    reviews: [],
  },
];


const getAllProducts = () => {
    return products
}

const getProduct = (id) => {
  console.log(id)
  return products.find(product=>id==product.id)
}

const getProductsByPrice = (min, max) => {
  return products.filter(product=>product.price>=min && product.price<=max)
}

const addNewProduct = (id, description, price) => {
  const newProduct = {
    // es6 syntax id:id
    id,
    description,
    reviews: [],
    price,
  }
  products.push(newProduct)
  return newProduct
}

const addNewProductReview = (id, rating, comment) => {
  const matchedProduct = getProduct(id)
  if (matchedProduct) {
    const newProductReview = {
      rating,
      comment
    }
    matchedProduct.reviews.push(newProductReview)
    return  newProductReview
  }
};
module.exports = {
  getAllProducts,
  getProduct,
  getProductsByPrice,
  addNewProduct,
  addNewProductReview,
};