let
    os          = require('os')
    , express   = require('express')
    , subdomain = require('express-subdomain-handler')
    , consign   = require('consign-ignore')
    , app       = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(
    subdomain({
        baseUrl: process.env.NODE_ENV === 'production' ?
                'example.com' : 'localhost',
        prefix: 'sub',
        logger: true
    })
);

consign()
    .include('rotas')
    .into(app);

module.exports = app;