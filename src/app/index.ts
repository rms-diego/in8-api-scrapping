import 'dotenv/config';
import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import { errorMiddleware } from '@/utils/errorMiddleware';
import morgan from 'morgan';
import helmet from 'helmet';

const app = express();
app.use(express.json()); // enable json use
app.use(express.urlencoded({ extended: true })); // enable www-form-urlencoded
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());

// error handling
app.use(errorMiddleware);

export { app };
