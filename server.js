var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var articles = {

	'article-one': {
		title: 'Article-one | Mohit Soni',
		heading: 'Article-one',
		date: 'August 19, 2017',
		content: `
			<p>
				Hi! My name is Mohit Soni and I am a web developer. I am learning how to develop Modern Applications development.
				This is the first html page that I have made.
			</p>
			<p>
				I am learning web development from nptel mooc courses. This course is desgined and taught by IIT Madras and Hasura.
				Instructors for this course are Prof. Gaurav Raina and Mr. Tanmai Gopal.
			</p>`

	},

	'article-two': {
		title: 'Article-two | About me',
		heading: 'Article-two',
		date: 'August 20, 2017',
		content: `
			<p>
				Hi! My name is Mohit Soni, I belong to a very peaceful city Bikaner in Rajasthan.
				I have done Bachelors in Electronics and Communication and now I am working as a software engineer in Jaipur.
				I work for Ranosys Technologies Pvt. Ltd. I am new to Programming but I feel it is quite interesting and I enjoy learning.
				I am acquainted with Python and currently enrolled to this course for better understanding of web applications development.
			</p>`

	},

	'article-three': {
		title: 'Article-three | about IMAD',
		heading: 'Article-three',
		date: 'August 21, 2017',
		content: `
			<p>
				As per my experience till now this course is very interactive and interesting. It has been fun to learn new things here.
				The way Tanmai explains the practical modules is quite cool. All the concepts explained by Dr. Gaurav Raina are really concise yet complete and very easy to understand.
				The learning curve set by the course designers and instructors is very comfortable. I am sure at the end of this course I will have better understanding of not only web applications but also many concepts of computer science.
			</p>`		
	}
};


function createTemplate(data){
	var title = data.title;
	var heading = data.heading;
	var date = data.date;
	var content = data.content;

	var htmlTemplate = `
	<!DOCTYPE html>
	<html>
	<head>
		<title>
			${title}
		</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" type="text/css" href="ui/style.css">
	</head>
	<body>
		<div class="container">
			<div>
				<a href="/">Home</a>
			</div>
			<hr/>
			<h3>
				${heading}
			</h3>
			<div>
				${date}
			</div>
			<div>
				${content}
			</div>
		</div>
	</body>
	</html>
`;

return htmlTemplate;

}


app.get('/:articleName', function(req, res){
	var articleName = req.params.articleName;
	res.send(createTemplate(articles[articleName]));
});

app.get('/article-two', function(req, res){
	res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function(req, res){
	res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
