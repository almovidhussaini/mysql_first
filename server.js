const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
// const item = require('./models').Item;
// const user = require('./models').User;
const extatable = require('./models').extatable;

const UserRoute = require('./src/routes/UserRoute')
const ItemRoute = require('./src/routes/ItemRoute')
const movieRoute = require('./src/routes/MovieRoute')
const ActorRoute = require('./src/routes/ActorRoute')
const MovieActorRoute = require('./src/routes/MovieActorRoute')
const StudentRoute = require('./src/routes/StudentRoute')
const CityRoute = require('./src/routes/CityRoute')
const UserPermRoute = require('./src/routes/UserPermRoute')
const PictureRoute = require('./src/routes/PictureRoute')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'pictures ' )));


app.use('/pictures', express.static(__dirname + '/pictures'));


app.use('/user',UserRoute)
app.use('/item',ItemRoute)
app.use('/movie',movieRoute)
app.use('/actor',ActorRoute)
app.use('/movieactor',MovieActorRoute)
app.use('/student',StudentRoute)
app.use('/city',CityRoute)
app.use('/userperm',UserPermRoute)
app.use('/picture',PictureRoute)


app.set('view engine', 'handlebars');
app.listen(5000, () => console.log('Listening on port 5000'));