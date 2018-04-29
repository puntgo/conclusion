var Sequelize = require('sequelize');
var sequelize = require('../../config/bin/dbconfig');

const LookupMasterModel = sequelize.define('LookupMasterModel', {
  lovGroupId: { type: Sequelize.INTEGER, field='LOV_GROUP_ID'},
  keyValue1: { type: Sequelize.STRING, field: 'KEY_VALUE_1'},
  keyValue2: { type: Sequelize.STRING, field: 'KEY_VALUE_2'},
  keyValue3: { type: Sequelize.STRING, field: 'KEY_VALUE_3'},
  keyValue4: { type: Sequelize.STRING, field: 'KEY_VALUE_4'},
  keyValue5: { type: Sequelize.STRING, field: 'KEY_VALUE_5'},
  keyValue6: { type: Sequelize.STRING, field: 'KEY_VALUE_6'},
  keyValue7: { type: Sequelize.STRING, field: 'KEY_VALUE_7'},
  keyValue8: { type: Sequelize.STRING, field: 'KEY_VALUE_8'},
  keyValue9: { type: Sequelize.STRING, field: 'KEY_VALUE_9'},
  keyValue10: { type: Sequelize.STRING, field: 'KEY_VALUE_10'},
  description: { type: Sequelize.STRING, field: 'DESCRIPTION'},
  displayOrder: { type: Sequelize.STRING, field: 'DISPLAY_ORDER'},
  activeFlagYN: { type: Sequelize.STRING, field: 'ACTIVE_FLAG_YN'}
},{
	 tableName: 'LOOKUP_MASTER'
});

module.exports=LookupMasterModel;