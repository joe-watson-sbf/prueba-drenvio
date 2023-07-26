"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPriceForClient = void 0;
const product_model_1 = __importDefault(require("../models/product.model"));
const price_model_1 = __importDefault(require("../models/price.model"));
const getPriceForClient = (user_id, nombre_producto) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.default.findOne({ name: nombre_producto, stock: { $gt: 0 } });
    if (!product) {
        throw new Error('Product not found or out of stock');
    }
    const price = yield price_model_1.default.findOne({ user_id, brand: product.brand });
    const finalPrice = price ? price.specialPrice : product.basePrice;
    return { product: product.name, price: finalPrice };
});
exports.getPriceForClient = getPriceForClient;
