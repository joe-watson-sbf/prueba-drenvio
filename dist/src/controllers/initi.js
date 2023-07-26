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
exports.initProducts = void 0;
const product_model_1 = __importDefault(require("../models/product.model"));
const price_model_1 = __importDefault(require("../models/price.model"));
const productList = [
    new product_model_1.default({
        name: 'T-Shirt',
        brand: 'Adidas',
        stock: 20,
        basePrice: 200
    }),
    new product_model_1.default({
        name: 'Shorts',
        brand: 'Puma',
        stock: 5,
        basePrice: 500
    }),
    new product_model_1.default({
        name: 'Shirt',
        brand: 'Umbro',
        stock: 0,
        basePrice: 500
    }),
    new product_model_1.default({
        name: 'Sneakers',
        brand: 'Fila',
        stock: 25,
        basePrice: 500
    }),
];
const listSpecialPrice = [
    new price_model_1.default({
        user_id: '1',
        brand: 'Adidas',
        specialPrice: 150
    }),
    new price_model_1.default({
        user_id: '3',
        brand: 'Fila',
        specialPrice: 250
    }),
    new price_model_1.default({
        user_id: '2',
        brand: 'Puma',
        specialPrice: 200
    }),
];
function initProducts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // add if not exists products in db
        const count = yield product_model_1.default.count();
        if (count > 0) {
            return res.status(409).json({ message: 'Products already exists' });
        }
        try {
            yield product_model_1.default.insertMany(productList);
            yield price_model_1.default.insertMany(listSpecialPrice);
            res.status(201).json({ message: 'Products created' });
        }
        catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
}
exports.initProducts = initProducts;
