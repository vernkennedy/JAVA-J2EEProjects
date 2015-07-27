var PHPProjectSPortfolio = 
//------------------------------------------insert/paste json data below
{ 
  "PHPProjects": [
    {  
	  "id":1,
      "project_name": "Facilities Maintenance Portal",
      "owner": {       
        "avatar_url": "https://vzidana.files.wordpress.com/2014/12/378863_10150412548993267_1726019535_n-copy.jpg", 
      },           
      "description": "https://github.com/vernkennedy/Facilities-Maintainance-Portal/blob/master/description.txt", 
	  "summary": "A Rule Based Expert System / web portal for academic planning and exploration of student opportunities at The College of Wooster",
      "code_url": "https://github.com/vernkennedy/Facilities-Maintainance-Portal",
	 "demo_url": "https://www.youtube.com/watch?v=lJM2oFMoDkM",
      "frontend_infor": "Html5,Html5 Drag and Drop API,CSS3,JavaScript,jQuery",      
      "backend_infor": "Php5,MySQL,MS Excel",
	  "demotype":"Video Demo"
    },
   
    {
		"id":3,
       "project_name": "Client Infor System",
      "owner": {       
        "avatar_url": "https://vzidana.files.wordpress.com/2014/12/4.jpg", 
      },           
      "description": "https://github.com/vernkennedy/Client-Infor-System/blob/master/description.txt", 
	  "summary": "A Rule Based Expert System / web portal for academic planning and exploration of student opportunities at The College of Wooster",	  
      "code_url": "https://github.com/vernkennedy/Client-Infor-System", 
	  "demo_url": "https://www.youtube.com/watch?v=lJM2oFMoDkM",
      "frontend_infor": "Html5,Html5 Drag and Drop API,CSS3,JavaScript,jQuery",      
      "backend_infor": "mysql",
	  "demotype":"Video Demo"
    },
	
	 {
		"id":4,
       "project_name": "Spring, Struts, Hibernate Calculator",
      "owner": {       
        "avatar_url": "https://vzidana.files.wordpress.com/2014/12/starbacks-copy.jpg", 
      },           
      "description": "https://github.com/vernkennedy/Spring-Hibernate-Calculator/blob/master/description.txt",     
	  "summary": "A Rule Based Expert System / web portal for academic planning and exploration of student opportunities at The College of Wooster",
      "code_url": "https://github.com/vernkennedy/Spring-Hibernate-Calculator", 
	  "demo_url": "https://www.youtube.com/watch?v=lJM2oFMoDkM",
      "frontend_infor": "Html5,Html5 Drag and Drop API,CSS3,JavaScript,jQuery",      
      "backend_infor": "mysql",
	  "demotype":"Video Demo"
    }
  ]
}

//-----------------------------------------------------------------------insert data above

content = "";
var i;
for (i = 0; i < PHPProjectSPortfolio.PHPProjects.length; i++) {
    content +="<li>"
				+"<img src="+PHPProjectSPortfolio.PHPProjects[i].owner.avatar_url+">"
				+"<h3 align=center>"+ PHPProjectSPortfolio.PHPProjects[i].project_name +"</h3>"
				+"<a href="+PHPProjectSPortfolio.PHPProjects[i].description+">Full Description</a>"
				+" <a href="+PHPProjectSPortfolio.PHPProjects[i].demo_url+">"+PHPProjectSPortfolio.PHPProjects[i].demotype+"</a>"
				+" <a href="+PHPProjectSPortfolio.PHPProjects[i].code_url + ">Code</a><br><br>"
				+"<b>Summary</b><br>"+PHPProjectSPortfolio.PHPProjects[i].summary + "<br><br>"
				+"<b>Front-end Technologies used:</b><br>"+PHPProjectSPortfolio.PHPProjects[i].frontend_infor +"<br><br>"
				+"<b>Middle Tier and Backend Technologies used:</b><br>"+ PHPProjectSPortfolio.PHPProjects[i].backend_infor 
			+"</li>";
}


document.getElementById("demo").innerHTML = "<ol>"+content+"</ol>";
