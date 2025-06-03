import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['vestuario', 'utilería', 'escenografía', 'scripts', 'música', 'iluminación', 'otros']
  },
  condition: {
    type: String,
    enum: ['nuevo', 'como nuevo', 'buen estado', 'usado', 'para reparar']
  },
  price: {
    type: Number
  },
  images: [{
    type: String
  }],
  files: [{
    name: String,
    url: String,
    type: String
  }],
  tags: [{
    type: String
  }],
  location: {
    type: String
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Añadir índice de texto para búsqueda
ItemSchema.index({
  title: 'text',
  description: 'text',
  tags: 'text',
  category: 'text'
});

export default mongoose.models.Item || mongoose.model('Item', ItemSchema); 