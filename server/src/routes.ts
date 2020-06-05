import express from 'express';
import knex from './database/connection';
import multer from 'multer';
import multerConfig from './config/multer';
import PointsController from './controllers/pointsController';
import ItemsController from './controllers/itemsController';
import { celebrate, Joi } from 'celebrate';

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();
const upload = multer(multerConfig);

routes.get('/items', itemsController.index );
routes.get('/points/:id', pointsController.show);
routes.get('/points/', pointsController.index);
routes.post(
    '/points',
    upload.single('image'),
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.number().required(),
            latitude:  Joi.number().required(),
            longitude: Joi.number().required(),
            city: Joi.string().required(),
            uf: Joi.string().required().max(2),
            items: Joi.string().required(),
        })
    }),
     pointsController.create
     );

export default routes;