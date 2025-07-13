// middlewares/multer.js
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const uploadPath = path.resolve('uploads');
if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, uploadPath),
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const baseName = path.basename(file.originalname, ext);
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, `${baseName}-${uniqueSuffix}${ext}`);
    }
});

const multerInstance = multer({
    storage,
    limits: { fileSize: 10 * 1024 * 1024 }
});

// ✅ Named exports only
export const uploadSingle = (fieldName) => multerInstance.single(fieldName);
export const uploadArray = (fieldName, maxCount = 5) => multerInstance.array(fieldName, maxCount);
export const uploadFields = (fieldsArray) => multerInstance.fields(fieldsArray);
export const uploadAny = () => multerInstance.any();
