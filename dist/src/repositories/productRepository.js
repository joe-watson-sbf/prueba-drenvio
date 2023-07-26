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
exports.getProductByName = exports.getProductsInStock = void 0;
const product_model_1 = __importDefault(require("../models/product.model"));
const getProductsInStock = () => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield product_model_1.default.find({ stock: { $gt: 0 } });
    return products;
});
exports.getProductsInStock = getProductsInStock;
const getProductByName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.default.findOne({ name });
    return product;
});
exports.getProductByName = getProductByName;
