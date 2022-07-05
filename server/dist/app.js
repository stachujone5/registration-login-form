"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route_1 = require("./routes/route");
const app = (0, express_1.default)();
app.use('/huj', (req, res) => {
    (0, route_1.router)(req);
    res.send('Hey');
});
app.listen(5000, () => {
    console.log('started');
});
//# sourceMappingURL=app.js.map