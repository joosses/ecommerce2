import express from 'express';
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, path.join(__dirname, '../../uploads'));
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}.jpg`);
  },
});

export const upload = multer({ storage });

const router = express.Router();

router.post('/', upload.single('image'), (req, res) => {
  console.log(req.file)
  res.send(`/${req.file.filename}`);
});
export default router;
