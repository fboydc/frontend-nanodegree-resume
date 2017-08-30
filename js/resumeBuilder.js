var work = {
	"jobs" : [
		{
			"employer" : "Delta Analytics",
			"title" : "Full Stack Developer",
			"location" : "Panama City",
			"dates" : "January, 2013 - March, 2015",
			"description" : "Our team was in charge of implementing the OpenBravo ERP software, which required development of customized modules such as printing, data import, and Jasper Reports. The software offered many convenient tools for management such as shipment and order tracking, multi-warehousing, and robust structured data."
		},
		{
			"employer" : "Banco Delta",
			"title" : "intern",
			"location" : "Panama City",
			"dates" : "May, 2011 - Aug, 2011",
			"description" : "As an intern in one of the fastest growing financial entities in Panama, our project consisted of implementing the Scrum SDLC methodology. Management immediately saw the results as an effect of the increased transparency, and internal users were able to get customized features faster."
		}

	]
}


var projects = {
	"projects" : [
		{
			"title" : "Studio Based Learning System",
			"dates" : "2012",
			"description" : "SBLS is a school web platform that allows professors to manage student grades, class rosters, and assignments. Students can also use this platform, to check their grades, enroll in classes and review assignments. This project was part of a group project for the Internet Application Development class during the spring semester of 2012, and was created in collaboration with my coworkers: Jing Zhou and Guojun Zhang.",
			"images" : ["http://via.placeholder.com/300x200"]
		},
		{
			"title" : "AutoBook",
			"dates" : "2016",
			"description" : "Whether you are repair shop owner, or your car needs to be fixed, AutoBook brings business and and car owners tools to track and measure car repairs. How many times have you been waiting for job and cost estimates? How much time and money would you save if you could visualize data about your shop and make decisions in minutes? This is what autobook is all about.",
			"images" : ["http://via.placeholder.com/300x200"]
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
		"location": "Miami, FL"
	},
	"skills": [
		"Front End Development", "Server Side Technologies", "Responsive Websites", "Web/Graphic Design Rookie", "Aspiring 3D Modeler"
	],
	"biopic": "http://placekitten.com/g/400/400"
}




var education = {
	"schools": [
		{
			"name": "Saint Joseph's University",
			"location": "Philadelphia",
			"degree": "Masters",
			"majors" : ["Computer Science"],
			"dates": "2010-2012",
			"url": "http://www.sju.edu"
		},
		{
			"name": "Saint Joseph's University",
			"location" : "Philadelphia",
			"degree" : "Bachelors",
			"majors" : ["international business"],
			"dates" : "2007-2010",
			"url" : "http://www.sju.edu"
		}

	],

	"onlineCourses" : [
		{
			"title":"Front-end Developer Nanodegree",
			"school" : "Udacity",
			"dates" : "2016",
			"url" : "http://www.udacity.com/course/"
		}
	]
}

/***********   DISPLAY FUNCTION    ************/







work.display = function(){
	work.jobs.forEach(function(value, index, array){
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[index].title);
			var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[index].dates);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[index].location);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[index].description);
			$(".work-entry:last").append(formattedEmployer + formattedTitle);
			$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkDescription);
		});

}

projects.display = function(){
	projects.projects.forEach(function(value, index, array){
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[index].title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[index].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[index].description);

		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedProjectDescription);

		if(projects.projects[index].images.length > 0){
			projects.projects[index].images.forEach(function(value){
				var formattedProjectImage = HTMLprojectImage.replace("%data%", value);
					$(".project-entry:last").append(formattedProjectImage);
			});
		}
		if(index < array.length-1){
			$(".project-entry:last").append("<hr class='main-division'>");
		}


	});
}


bio.display = function(){


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


	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedLocation);


	/********** SKILLS **********************/
	if(bio.skills.length > 0){
		$("#header").append(HTMLskillsStart);
		bio.skills.forEach(function(item){
			$("#skills").append(HTMLskills.replace("%data%", item));
		});

	}

	$("#mapDiv").append(googleMap)
}

education.display = function() {
	education.schools.forEach(function(value, index, array){
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[index].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[index].degree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[index].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[index].location);

		$(".education-entry:last").append(formattedName + formattedDegree);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedLocation);

		education.schools[index].majors.forEach(function(value){
			var formattedMajor = HTMLschoolMajor.replace("%data%", value);
			$(".education-entry:last").append(formattedMajor);
		})

	});

	$(".education-entry:last").append("<hr class='main-division'>");

	$("#education").append(HTMLonlineClasses);
	education.onlineCourses.forEach(function(value, index, array){
		$("#education").append(HTMLschoolStart);
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[index].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[index].school);
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[index].dates);
		var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[index].url);

		$(".education-entry:last").append(formattedTitle + formattedSchool);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedUrl);
	});
}





bio.display();
work.display();
projects.display();
education.display();
