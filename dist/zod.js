"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const profile = zod_1.z.object({
    name: zod_1.z.string().min(1, { message: "Name cannot be empty" }),
    email: zod_1.z.string().email({ message: "Email cannot be empty" }),
    age: zod_1.z.number().min(18, { message: "you must be 18" }).optional(),
});
app.put("/user", (req, res) => {
    const result = profile.safeParse(req.body);
    const update = req.body;
    if (!result.success) {
        res.status(400).send(result.error.message);
    }
    else {
        res.send("User created");
    }
});
