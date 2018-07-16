//----------------------------------------------------------------------------------------
// Index Page

module.exports = (app, arr) => {
	app.get('/', (req, res) => {
		res.render('index');
	})
}