
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes/routes')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.cookieParser('MyCookies'));
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public'),{maxAge:10080000}));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/' , routes.index);
app.get('/register_page' , routes.r_register);
app.get('/pro_list_page/:user_id' , routes.r_pro_list_page); 
app.get('/pro_list_data/:index/:num/:user_id' , routes.r_pro_list_data);
app.get('/create_pro_page/:mail/:name/:user_id' , routes.r_create_pro_page);
app.get('/wish_list_page/:mail/:name/:user_id/:project_id' , routes.r_wish_list_page);
app.get('/wish_list_data/:project_id/:index/:num/:status', routes.r_wish_list_data);
app.get('/init_project/:project_id',routes.r_init_project);
app.get('/add_score/:project_id/:wish_id', routes.r_add_score);
app.get('/comment_list_data/:wish_id/:index/:num',routes.r_comment_list_data);
app.get('/finish_wish_list_page/:project_id',routes,r_finish_wish_list_page);
app.post('/create_comment',routes.r_create_comment);
app.post('/create_wish',routes.r_create_wish);
app.post('/create_pro' , routes.r_create_pro);
app.post('/login_check' , routes.r_login_check);
app.post('/register_addUser' , routes.r_register_addUser);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
