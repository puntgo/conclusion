const lookupMasterDao=require('../dao/LookupMasterDao');
const got=require('got')
var lookupMasterService=function(){};

lookupMasterService.getURLForAnnualResult= function(){
	console.log('Lookup Master Services getURLForAnnualResult method called ');
	return new Promise((resolve,reject)=>{
		lookupMasterDao.getURLForAnnualResult().then((data)=>{
			resolve(data)
		}).catch((err)=>{
			reject(err)
		});
	});
};

module.exports=lookupMasterService;