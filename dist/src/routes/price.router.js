"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const price_controller_1 = require("../controllers/price.controller");
const router = (0, express_1.Router)();
router.get('/price/:user_id/:nombre_producto', price_controller_1.getProductSpecialPrice);
exports.default = router;
