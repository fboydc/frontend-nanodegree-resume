/*var name = "Felipe Boyd";
var role = "Web Developer"
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var skills = ["awesomeness", "programming", "teaching", "js"];
*/
//$("#main").append(skills.length);

var bio = {
	"name" : "Felipe Boyd",
	"role" : "Web Developer",
	"contacts" : {
		"mobile": "+507 6267-1469",
		"email": "fboydc@gmail.com",
		"github": "fboydc",
		"twitter": "felipe.boyd",
		"location": "Miami"
	},
	"welcomeMessage" : "Welcome to my website",
	"skills": [
		"Javascript", "HTML", "CSS", "Java", "PHP"
	],
	"bioPic": "images/me.jpg"
};



/*U

var work = {};

work.jobPosition = "Full Stack Developer";
work.employer = "Delta Analytics";
work.years = "2";
work.city = "Panama City";

var education = {};

education["name"] = "Saint Joseph's University";
education["years"] = "2010-2012";
education["city"] = "Philadephia, PA";




$("#main").append(education["name"]);

*/



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
		}
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


var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#header").append(formattedBioPic);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);