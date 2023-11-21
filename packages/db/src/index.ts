import mongoose, { Document, Model } from "mongoose";

// export interface UserDoc extends Document {
//   email: string;
//   password: string;
// }

// export interface RegistrationDoc extends Document {
//   email: string;
//   password: string;
//   confirmPassword: string;
// }

// const OrderItemSchema = new mongoose.Schema({
//   product: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Product",
//     required: [true, "Please provide product"],
//   },
//   quantity: {
//     type: Number,
//     required: [true, "Please provide quantity"],
//   },
// });

// const OrderSchema = new mongoose.Schema({
//   orderItems: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "OrderItem",
//       required: [true, "Please provide order items"],
//     },
//   ],
//   amount: {
//     type: Number,
//     required: [true, "Please provide amount"],
//   },
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//     required: [true, "Please provide user"],
//   },
// });

// const ProductSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, "Please provide name"],
//     minlength: 3,
//     maxlength: 50,
//   },
//   description: {
//     type: String,
//     required: [true, "Please provide description"],
//     minlength: 1,
//     maxlength: 2000,
//   },
//   category: {
//     type: String,
//     enum: ["electronics", "clothing", "footwear", "others"],
//   },
//   image: {
//     type: String,
//     default: "",
//   },
//   price: {
//     type: Number,
//     required: [true, "Please provide product price"],
//   },
//   inStock: {
//     type: Boolean,
//     default: true,
//   },
//   rating: {
//     type: Number,
//     default: 1.0,
//   },
//   seller: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//     required: [true, "Please provide seller"],
//   },
// });

// <UserDoc>

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide email"],
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
});

// const RegistrationSchema = new mongoose.Schema<RegistrationDoc>(
//   {
//     email: {
//       type: String,
//       required: [true, "Please provide email"],
//       unique: true,
//       match: [
//         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//         "Please provide a valid email",
//       ],
//     },
//     password: {
//       type: String,
//       required: [true, "Please provide a password"],
//       minlength: 8, // Adjust minimum password length as needed
//     },
//     confirmPassword: {
//       type: String,
//       required: [true, "Please confirm your password"],
//     },
//   },
//   { timestamps: true }
// );

// RegistrationSchema.pre<RegistrationDoc>("save", async function (next) {
//   if (this.isModified("password") && this.confirmPassword !== this.password) {
//     throw new Error("Passwords do not match");
//   }
//   next();
// });

// const OrderItem = mongoose.model("OrderItem", OrderItemSchema);
// const Order = mongoose.model("Order", OrderSchema);
// const Product = mongoose.model("Product", ProductSchema);

// : Model<UserDoc>

const User = mongoose.model("User", userSchema);
// const RegistrationModel: Model<RegistrationDoc> = mongoose.model(
//   "Registration",
//   RegistrationSchema
// );

export { User };
