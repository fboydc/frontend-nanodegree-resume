var work = {
	"jobs" : [
		{
			"employer" : "Delta Analytics",
			"title" : "Full Stack Developer",
			"location" : "Panama City",
			"dates" : "January, 2013 - March, 2015",
			"description" : "Open Bravo ERP Implementation"
		},
		{
			"employer" : "Banco Delta",
			"title" : "intern",
			"location" : "Panama City",
			"dates" : "May, 2011 - Aug, 2011",
			"description" : "Implementation of Agile SD methodologies"
		}

	]
}


var projects = {
	"projects" : [
		{
			"title" : "Studio Base Learning System",
			"dates" : "2012",
			"description" : "This project was a final project for our internet application development class",
			"images" : "images/sbls.jpg"
		},
		{
			"title" : "AutoBook",
			"dates" : "2016",
			"description" : "AutoBook provides car workshops a way of keeping track of car jobs, job statues, and efficient metrics for measuring workshop overall performance.",
			"images" : "images/autobook.jpg"
		}
	]
}

var bio = {
	"name" : "Felipe Boyd",
	"role" : "Web Developer",
	"welcomeMessage" : "Welcome to my website",
	"contacts" : {
		"mobile": "+507 6267-1469",
		"email": "fboydc@gmail.com",
		"github": "fboydc",
		"twitter": "felipe.boyd",
		"location": "Miami"
	},
	"skills": [
		"Front End Development", "Server Side Technologies", "Responsive Websites", "Web Design Rookie", "3D Modeling", "Crossfit Enthusiast"
	],
	"biopic": "images/me.jpg"
}




var education = {
	"schools": [
		{
			"name": "Saint Joseph's University",
			"location": "Philadelphia",
			"degree": "Masters",
			"majors" : ["CS"],
			"dates": "2012",
			"url": "http://www.sju.edu"
		},
		{
			"name": "Saint Joseph's University",
			"location" : "Philadelphia",
			"degree" : "Bachelors",
			"majors" : ["international business"],
			"dates" : "2010",
			"url" : "http://www.sju.edu"
		},

	],

	"onlineCourses" : [
		{
			"title":"front-end developer nanodegree",
			"school" : "udacity",
			"dates" : "2016",
			"url" : "http://www.udacity.com/course/"
		}
	]
}

/************ SKILLS ***************/




/***********   BIO SECTION    ************/
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);

/********** SKILLS **********************/
if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);

	bio.skills.forEach(function(item){
		$("#skills").append(HTMLskills.replace("%data%", item));
	});

}
/************   WORK SECTION ************/


//if(work.jobs.length > 0 ){
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

		$(".work-entry:last").append(formattedEmployer + formattedTitle);
	}

//}
