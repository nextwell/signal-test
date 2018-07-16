//----------------------------------------------------------------------------------------
// API

module.exports = (app, arr) => {
	app.get('/api/post/:value', (req, res) => {
		
		let value = parseInt(req.params.value);		// принимаем значение

		arr.push(value);	// добавляет в массив последний сигнал

		let newarr = arr.slice(Math.max(arr.length - 3, 0));	// последние 3 элемента массива

		if ( newarr[0] == 1 && newarr[1] == 2 & newarr[2] == 3){
			console.log(true);
			req.app.io.emit('event', {action: true});
		}
		else if ( newarr[0] == 3 && newarr[1] == 2 & newarr[2] == 1 ){
			console.log(false);
			req.app.io.emit('event', {action: false});
		}


		if ( arr.length > 10 ){
			arr = arr.slice(Math.max(arr.length - 5, 1));	// чистим массив
		}
		res.json({postback: true});
	})
}