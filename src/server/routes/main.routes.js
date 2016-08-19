import express from 'express';
import request from 'request';
import bodyParser from 'body-parser';
const router = express.Router();

const jsonParser = bodyParser.json() 
const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', (req, res) => {
  res.render('index', { title: 'index'});
});

router.get('/dashboard', (req, res) => {
  res.render('index', { title: 'index'});
});

router.get('/dashboard/products', (req, res) => {
  res.render('index', { title: 'index'});
});

export default router;