const request = require("request");
const $ = require('cheerio');
const Sequelize = require('sequelize');

const lookupMasterModel = require('../model/LookupMasterModel');
const lookupMasterServices = require('../services/LookupMasterService');



function getURLForAnnualResult(){
	let data=lookupMasterServices.getURLForAnnualResult();
	data.then(function(d){
		d.map(function(a){
			console.log('start');
			request.get(a.keyValue3,(error, response, body) => {
				if(error) {
					console.dir(error);
					reject(error)
				}
				console.log(body)
			})
		})	
	});	
};

module.exports={
		getURLForAnnualResult: getURLForAnnualResult
};