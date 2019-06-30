var applyRelevantHref = function(currentStateId, stateId, url){
	if(currentStateId == stateId){
		return "";
	} else{
		return url;
	}
};

var navbar = function(initState)
{
	self = this;
	self.state = initState;
	
	self.indexLink = ko.computed(function(){
		return applyRelevantHref(self.state(), "index", "index.html");
	});
	self.aboutLink = ko.computed(function(){
		return applyRelevantHref(self.state(), "about", "about.html");
	});
	self.projectsLink = ko.computed(function(){
		return applyRelevantHref(self.state(), "projects", "projects.html");
	});
	self.githubLink = ko.computed(function(){
		return applyRelevantHref(self.state(), "github", "https://github.com/MatthewRosegreen/portfolio");
	});
}