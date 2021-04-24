import express from 'express';
import router from './routes/index.js';
const server = express();

server.use(express.json());

server.use('/api/', router);

server.listen(3000, () => {
	console.log(`Sevidor en http://localhost://3000`);
});
