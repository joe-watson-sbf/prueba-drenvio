"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    stock: { type: Number, required: true },
    basePrice: { type: Number, required: true },
});
const Product = (0, mongoose_1.model)('Product', productSchema);
exports.default = Product;
