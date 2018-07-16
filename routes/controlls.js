//----------------------------------------------------------------------------------------
// Controlls page

module.exports = (app, arr) => {
	app.get('/controlls', (req, res) => {
		res.render('controlls');
	})
}