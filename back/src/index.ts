import express from 'express';
import cors from 'cors';
import { uploadRoutes } from './upload';


const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(uploadRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});