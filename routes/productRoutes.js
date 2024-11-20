import express from 'express';
import { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct } from '../controller/productController.js';

const router = express.Router();

router.post('/create', createProduct);
router.get('/getAll', getAllProducts);
router.get('/get/:id', getProductById);
router.put('/update/:id', updateProduct);
router.delete('/delete/:id', deleteProduct);

export default router;