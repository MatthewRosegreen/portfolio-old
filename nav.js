var applyRelevantHref = function(currentStateId, stateId, url){
	if(currentStateId == stateId){
		return "";
	} else{
		return url;
	}
};

var applyRelevantClass = function(currentStateId, stateId){
	if(currentStateId == stateId){
		return "link-inactive";
	} else{
		return "link-active";
	}
};

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
	})
	
	self.indexLink = ko.computed(function(){
		return applyRelevantHref(self.state(), self.indexId(), "home.html");
	});
	self.aboutLink = ko.computed(function(){
		return applyRelevantHref(self.state(), self.aboutId(), "about.html");
	});
	self.projectsLink = ko.computed(function(){
		return applyRelevantHref(self.state(), self.projectsId(), "projects.html");
	});
	self.githubLink = ko.computed(function(){
		return applyRelevantHref(self.state(), self.githubId(), "https://github.com/MatthewRosegreen/portfolio");
	});
	
	self.indexLinkClass = ko.computed(function(){
		return applyRelevantClass(self.state(), self.indexId());
	});
	self.aboutLinkClass = ko.computed(function(){
		return applyRelevantClass(self.state(), self.aboutId());
	});
	self.projectsLinkClass = ko.computed(function(){
		return applyRelevantClass(self.state(), self.projectsId());
	});
	self.githubLinkClass = ko.computed(function(){
		return applyRelevantClass(self.state(), self.githubId());
	});
	
	// self.includeHtml = function() {
		// var z, i, elmnt, file, xhttp;
		// /* Loop through a collection of all HTML elements: */
		// z = document.getElementsByTagName("*");
		// for (i = 0; i < z.length; i++) {
			// elmnt = z[i];
			// /*search for elements with a certain atrribute:*/
			// file = elmnt.getAttribute("w3-include-html");
			// if (file) {
				// /* Make an HTTP request using the attribute value as the file name: */
				// xhttp = new XMLHttpRequest();
				// xhttp.onreadystatechange = function() {
					// if (this.readyState == 4) {
					  // if (this.status == 200) {elmnt.innerHTML = this.responseText;}
					  // if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
					  // /* Remove the attribute, and call this function once more: */
					  // elmnt.removeAttribute("w3-include-html");
					  // self.includeHtml();
					// }
				// } 
				// xhttp.open("GET", "https://matthewrosegreen.github.io/portfolio/" + file, true);
				// xhttp.send();
				// /* Exit the function: */
				// return;
			// }
		// }
	// };
}