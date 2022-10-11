import express from "express";
import homeController from '../controller/homeController'
let router = express.Router();

const initWebRouter = (app) => {

    router.get('/', homeController.getHomePage);
    router.get('/detail/:id', homeController.getDetailPage)

    router.get('/create', homeController.createPage)
    router.post('/create-blog', homeController.createNewBlog)

    router.post('/delete/:id', homeController.detelePage)

    return app.use('/blog', router)
}

export default initWebRouter;