import app from './app';
import 'reflect-metadata';

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

