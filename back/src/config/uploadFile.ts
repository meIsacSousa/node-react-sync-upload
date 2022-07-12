import multer, { FileFilterCallback } from 'multer';
import crypto from 'crypto';
import path from 'path';
import { Request, Response, NextFunction } from 'express';


type DestinationCallback = (error: Error | null, destination: string) => void
type FileNameCallback = (error: Error | null, filename: string) => void

const config = {
    dest: path.resolve(__dirname, '..', '..', 'tmp'),
    storage: multer.diskStorage({
        destination: (
            _req: Request,
            _file: Express.Multer.File,
            cb: DestinationCallback
        ) => {

            cb(null, config.dest);

        },
        filename: (
            _req: Request,
            file: Express.Multer.File,
            cb: FileNameCallback
        ) => {

            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err, file.filename);
                let filename = `${hash.toString('hex')}-${file.originalname}`;
                cb(null, filename);
            });

        }
    }),
    limits: {},
    fileFilter: (
        _req: Request,
        file: Express.Multer.File,
        cb: FileFilterCallback
    ) => {
        const notAllowedMimes = [
            'application/x-msdownload',
            'text/javascript',
            'application/octet-stream'
        ];
        
        if (notAllowedMimes.includes(file.mimetype)) {
            return cb(new Error('Extension not allowed'));
        } else {
            cb(null, true);
        }
    }
}

const uploadFile = (req: Request, res: Response, next: NextFunction) => {
    let upload = multer(config).single('file');

    upload(req, res, err => {
        if (err) {
            return res.status(400).json({
                message: err.message
            });
        }
        next();
    });
}

export default uploadFile;