import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const server = express();
const port = process.env.port || 3001;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
