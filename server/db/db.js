const Sequelize = require("sequelize");
const { STRING, INTEGER } = Sequelize;
const conn = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/stackathon"
);

const { quotesData } = require("../../script/quotesData");

const Quote = conn.define("quote", {
  quote: STRING,
  author: STRING,
  count: INTEGER,
});

const syncAndSeed = async () => {
  await conn.sync({ force: true });
  quotesData.forEach(async (quote) => await Quote.create(quote));
};

module.exports = {
  syncAndSeed,
  models: {
    Quote,
  },
};
