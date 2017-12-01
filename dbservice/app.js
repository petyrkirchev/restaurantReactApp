var koa = require('koa');
// Create sample app
var app = new koa();

var mysql = require('koa-mysql');

var db = mysql.createPool({host: 'localhost', user: 'root', password: '', database: 'restaurant'})

app.use( function *() {
    try {
        // Execute a sample query (with params)
        var rows = yield db.query("select * from users");
        this.body = rows;
    } catch (err) { 
        // 500 Internal Server Error
        this.status = 500;
        this.body = {
            error: err
        };
    }
})



var port = process.env.PORT || 3002;

// Listen for connections
app.listen(3002);

// Log port
console.log('Server listening on port ' + port);