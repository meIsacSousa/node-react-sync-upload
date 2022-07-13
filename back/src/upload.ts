import { Response, Request, Router } from 'express';
import upload from './config/uploadFile';

const uploadRoutes = Router();
uploadRoutes.post('/uploads', upload, (req: Request, res: Response) => {
    if (!req.file) {
        return res.status(400).json({
            message: 'No file provided'
        });
    }

    return res.json({
        message: 'Uploaded successfully'
    });
});

export { uploadRoutes }