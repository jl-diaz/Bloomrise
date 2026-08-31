require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { Message, BlogPost, ForumPost } = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// --- DB Connection ---
if (!process.env.MONGODB_URI) {
  console.warn("WARNING: MONGODB_URI no está definido en el archivo .env");
} else {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Conectado a MongoDB Atlas'))
    .catch(err => console.error('Error conectando a MongoDB:', err));
}

// --- Rutas de Mensajes ---
app.post('/api/messages', async (req, res) => {
  try {
    const { email, message } = req.body;
    const newMessage = new Message({ email, message });
    await newMessage.save();
    res.status(201).json({ success: true, data: newMessage });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/api/messages', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const messages = await Message.find().sort({ createdAt: -1 }).skip(skip).limit(limit);
    const total = await Message.countDocuments();

    res.json({ success: true, data: messages, total, page, totalPages: Math.ceil(total / limit) });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.put('/api/messages/:id', async (req, res) => {
  try {
    const { status } = req.body;
    const message = await Message.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.json({ success: true, data: message });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// --- Rutas del Blog ---
app.post('/api/blog', async (req, res) => {
  try {
    const { date, content } = req.body;
    let post = await BlogPost.findOne({ date });
    if (post) {
      post.content = content;
      await post.save();
    } else {
      post = new BlogPost({ date, content });
      await post.save();
    }
    res.status(200).json({ success: true, data: post });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/api/blog/:date', async (req, res) => {
  try {
    const { date } = req.params;
    const post = await BlogPost.findOne({ date });
    res.json({ success: true, data: post });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/api/blog-dates', async (req, res) => {
  try {
    const posts = await BlogPost.find({}, 'date');
    res.json({ success: true, data: posts.map(p => p.date) });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/api/blog', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const posts = await BlogPost.find().sort({ date: -1 }).skip(skip).limit(limit);
    const total = await BlogPost.countDocuments();

    res.json({ success: true, data: posts, total, page, totalPages: Math.ceil(total / limit) });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.delete('/api/blog/:id', async (req, res) => {
  try {
    await BlogPost.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// --- Rutas del Foro ---
app.post('/api/forum', async (req, res) => {
  try {
    const { author, content } = req.body;
    const post = new ForumPost({
      author: author || 'Gatito Anónimo',
      content
    });
    await post.save();
    res.status(201).json({ success: true, data: post });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/api/forum', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * limit;

    const posts = await ForumPost.find().sort({ createdAt: -1 }).skip(skip).limit(limit);
    const total = await ForumPost.countDocuments();

    res.json({ success: true, data: posts, total, page, totalPages: Math.ceil(total / limit) });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/api/forum/:id', async (req, res) => {
  try {
    const post = await ForumPost.findById(req.params.id);
    res.json({ success: true, data: post });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/api/forum/:id/comments', async (req, res) => {
  try {
    const { author, content } = req.body;
    const post = await ForumPost.findById(req.params.id);
    if (!post) return res.status(404).json({ success: false, error: 'Post no encontrado' });
    
    post.comments.push({
      author: author || 'Gatito Anónimo',
      content
    });
    await post.save();
    res.status(201).json({ success: true, data: post });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en el puerto ${PORT}`);
});

module.exports = app;
