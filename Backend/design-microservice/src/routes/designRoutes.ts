import express from 'express';
import multer from 'multer';
import { createDesign, getDesigns } from '../controllers/designController';

const router = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

router.post('/', upload.single('designInput'), createDesign);
router.get('/', getDesigns);

export default router;
