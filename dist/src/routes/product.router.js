"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("../controllers/product.controller");
const initi_1 = require("../controllers/initi");
const router = (0, express_1.Router)();
router.post('/products', initi_1.initProducts);
router.get('/products', product_controller_1.getAllProducts);
exports.default = router;
