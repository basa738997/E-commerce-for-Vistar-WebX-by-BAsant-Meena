import express from 'express';
import  { createCategory, getAllCategories, getCategoryById, updateCategory, deleteCategory } from '../controller/categoryController.js';

const router = express.Router();

router.post('/create', createCategory);
router.get('/getAll', getAllCategories);
router.get('/get/:id', getCategoryById);
router.put('/update/:id', updateCategory);
router.delete('/delete/:id', deleteCategory);

export default router;
