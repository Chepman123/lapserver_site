import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

const app = express();
const PORT:number = Number(process.env.PORT);

app.use(cors());
app.use(express.json());

// Додай цей маршрут:
app.get('/', (req:Request, res:Response) => {
  res.send('Привіт із бекенду!');
});

// АPI маршрут:
app.get('/api/hello', (req:Request, res:Response) => {
  res.json({ message: 'Привіт з бекенду!' });
});

app.listen(PORT, () => {
  console.log(`Сервер запущено на http://localhost:${PORT}`);
});
