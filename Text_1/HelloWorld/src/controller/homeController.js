import pool from '../config/connectDb';

let getHomePage = async (req, res) => {
    //logic

    const [row, fields] = await pool.execute('SELECT * FROM `blogger`');

    return res.render('index.ejs', { dataBlogger: row })
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
    await pool.execute('delete from blogger where id = ?', [blogId])
    return res.redirect('/blog/')
}

let editFormPage = async (req, res) => {
    let blogId = req.params.id;
    let [blog] = await pool.execute('select * from blogger where id = ?', [blogId]);
    return res.render('edit.ejs', { dataBlogger: blog[0] });
}

let updatePage = async (req, res) => {
    let { name, content, status, id } = req.body;
    await pool.execute('update blogger set name = ?, content = ?, status = ? where id = ?',
        [name, content, status, id]);
    return res.redirect('/blog/');
}

let detailPage = async (req, res) => {
    let blogId = req.params.id;
    console.log(blogId);
    let [blog] = await pool.execute('select * from blogger where id = ?', [blogId]);
    return res.render('detail.ejs', { dataBlogger: blog[0] });
}
module.exports = {
    getHomePage, createPage, createNewBlog, detelePage, editFormPage, updatePage, detailPage
}