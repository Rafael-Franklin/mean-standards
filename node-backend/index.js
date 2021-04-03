const multipart = require('connect-multiparty');
let express = require('express'),
  path = require('path'),
  mongoose = require('mongoose'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  mongoDb = require('./database/db');
  queue = require('../queue');

mongoose.Promise = global.Promise;
mongoose.connect(mongoDb.db, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).then(() => {
    console.log('Database sucessfully connected ')
  },
  error => {
    console.log('Database error: ' + error)
  }
)

const standardRoute = require('./routes/standard.routes')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());

// upload de arquivos
const multipartMiddleware =  multipart({uploadDir: './uploads'})
app.post('/upload', multipartMiddleware, (req, res) => {
    const files = req.files;
    res.json({message: files})
});

// Static directory path
app.use(express.static(path.join(__dirname, 'dist/angular-mean-sigo')));


// API root
app.use('/api', standardRoute)

// PORT
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log('Listening on port ' + port)
})

// 404 Handler
app.use((req, res, next) => {
  next(createError(404));
});

// Base Route
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/angular-mean-sigo/index.html'));
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

