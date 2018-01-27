import * as mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
  name: String,
  date: String,
  text: String,
  price: Number
});

const Article = mongoose.model('Article', articleSchema);

export default Article;
