module.exports = {
  mutipleMongooseToObject: (mongooseArray) =>
    mongooseArray.map((product) => product.toObject()),
  mongooseToObject: (mongooseObject) => mongooseObject.toObject(),
};
