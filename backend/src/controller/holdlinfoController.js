const Util = require("../../Utils/Util")
const responseCode = require("../../Utils/response-code")
const responseMessage = require("../../Utils/response-message")
const service = require("../service/holdlinfoService");

//----------------------------------------------🔥REST API For Storing Top 10 data into database🔥------------------------------------------
const storeTop10DataInDatabase = async function(req,res){
  try {
    const responseData = await service.insertData();
    res.send(responseData);
  } catch (error) {
   res.send(Util.response({code:responseCode.INTERNAL_SERVER_ERROR,msg:responseMessage[responseCode.INTERNAL_SERVER_ERROR],data:{}}));
  }
}
//----------------------------------------------🔥REST API For get record into database🔥------------------------------------------

const getTop10Result = async function(req,res){
  try {
   const getallRecord = await service.getData();
   res.send(getallRecord);
  } catch (error) {
    res.send(Util.response({code:responseCode.INTERNAL_SERVER_ERROR,msg:responseMessage[responseCode.INTERNAL_SERVER_ERROR],data:{}}));
  }
}

module.exports={storeTop10DataInDatabase,getTop10Result};