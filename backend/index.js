import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import productRoutes from "./routes/products.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

const app = express();
dotenv.config();

//Middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

//
// app.get("/user", (req, res) => {
//   const q = "SELECT * FROM user";
//   db.query(q, (err, data) => {
//     if (err) return res.json(err);
//     return res.json(data);
//   });
// });

// app.post("/user", (req, res) => {
//   const q =
//     "INSERT INTO user (`userid`,`username`,`name`,`password`,`email`,`phoneno`,`image`,`role`) VALUES (?)";
//   const values = [
//     req.body.userid,
//     req.body.username,
//     req.body.name,
//     req.body.password,
//     req.body.email,
//     req.body.phoneno,
//     req.body.image,
//     req.body.role,
//   ];

//   db.query(q, [values], (err, data) => {
//     if (err) return res.json(err);
//     return res.json("User has been created");
//   });
// });

// app.delete("/user/:id", (req, res) => {
//   const userID = req.params.id;
//   const q = "DELETE FROM user WHERE userid = ?";

//   db.query(q, [userID], (err, data) => {
//     if (err) return res.json(err);
//     return res.json("User has been deleted");
//   });
// });

// app.put("/user/:id", (req, res) => {
//   const userID = req.params.id;
//   const q =
//     "UPDATE user SET `username` = ?, `name` = ?, `password` = ?, `email` = ?, `phoneno` = ?, `image` = ?, `role` = ? WHERE userid = ?";

//   const values = [
//     req.body.username,
//     req.body.name,
//     req.body.password,
//     req.body.email,
//     req.body.phoneno,
//     req.body.image,
//     req.body.role,
//   ];

//   db.query(q, [...values, userID], (err, data) => {
//     if (err) return res.json(err);
//     return res.json("User has been updated successfully");
//   });
// });

app.listen(8800, () => {
  console.log("Connected to backend!");
});