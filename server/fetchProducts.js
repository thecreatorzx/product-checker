const axios = require("axios");

// Function to fetch product info by barcode
async function getProductInfo(barcode) {
  try {
    const response = await axios.get(
      `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`
    );
    const product = response.data.product;

    if (product) {
      const productName = product.product_name;
      const ingredients = product.ingredients_text;
      const nutritionFacts = product.nutriments;

      // console.log(product);

      return {
        name: productName,
        ingredients: ingredients,
        nutritionFacts: nutritionFacts,
      };
    } else {
      return { error: "Product not found" };
    }
  } catch (error) {
    return { error: "Error fetching product information" };
  }
}

const barcode = "8901063139374";
getProductInfo(barcode);

getProductInfo(barcode)
  .then((productInfo) => {
    if (productInfo.error) {
      console.log(productInfo.error);
    } else {
      console.log("Product info:", productInfo);
      console.log("Product Name:", productInfo.name);
      console.log("Ingredients:", productInfo.ingredients);
      console.log("Nutrition Facts:", productInfo.nutritionFacts);
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });
