import express from "express";
import homeController from '../controller/homeController'
let router = express.Router();

const initWebRouter = (app) => {

    router.get('/', homeController.getHomePage);

    router.get('/create', homeController.createPage)
    router.post('/create-blog', homeController.createNewBlog)

    router.post('/delete/:id', homeController.detelePage)

    router.get('/edit-form/:id', homeController.editFormPage)
    router.post('/update-blog', homeController.updatePage)

    router.get('/detail/:id', homeController.detailPage)

    return app.use('/blog', router)
}

export default initWebRouter;