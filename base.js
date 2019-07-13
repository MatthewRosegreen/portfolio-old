var navbar = function(initState)
{
	self = this;
	self.indexId = ko.observable("Home");
	self.aboutId = ko.observable("About");
	self.projectsId = ko.observable("Projects");
	self.githubId = ko.observable("GitHub");
	
	self.state = initState;
	self.title = ko.computed(function(){
		if(self.state == null){
			return "Matthew Rosegreen";
		}
		else{
			return self.state() + " - Matthew Rosegreen";
		}
	});
	
	self.changePage = function(pageId){
		master.pageId(pageId);
		var lowerId = pageId.toLowerCase();
		$('#' + pageId).load('https://matthewrosegreen.github.io/portfolio/' + lowerId + '.html');
		$('#footer').load('https://matthewrosegreen.github.io/portfolio/footer.html');
		master.projectsSection().populateModel();
	};
	
	self.toggleNav = function() {
		var x = document.getElementById("navSmall");
		if (x.className.indexOf("w3-show") == -1) {
			x.className += " w3-show";
		} else { 
			x.className = x.className.replace(" w3-show", "");
		}
	};
	
	self.applyRelevantClass = function(currentStateId, stateId){
		if(currentStateId == stateId){
			return "link-inactive";
		} else{
			return "link-active";
		}
	};
	
	self.applyRelevantHref = function(currentStateId, stateId, url){
		if(currentStateId == stateId){
			return "";
		} else{
			return url;
		}
	};
	
	self.indexLink = ko.computed(function(){
		return self.applyRelevantHref(self.state(), self.indexId(), "home.html");
	});
	self.aboutLink = ko.computed(function(){
		return self.applyRelevantHref(self.state(), self.aboutId(), "about.html");
	});
	self.projectsLink = ko.computed(function(){
		return self.applyRelevantHref(self.state(), self.projectsId(), "projects.html");
	});
	self.githubLink = ko.computed(function(){
		return self.applyRelevantHref(self.state(), self.githubId(), "https://github.com/MatthewRosegreen/portfolio");
	});
	
	self.indexLinkClass = ko.computed(function(){
		return self.applyRelevantClass(self.state(), self.indexId());
	});
	self.aboutLinkClass = ko.computed(function(){
		return self.applyRelevantClass(self.state(), self.aboutId());
	});
	self.projectsLinkClass = ko.computed(function(){
		return self.applyRelevantClass(self.state(), self.projectsId());
	});
	self.githubLinkClass = ko.computed(function(){
		return self.applyRelevantClass(self.state(), self.githubId());
	});
}

var projects = function() {
	var self = this;
	self.projectsOnDisplay = ko.observableArray();
	
	self.getCSV = function(){
		return new Promise(resolve => {
			resolve(
				d3.dsv(",", "https://matthewrosegreen.github.io/portfolio/projectsdata.csv", function(d){
					return{
						name: ko.observable(d.csvName),
						role: ko.observable(d.csvRole),
						dateCreated: ko.observable(d.csvDateCreated),
						createdWith: ko.observable(d.csvCreatedWith),
						descOpener: ko.observable(d.csvOpener),
						description: ko.observable(d.csvDescription),
						intent: ko.observable(d.csvIntent),
						imgType: ko.observable(d.csvImgType),
						imgHref: ko.observable(d.csvImgHref),
						imgBase64: ko.observable(d.csvImgBase64),
						linkDesc1: ko.observable(d.csvLinkDesc1),
						linkUrl1: ko.observable(d.csvLinkUrl1),
						linkDesc2: ko.observable(d.csvLinkDesc2),
						linkUrl2: ko.observable(d.csvLinkUrl2),
						linkDesc3: ko.observable(d.csvLinkDesc3),
						linkUrl3: ko.observable(d.csvLinkUrl3)
					};
				})
			);
		});
	};
	
	self.populateModel = async function() {
		let result = await self.getCSV();
		self.projectsOnDisplay(result);
		//master.projectsSection(projects());
		//console.log(master.projectsSection().projectsOnDisplay());
	};
};

var master = {
    navSection: ko.observable(null),
	projectsSection: ko.observable(null),
	pageId: ko.observable(null)	
};
master.navSection(new navbar(master.pageId));
master.projectsSection(new projects());

$(document).ready(function() {
	ko.applyBindings(master, document.getElementById("htmlApp"));
    master.navSection().changePage(master.navSection().indexId());
});
