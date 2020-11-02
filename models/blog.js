const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// structure
const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
// modal
const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
