const request = require("request");
const $ = require('cheerio');
const Sequelize = require('sequelize');

const lookupMasterModel = require('../model/LookupMasterModel');

function fetchAndSaveAnnualResults(){

	request.get(bseUrl,(error, response, body) => {
	    if(error) {
	        return console.dir(error);
	    }
	    var table=$(body).find("#leftcontainer").find('table')[0];

	    for(var i=0;i<2;i++){
		    var parentTrs=$(table).find('tbody').find('tr').find('td')[i];
		    var childTable=$(parentTrs).find('table').find('tbody').find('tr');
			    childTable.each(function(index,tr){
				    var jsonObj=companyModel.build();
				    	$(tr).find('td').each(function(ind,td){
				    		if(ind==0){
				    			jsonObj.name=$(td).find('a').text();
				    		}else if(ind==1){
				    			jsonObj.bseCode=$(td).text();
				    		}
					    });
				    jsonObj.save();
			   });
	    };
		console.log('saved Annual Results data recorded into table at '+ new Date());
	});
};

module.exports={
	fetchAndSaveAnnualResults: fetchAndSaveAnnualResults
};