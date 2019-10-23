// -------Set up Express environment ---------//
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 4000;
const routes = require('./routes')

// ------Import Database----//
const db = require('./models');
const ctrl = require('./controllers');


// ----------Set up Middle Ware----------//

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/public`));




// -------ROUTES--------/


app.use('/', routes.views);
app.use('/api/v1', routes.api)

// ---------route to landing page---------//

// --------route to log in page--------//



app.listen(PORT, ()=>{
    console.log(`server started on ${PORT}`)
})