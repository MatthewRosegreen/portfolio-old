var ProjectModel = function(projs) {
	var self = this;
	self.projectsOnDisplay = ko.observableArray(projs);
};
var projects = ko.observable(ProjectModel());
// var PopulateModel = async function(){
	// d3.dsv(",", "https://matthewrosegreen.github.io/portfolio/projectsdata.csv", function(d){
		// return{
			// name: d.csvName,
			// role: d.csvRole,
			// dateCreated: d.csvDateCreated,
			// createdWith: d.csvCreatedWith,
			// description: d.csvDescription,
			// intent: d.csvIntent,
			// imgBase64: d.csvImgBase64,
			// linkDesc1: d.csvLinkDesc1,
			// linkUrl1: d.csvLinkUrl1,
			// linkDesc2: d.csvLinkDesc2,
			// linkUrl2: d.csvLinkUrl2,
			// linkDesc3: d.csvLinkDesc3,
			// linkUrl3: d.csvLinkUrl3
		// };
	// }).then(function(data) {
		// return new ProjectModel(data);
	// });
// };

var GetCSV = function(){
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

var PopulateModel = async function() {
	let result = await GetCSV();
	projects(new ProjectModel(result));
	master.projectsSection(projects());
	console.log(master.projectsSection().projectsOnDisplay());
};

PopulateModel();