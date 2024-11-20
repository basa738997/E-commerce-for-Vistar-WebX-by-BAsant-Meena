import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import logger from "morgan";
import errorHandler from './utils/errorHandler.js';

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();
const port = process.env.PORT || 5000;

// Connect to the database
connectDB();

// Middleware
app.use(logger('tiny'));
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/categories', categoryRoutes);

// Error handling
app.all('*', (req, res, next) => {
  next(new errorHandler(`Requested URL Not Found ${req.url}`, 404));
});
app.use(errorHandler);

// Start the server
app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
})