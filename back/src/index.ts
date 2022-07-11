import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { uploadRoutes } from './upload';
import multer from 'multer';

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(uploadRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});