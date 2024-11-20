import express from 'express';
import  { createCategory, getAllCategories, getCategoryById, updateCategory, deleteCategory } from '../controller/categoryController.js';

const router = express.Router();

router.post('/create', createCategory);
router.get('/get', getAllCategories);
router.get('/:id', getCategoryById);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);

export default router;
