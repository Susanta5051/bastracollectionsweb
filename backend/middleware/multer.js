import multer from 'multer';
import path from 'path';

// Configure file storage
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });


export default upload;