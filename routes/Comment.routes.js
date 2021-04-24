import { Router } from 'express';
import { createComment } from '../handlers/Comments.js';

const server = Router();

server.post('/', createComment);

export default server;
