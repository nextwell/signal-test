let express    = require('express'),
    requireFu  = require('require-fu'),
    bodyParser = require('body-parser'),
    pug 	   = require('pug');


let cfg = require('./config.js');

let arr = [];

let app = express();


//----------------------------------------------------------------------------------------
// Настройки Express

app.set('view engine', 'pug');

app.use( bodyParser.json() );      
app.use(bodyParser.urlencoded({     
  extended: true
})); 


app.use(express.static('public_files'));	// Публичный доступ к папке

requireFu(__dirname + '/routes')(app, arr);		// Модульное подключение роутинга

app.listen(cfg['PORT'], () => {
    console.log(`Express server running on port ${cfg['PORT']}!`);
});

//----------------------------------------------------------------------------------------
// Socket.io Settings

let server = require('http').Server(app);
let io = require("socket.io")(server);

server.listen(cfg['IO_PORT']);

io.on('connection', (socket) => {
	console.log(`User connected`);

	// Проверяем при коннекте, возможно массив сигналов уже не пустой
	
	let newarr = arr.slice(Math.max(arr.length - 3, 0));

	if ( newarr[0] == 1 && newarr[1] == 2 & newarr[2] == 3){
			console.log(true);
			io.emit('event', {action: true});	// Сигналы 1 2 3
		}
		else if ( newarr[0] == 3 && newarr[1] == 2 & newarr[2] == 1 ){
			console.log(false);
			io.emit('event', {action: false});	// Сигналы 3 2 1
		}

	socket.on('disconnect', () => {
    	console.log(`User disconnected`);
    });
   
});


app.io = io;	// Отправляем сообщения из роутера