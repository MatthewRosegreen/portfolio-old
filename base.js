var master = {
    navSection: ko.observable(null),
	mainSection: ko.observable(null),
	projectsSection: ko.observable(null),
	pageId: ko.observable(null)	
}
master.pageId('Home');
master.navSection(new navbar(master.pageId));

//master.navSection().includeHtml();
ko.applyBindings(master, document.getElementById("htmlApp"));

//function(data, event) {$root.navSection(new navbar('about'));}