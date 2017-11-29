var koa = require('koa');
var mysql = require('koa-mysql');
 
// Create a MySQL connection pool (do this once) 
var db = mysql.createPool({ host: 'localhost' ,user: 'root', password: '1234', database: "restaurant", });
 
// Create sample app 
var app = new koa()
app.use(async ctx => {
    console.log(db);
});
// Run sample app 
app.use(function* () {
    try {
      console.log('try');
        // Execute a sample query (with params) 
        var rows = db.query("SELECT * FROM users;");
        console.log(rows)
        // Output test result (3) 
        this.body = { restaurant: rows.restaurant };
    }
    catch (err) {
        // 500 Internal Server Error 
        this.status = 500;
        this.body = { error: err};
    }
});
 
// HTTP port 
var port = process.env.PORT || 3002;
 
// Listen for connections 
app.listen(port);
 
// Log port 
console.log('Server listening on port ' + port);