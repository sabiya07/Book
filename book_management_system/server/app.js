import express from "express";
import config from "config";

import "./utils/dbconnect.js";

import UserRoutes from "./controllers/user/index.js";
import RootRoutes from "./controllers/root/index.js";

const app = express();
const port = config.get("PORT");
app.use(express.json())

app.get("/", (req, res) => {
    res.send("This is Book Management System API Backend")
})

app.use("/api/user", UserRoutes);
app.use("/api",RootRoutes);

app.listen(port, () => {
    console.log("Server Started at Port : ", port);
})


