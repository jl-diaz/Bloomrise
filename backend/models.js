const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  email: { type: String, required: true },
  message: { type: String, required: true },
  status: { type: String, enum: ['sin contestar', 'contestado'], default: 'sin contestar' },
  createdAt: { type: Date, default: Date.now }
});

const blogPostSchema = new mongoose.Schema({
  date: { type: String, required: true, unique: true }, // Formato 'YYYY-MM-DD'
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const forumCommentSchema = new mongoose.Schema({
  author: { type: String, default: 'Gatito Anónimo' },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const forumPostSchema = new mongoose.Schema({
  author: { type: String, default: 'Gatito Anónimo' },
  content: { type: String, required: true },
  comments: [forumCommentSchema],
  createdAt: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);
const BlogPost = mongoose.model('BlogPost', blogPostSchema);
const ForumPost = mongoose.model('ForumPost', forumPostSchema);

module.exports = {
  Message,
  BlogPost,
  ForumPost
};
