import sirv from 'sirv';
import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import * as sapper from '@sapper/server';
import formidable from 'express-formidable';
import path from 'path';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const app = express()

app.use(compression({ threshold: 0 }));
app.use(sirv('static', { dev }));
app.use(formidable());
app.use(bodyParser.json());
app.use(sapper.middleware());

app.listen(PORT, err => {
	if (err) console.log('error', err);
});
