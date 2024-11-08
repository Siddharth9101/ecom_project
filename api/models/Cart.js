const { Schema, model } = require("mongoose");

const cartSchema = Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: String,
        quantity: {
          type: String,
          default: 1,
        },
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

module.exports = model("Cart", cartSchema);
