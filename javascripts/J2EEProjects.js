var PHPProjectSPortfolio = 
//------------------------------------------insert/paste json data below
{ 
  "PHPProjects": [
    {  
	  "id":1,
      "project_name": "Facilities Maintainance Portal",
      "owner": {       
        "avatar_url": "https://vzidana.files.wordpress.com/2014/12/378863_10150412548993267_1726019535_n-copy.jpg", 
      },           
      "description": "https://github.com/vernkennedy/Facilities-Maintainance-Portal/blob/master/description.txt",      
      "code_url": "https://github.com/vernkennedy/Facilities-Maintainance-Portal",
	 "demo_url": "https://www.youtube.com/watch?v=lJM2oFMoDkM",
      "frontend_infor": "Html5,Html5 Drag and Drop API,CSS3,JavaScript,jQuery",      
      "backend_infor": "Php5,MySQL,MS Excel"    
    },
   
    {
		"id":3,
       "project_name": "Client Infor System",
      "owner": {       
        "avatar_url": "https://vzidana.files.wordpress.com/2014/12/4.jpg", 
      },           
      "description": "https://github.com/vernkennedy/Client-Infor-System/blob/master/description.txt",      
      "code_url": "https://github.com/vernkennedy/Client-Infor-System", 
	  "demo_url": "https://www.youtube.com/watch?v=lJM2oFMoDkM",
      "frontend_infor": "html",      
      "backend_infor": "mysql"  
    },
	
	 {
		"id":4,
       "project_name": "Spring Hibernate Calculator",
      "owner": {       
        "avatar_url": "https://vzidana.files.wordpress.com/2014/12/starbacks-copy.jpg", 
      },           
      "description": "https://github.com/vernkennedy/Spring-Hibernate-Calculator/blob/master/description.txt",      
      "code_url": "https://github.com/vernkennedy/Spring-Hibernate-Calculator", 
	  "demo_url": "https://www.youtube.com/watch?v=lJM2oFMoDkM",
      "frontend_infor": "html",      
      "backend_infor": "mysql"  
    },
  
    {
		"id":5,
      "project_name": "Struts Calculator",
      "owner": {       
        "avatar_url": "https://vzidana.files.wordpress.com/2014/12/1.jpg", 
      },           
      "description": "https://github.com/vernkennedy/StrutsCalculator/blob/master/description.txt",      
      "code_url": "https://github.com/vernkennedy/StrutsCalculator",  
	   "demo_url": "https://www.youtube.com/watch?v=lJM2oFMoDkM",
      "frontend_infor": "html",      
      "backend_infor": "mysql"  
    }
  ]
}

//-----------------------------------------------------------------------insert data above

text = "";
var i;
for (i = 0; i < PHPProjectSPortfolio.PHPProjects.length; i++) {
    text +="<li><img src="+PHPProjectSPortfolio.PHPProjects[i].owner.avatar_url+"><br><br><h3 align=center>"+ PHPProjectSPortfolio.PHPProjects[i].project_name + "</h3><a href="+PHPProjectSPortfolio.PHPProjects[i].description+ ">Description</a> <a href="+PHPProjectSPortfolio.PHPProjects[i].demo_url+ ">Demo</a> <a href="+PHPProjectSPortfolio.PHPProjects[i].code_url + ">Code</a><br><br><br><br><br></li>";
}


document.getElementById("demo").innerHTML = "<ol>"+text+"</ol>";
