import express from 'express';

const server = express();

server.listen(3000, () => {
	console.log(`Sevidor en http://localhost://3000`);
});

