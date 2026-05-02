import { config } from 'dotenv';
import app from './app';

config();

const PORT = Number(process.env.PORT ?? 4000);

app.listen(PORT, () => {
  console.log(`🚀 Biowoma backend rodando em http://localhost:${PORT}`);
});
