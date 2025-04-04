import express from 'express';
import { create } from 'express-handlebars';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import indexRouter from './routes/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load config
dotenv.config({ path: './config/config.env' });

// init app
const app = express();
const hbs = create({
  defaultLayout: "main",
  extname: ".hbs",
  partialsDir: path.join(__dirname, 'views/partials'),
  helpers: {
    // renderContent: function (content) {
    //   const template = hbs.handlebars.compile(content);
    //   return new hbs.handlebars.SafeString(template(this));
    // },
    block: function (name) {
      const blocks = this._blocks || {};
      return blocks[name] || '';
    },
    contentFor: function (name, options) {
      const blocks = this._blocks || {};
      blocks[name] = options.fn(this);
      this._blocks = blocks;
    }
  }
});

// Set Static Folder
app.use(express.static(`${__dirname}/public`));

// Handlesbars Middleware
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', indexRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port} >>> http://localhost:${port}`);
});