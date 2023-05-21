const db = require("../db");

exports.getAllProducts = async (req, res) => {
  try {
    const collection = await db.connectToDb();
    const findResult = await collection.inventoryCollection.find({}).toArray();
    res.send(findResult);
  } catch (err) {
    console.log(err);
  }
};

const findLowQuantity = (product) => {
  return product.instock < 100;
};

exports.getProductsLowQuantity = async (req, res) => {
  try {
    const collection = await db.connectToDb();
    const findResult = await collection.inventoryCollection
      .find({ instock: { $lt: 100 } })
      .toArray();
    res.send(findResult);
  } catch (err) {
    console.log(err);
  }
};
