const Blog = require('../models/blog');

// blog_create,blog_post,nog_delete,blog_get_id,blog_get
const blog_create = (req, res) => {
  res.render('create', { title: 'Create' });
};

const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render('index', { title: 'allBlogs', blogs: result });
    })
    .catch((err) => console.log(err));
};

const blog_post = (req, res) => {
  // console.log(req.body);
  const blog = new Blog(req.body); //created an instance
  blog
    .save()
    .then((result) => res.redirect('/blogs'))
    .catch((err) => console.log(err));
};

const blog_get_id = (req, res) => {
  const id = req.params.id;

  Blog.findById(id)
    .then((result) => {
      res.render('details', { blog: result, title: 'blogDetails' });
    })
    .catch((err) => console.log(err));
};

const blog_delete = (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: '/blogs' });
    })
    .catch((err) => console.log(err));
};

module.exports = {
  blog_create,
  blog_delete,
  blog_index,
  blog_get_id,
  blog_post,
};
