const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

require('./server/config/mongoose.config.js');

app.use(cors());
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const allMyIdeasRoutes = require('./server/routes/ideas.routes');
const userRoutes = require('./server/routes/user.routes');
userRoutes(app);
allMyIdeasRoutes(app);

// require('./server/routes/ideas.routes')(app);
// app.use('/api/user', require('./server/routes/user.routes'));

app.listen(8000, () => {
    console.log("Listening at Port 8000")
});