const axios = require("axios");
const responseCode = require("../../Utils/response-code");
const dotenv = require("dotenv").config();
const report= require("../model/trade-report");
const responseMessage = require("../../Utils/response-message");
const Util = require("../../Utils/Util");

//----------------------------------------🔥SERVICE FOR FETCHING AND STORING 10 RECORDS WITH SPECIFIC FIELDS INTO DATABASE🔥---------------------------------------

const insertData = async function () {
  try {
    const responseData = await axios.get("https://api.wazirx.com/api/v2/tickers");
    const data = responseData.data;
    const top10Entries = Object.entries(data).slice(0, 10);
    const extractedData = top10Entries.map(([key, value]) => ({
      key: key,
      last: value.last,
      buy: value.buy,
      sell: value.sell,
      volume: value.volume,
      base_unit: value.base_unit,
    }));
 const insertedData = await report.insertMany(extractedData);
  if(!insertedData) return {code:responseCode.BAD_REQUEST,msg:responseMessage[responseCode.BAD_REQUEST],data:{}};
  return Util.responseFormat({code:responseCode.SUCCESS,msg:responseMessage[responseCode.SUCCESS],data:insertedData})
} catch (error) {
    return Util.response({ code: responseCode.INTERNAL_SERVER_ERROR,msg: responseMessage[responseCode.INTERNAL_SERVER_ERROR],data: {}});
  }
};

//----------------------------------------🔥SERVICE FOR GETTING 10 RECORD FROM DATABASE🔥---------------------------------------
const getData = async function(req,res){
   try {
  const recievedData = await report.find().limit(10);
  if(recievedData.length==0) return {code:responseCode.NO_RECORD_FOUND,msg:responseMessage[responseCode.NO_RECORD_FOUND],data:{}};
  return Util.responseFormat({code:responseCode.SUCCESS,msg:responseMessage[responseCode.SUCCESS],data:recievedData})
   } catch (error) {
    return Util.response({ code: responseCode.INTERNAL_SERVER_ERROR,msg: responseMessage[responseCode.INTERNAL_SERVER_ERROR],data: {}});
   }
}

module.exports = { insertData,getData };
