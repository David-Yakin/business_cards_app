const DB = process.env.DB || "MONGODB";

const find = async () => {
  if (DB === "MONGODB") {
    try {
      //   throw new Error("Opss... i did it again!");
      return Promise.resolve([{ cards: "in mongodb" }]);
    } catch (error) {
      error.status = 404;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("not in mongodb");
};

const findOne = async (id) => {
  if (DB === "MONGODB") {
    try {
      //   throw new Error("Opss... i did it again!");
      return Promise.resolve(`in findOne card no: ${id}`);
    } catch (error) {
      error.status = 404;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("not in mongodb");
};

const create = async (card) => {
  if (DB === "MONGODB") {
    try {
      card._id = "123456";
      //   throw new Error("Opss... i did it again!");
      return Promise.resolve(card);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("not in mongodb");
};

exports.find = find;
exports.findOne = findOne;
exports.create = create;
