const products = require("./products.model");
module.exports = {
  Query: {
    products: () => {
    
      return products.getAllProducts();
    },
    product: (_, args) => {
      return products.getProduct(args.id);
    },
    productsByPrice: (_, args) => {
      return products.getProductsByPrice(args.min, args.max);
    },
    },
    
    Mutation: {
        addNewProduct: (_, args) => {
            return products.addNewProduct(args.id,args.description,args.price)
        },
        addNewProductReview: (_, args) => {
            return products.addNewProductReview(args.id,args.rating,args.comment)
        }

    }
};
