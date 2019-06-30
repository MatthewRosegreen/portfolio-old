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
	
	self.includeHtml = function() {
		var z, i, elmnt, file, xhttp;
		/* Loop through a collection of all HTML elements: */
		z = document.getElementsByTagName("*");
		for (i = 0; i < z.length; i++) {
			elmnt = z[i];
			/*search for elements with a certain atrribute:*/
			file = elmnt.getAttribute("w3-include-html");
			if (file) {
				/* Make an HTTP request using the attribute value as the file name: */
				xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function() {
					if (this.readyState == 4) {
					  if (this.status == 200) {elmnt.innerHTML = this.responseText;}
					  if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
					  /* Remove the attribute, and call this function once more: */
					  elmnt.removeAttribute("w3-include-html");
					  self.includeHtml();
					}
				} 
				xhttp.open("GET", "https://matthewrosegreen.github.io/portfolio/" + file, true);
				xhttp.send();
				/* Exit the function: */
				return;
			}
		}
	};
}

var master = {
    navSection: ko.observable(null),
	mainSection: ko.observable(null),
	pageId: ko.observable(null)
}
master.pageId('index');
master.navSection(new navbar(master.pageId));
master.navSection().includeHtml();
ko.applyBindings(master);

//function(data, event) {$root.navSection(new navbar('about'));}