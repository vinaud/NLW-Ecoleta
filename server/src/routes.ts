import express from 'express';
import knex from './database/connection';
import multer from 'multer';
import multerConfig from './config/multer';
import PointsController from './controllers/pointsController';
import ItemsController from './controllers/itemsController';

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();
const upload = multer(multerConfig);

routes.get('/items', itemsController.index );

routes.post('/points',upload.single('image'), pointsController.create);
routes.get('/points/:id', pointsController.show);
routes.get('/points/', pointsController.index);


export default routes;