import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import bookRouter from './routes/bookRouter';
import { memberRouter } from './routes/memberRouter';
import cookieParser from 'cookie-parser';
import transactionRouter from './routes/transactionRouter';
import { verifyJWT } from './middleware/verifyJWT';

const app = express();

const PORT = 3001;

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use('/books', verifyJWT, bookRouter);

app.use('/members', memberRouter);

app.use('/transactions', transactionRouter);

const errorHandler = (
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction
): Response => {
  return response
    .status(500)
    .json({ message: 'Server error, please try again!' });
};

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
