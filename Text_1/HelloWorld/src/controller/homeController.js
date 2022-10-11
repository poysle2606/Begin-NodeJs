import pool from '../config/connectDb';

let getHomePage = async (req, res) => {
    //logic

    const [row, fields] = await pool.execute('SELECT * FROM `blogger`');

    return res.render('index.ejs', { dataBlogger: row })
}

let getDetailPage = async (req, res) => {
    let id = req.params.id;
    let [blogger, fields] = await pool.execute('select * from `blogger` where id = ?', [id]);
    return res.send(JSON.stringify(blogger))
}

let createPage = async (req, res) => {
    const [row, fields] = await pool.execute('SELECT * FROM `blogger`');

    return res.render('create.ejs', { dataBlogger: row })
}

let createNewBlog = async (req, res) => {
    let { name, content, status } = req.body;
    await pool.execute('insert into blogger(name, content, status) values (?, ?, ?)',
        [name, content, status]);

    return res.redirect('/blog/')
}

let detelePage = async (req, res) => {
    let blogId = req.params.id;
    console.log(1111);
    console.log(blogId);
    await pool.execute('delete from blogger where id = ?', [blogId])
    return res.redirect('/blog/')
}
module.exports = {
    getHomePage, getDetailPage, createPage, createNewBlog, detelePage
}