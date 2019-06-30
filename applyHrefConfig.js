var links = [
	{pageTitle: "Home", className: 'index-link', href: 'index.html'},
	{pageTitle: "About", className: 'about-link', href: 'about.html'},
	{pageTitle: "Projects", className: 'projects-link', href: 'projects.html'},
	{pageTitle: "GitHub", className: 'github-link', href: 'https://github.com/MatthewRosegreen/portfolio'}
]

function applyHrefConfig() {
	includeHTML();	
	for(var i = 0; i < links.length; i += 1) {
        if(document.title.startsWith(links[i].pageTitle)) {
            toggleEnablePageLinks(links[i].className, false);
        }
		else{
			applyPageLinks(links[i].href, links[i].className);
			toggleEnablePageLinks(links[i].className, true);
		}
    }
};

function applyPageLinks(link, className){
	forElementsInClass(className, function(element){
		element.href = link;
	});
};

function toggleEnablePageLinks(className, isEnabled){
	forElementsInClass(className, function(element){
		if(isEnabled){
			element.classList.add("link-active");
		}
		else{
			element.classList.add("link-inactive");
		}
	});
};

function forElementsInClass(className, func){
	var index = 0;
	var array = document.getElementsByClassName(className);
	for (i = 0; i < array.length; i++) {
		func(array[i]);
	}
}
//window.onload = applyHrefConfig;