const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogContoller');

router.get('/create', blogController.blog_create);

// to get blogs from db to webpage
router.get('/', blogController.blog_index);

// to store data from the form and display it to webpage
router.post('/', blogController.blog_post);

// to get specific blog
router.get('/:id', blogController.blog_get_id);

// to delete
router.delete('/:id', blogController.blog_delete);

module.exports = router;
