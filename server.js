const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

require('./server/config/mongoose.config.js');
require('dotenv').config()
process.env

//app.use(cors());
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

const allMyIdeasRoutes = require('./server/routes/ideas.routes');
const userRoutes = require('./server/routes/user.routes');
userRoutes(app);
allMyIdeasRoutes(app);

// require('./server/routes/ideas.routes')(app);
// app.use('/api/user', require('./server/routes/user.routes'));

app.listen(8000, () => {
    console.log("Listening at Port 8000")
});