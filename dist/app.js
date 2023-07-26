"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const product_router_1 = __importDefault(require("./src/routes/product.router"));
const price_router_1 = __importDefault(require("./src/routes/price.router"));
const dotenv_1 = require("dotenv");
const app = (0, express_1.default)();
(0, dotenv_1.configDotenv)();
// Connect to the database
const MONGO_URI = process.env.MONGO_URI || '';
mongoose_1.default.connect(MONGO_URI)
    .then(() => console.log('Connected to the database'))
    .catch(err => console.error('Database connection error:', err));
// Middleware
app.use(express_1.default.json());
// Routes
app.use(product_router_1.default);
app.use(price_router_1.default);
// 404 Route
app.use((req, res, next) => {
    res.status(404).json({ error: 'Route not found' });
});
exports.default = app;
