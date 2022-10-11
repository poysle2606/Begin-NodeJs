import express from 'express';
import configViewEngine from './config/viewEngine';
import initWebRouter from './router/web'
// import connection from './config/connectDb';
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

configViewEngine(app);

initWebRouter(app);

app.listen(port, () => {
    console.log(`Example app listening at view http://locallhost:${port}`);
})