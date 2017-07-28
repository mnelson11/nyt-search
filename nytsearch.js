$(document).ready(function(){

	$("#submitBtn").on("click", function(event){
		var searchTerm = $("#searchParameter").val().trim();
		var recordsNum = $("#numRecords").val().trim();
		var yrStart = $("#startYear").val().trim();
		var yrEnd = $("#endYear").val().trim();

	 //console.log(searchTerm+", "+recordsNum+", "+yrStart+", "+yrEnd);
	




		var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
		url += '?' + $.param({
		 'api-key': "c4c53fe284df4db9993a75a5e5f03b9e", 
		 "fq":searchTerm
		});
		$.ajax({
		 url: url,
		 method: 'GET',
		}).done(function(result) {
			var finR= result.response;
			// console.log(result);
			//console.log(finR);
			// var headline = finR.docs.headline

			for(var i=0;i<finR.docs.length;i++){
				console.log(finR.docs[i].headline);
				$("#results").append(finR.docs[i].headline.main);
			}
			// finR.forEach(function(docs){
			// 	$("#results").append(docs.headline);
			// });
			
		}).fail(function(err) {
		 throw err;
		});
	});


});