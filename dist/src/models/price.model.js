"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const priceSchema = new mongoose_1.Schema({
    user_id: { type: String, required: true },
    brand: { type: String, required: true },
    specialPrice: { type: Number, required: true },
});
const Price = (0, mongoose_1.model)('Price', priceSchema);
exports.default = Price;
