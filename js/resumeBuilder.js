/**********************************************************
AUTHOR: Felipe Boyd
DESCRIPTION:  This file contains raw data, used to populate
              index.html.
OTHER FILES:  Helper.js, used as a reference library to add html tags
              along with raw data into index.html.
**********************************************************/

/**************************************************************
THIS SECTION CONTAINS THE FOUR OBJECTS AS PER REQUESTED BY THE
PROJECT RUBRIC. (MINIMUM SCHEMA REQUIREMENT)
**************************************************************/
var work = {
	"jobs" : [
		{
			"employer" : "Delta Analytics",
			"title" : "Full Stack Developer",
			"location" : "Panama City, Panama",
			"dates" : "January, 2013 - March, 2015",
			"description" : "Our team was in charge of implementing the OpenBravo ERP software, which required development of customized modules such as printing, data import, and Jasper Reports. The software offered many convenient tools for management such as shipment and order tracking, multi-warehousing, and robust structured data."
		},
		{
			"employer" : "Banco Delta",
			"title" : "intern",
			"location" : "Panama City, Panama",
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
	"contacts" : {
		"mobile": "+507 6267-1469",
		"email": "fboydc@gmail.com",
		"github": "fboydc",
		"twitter": "felipe.boyd",
		"location": "Miami, FL"
	},
	"welcomeMessage" : "Welcome to my website",
	"skills": [
		"Front End Development", "Server Side Technologies", "Responsive Websites", "Web/Graphic Design Rookie", "Aspiring 3D Modeler"
	],
	"biopic": "./images/dog.jpg"
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
/*********************** END OF REQUIRED OBJECTS *************************/



/******************************** EXTRA *******************************
 THIS EXTRA OBJECT WILL CONTAIN THE CODING SKILLS/PROGRAMMING LANGUAGES
 WITH THEIR RESPECTIVE VALUE (IN PERCENTAGE: 0-100)
***********************************************************************/

var codingSkills = {
	"skills": [{
		"skill" : {
			"caption" : "Server Side Technologies/Programming Languages",
			"languages" : [{
				"name" : "Java",
				"percentage" : "80"
			}, {
				"name" : "PHP",
				"percentage" : "65"
			}, {
				"name" : "mySQL",
				"percentage" : "70"
			}]
		}
	 },{
	 	"skill" : {
			"caption" : "Client and Web Technologies",
			"languages" : [{
				"name" : "HTML, CSS, and Responsive Websites",
				"percentage" : "80"
			}, {
				"name" : "Javascript and jQuery",
				"percentage" : "75"
			}, {
				"name" : "React",
				"percentage" : "10"
			}]
		}
	 }, {
	 	"skill" : {
			"caption" : "MVC Frameworks",
			"languages" : [{
				"name" : "Phalcon",
				"percentage" : "75"
			}, {
				"name" : "JSF",
				"percentage" : "70"
			}]
		}
	 }]

}

var rssFeed = {
	"content" : {
		"title" : "Communications of the ACM",
		"rssimage" : "images/acm-logo.jpg",		
		"url" : "http://www.felipeboyd.com/webservices/index.php"
		}
}




/************************************************************
  FUNCTION DEFINITIONS
*********************************************************/


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

};



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
};



bio.display = function(){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	$("#header").append(formattedWelcomeMsg);
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

	$("#mapDiv").append(googleMap);
};




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
		});

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
};



codingSkills.display = function(){
	$("#codingSkills").append(HTMLskillsContainer);
	codingSkills.skills.forEach(function(v_1, i_1, a_1){
		$("#skills-container").append(HTMLskillsEntry);
		var formattedSkillSubtitle = HTMLskillsSubtitle.replace("%data%", codingSkills.skills[i_1].skill.caption);
		$(".skills-entry:last").append(formattedSkillSubtitle);
		$(".skills-entry:last").append(HTMLskillsContent);

		/*************** THIS WILL ITREATE THROUGH ALL THE LANGUAGES IN THE CURRENT CODING SKILL ************************/
		codingSkills.skills[i_1].skill.languages.forEach(function(v_2, i_2, a_2){
			$(".skills-content:last").append(HTMLskill);
			var formattedSkillLabel = HTMLskillLabel.replace("%data%", codingSkills.skills[i_1].skill.languages[i_2].name);
			$(".skill:last").append(formattedSkillLabel);
			$(".skill:last").append(HTMLskillsProgressBar);
			$(".progress-bar:last").append(HTMLprogress);
			$(".progress:last").width(codingSkills.skills[i_1].skill.languages[i_2].percentage+"%");
		});
	});
};


rssFeed.display = function(){

	var formattedRssTitle = HTMLrssTitle.replace("%data%", rssFeed.content.title);
	var formattedRssArticle = HTMLrssArticle.replace("%data%", rssFeed.content.rssimage); 
	$.ajax(rssFeed.content.url, {
        accepts:{
            xml:"text/xml"
        },
        dataType:"xml",
        success:function(data) {
        	$("#feeds").append(formattedRssTitle);
        	var numberOfFeed = 5;
        	$(data).find("item").each(function(){
        		var el = $(this);
        		var formattedItemTitle = HTMLrssItemTitle.replace("%data%", el.find("link").text());
        		var formattedItemText = HTMLrssText.replace("%data%", el.find("description").text());
        		$("#feeds").append(formattedRssArticle);
        		$(".rss-article:last").append(HTMLrssTextContainer);
        		$(".rssContainer:last").append(formattedItemTitle);
        		$(".rssLink:last").append(el.find("title").text());
        		$(".rssContainer:last").append(formattedItemText);
        		$("#feeds").append("<hr>");

        	});
            

    	
        }   
    });
}




bio.display();
work.display();
projects.display();
education.display();
codingSkills.display();
rssFeed.display();
