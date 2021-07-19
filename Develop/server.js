const express = require ('express');
const app = express();

const PORT = process.env.PORT || 8080;

//Makes app familiar with json parsing for gets, puts, etc
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//lets express know where html files are ... good habit.
app.use(express.static('public'));

//require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// Starts our server
app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});