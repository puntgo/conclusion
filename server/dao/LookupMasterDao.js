const LookupMasterModel=require('../model/LookupMasterModel');
const constant=require('../util/Constant');

const Sequelize = require('sequelize');
const sequelize = require('../../config/bin/dbconfig');

const lookupMasterDao=function(){};

lookupMasterDao.getURLForAnnualResult=function(){
	console.log('Lookup Master getURLForAnnualResult method called ');
	return new Promise(function(resolve,reject){
		LookupMasterModel.findAll({
			where:{
				lovGroupName:constant.ANNUAL_RESULTS
			},
			attributes: { exclude: ['id']}
		}).then(resultList => {
			resolve(resultList)
		}).catch((err)=>{
			console.log(err)
			reject(err)
		});
	});
};

module.exports=lookupMasterDao;