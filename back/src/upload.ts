import { Response, Request, Router } from 'express';
import upload from './config/uploadFile';

const uploadRoutes = Router();
uploadRoutes.post('/uploads', upload, (_req: Request, res: Response) => {
    res.json({
        message: 'Uploaded successfully'
    });
});

export { uploadRoutes }