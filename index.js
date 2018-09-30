
 const express 	 	= require('express');
 const hbs 			= require('hbs');
 const port 		= process.env.PORT || 3000;

 var app 	= express();

 hbs.registerPartials(__dirname + '/views/partials');

 hbs.registerHelper('tahun', () => {
 	return new Date().getFullYear();
 })

 hbs.registerHelper('upperCase', (text) => {
 	return text.toUpperCase();
 })

 app.set('view engine', 'hbs');

 app.use(express.static(__dirname + '/public'));

 app.use((req,res,next) => {

 	//res.render('maintenance.hbs');
 	next();
 	
 })


 app.get('/', (req, res) => {
 	res.render('home.hbs',{
 		pageTitle: 'Homeeee'
 	})
 })

 app.get('/about', (req, res) => {
 	res.render('about.hbs', {
 		pageTitle: 'Tentang Saya',
 		reqObj: req
 	});   
 })



 app.listen(port, () => {
 	console.log("Running on port ${port}");
 });
