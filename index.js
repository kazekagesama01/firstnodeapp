
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

 app.use('/about',(req,res,next) => {

 	console.log('first middleware');
 	next();
 	
 })

 app.use((req,res,next) => {

 	console.log('second middleware');
 	next();

 })


 app.get('/', (req, res) => {
 	res.render('home.hbs',{
 		pageTitle: 'Homeeee'
 	})
 })

 app.get('/about', (req, res) => {
 	res.render('about.hbs', {
 		pageTitle: 'Tentang Saya'
 	});   
 })

app.get('/projects', (req, res) => {
	res.render('projects.hbs', {
		pageTitle: 'Project Page'
	})
})


 app.listen(port, () => {
 	console.log("Running on port ${port}");
 });
