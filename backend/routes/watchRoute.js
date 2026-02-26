import express from 'express';
import { addWatch, listWatch, removeWatch } from '../controllers/watchController.js';
import multer from 'multer';
const watchRouter = express.Router();

//Image Storage Engine (Saving Image to uploads folder & rename it)

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        return cb(null,`${Date.now()}${file.originalname}`);
    }
})

const upload = multer({ storage: storage})

watchRouter.get("/list",listWatch);
watchRouter.post("/add",upload.single('image'),addWatch);
watchRouter.post("/remove",removeWatch);

export default watchRouter;