import { Router } from 'express';
import { createPost } from '../handlers/Posts.js';

const server = Router();

server.post('/', createPost);

export default server;
