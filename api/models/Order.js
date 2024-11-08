const { Schema, model } = require("mongoose");

const orderSchema = Schema(
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
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "pending" },
  },
  { versionKey: false, timestamps: true }
);

module.exports = model("Order", orderSchema);
