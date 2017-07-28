$(document).ready(function(){

	$("#submitBtn").on("click", function(event){
		console.log("clicked!");
		var searchTerm = $("#searchParamater").val().trim();
		var recordsNum = $("#numRecords").val().trim();
		var yrStart = $("#startYear").val().trim();
		var yrEnd = $("#endYear").val().trim();

	 console.log(searchTerm+", "+recordsNum+", "+yrStart+", "+yrEnd);
	});

	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	url += '?' + $.param({
	 'api-key': "c4c53fe284df4db9993a75a5e5f03b9e"
	});
	$.ajax({
	 url: url,
	 method: 'GET',
	}).done(function(result) {
	}).fail(function(err) {
	 throw err;
	});



});