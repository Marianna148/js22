let parse = jsonObject => JSON.parse(jsonObject);
let newDataArr = []; 
 function getNewData(dataArr) {
    dataArr.map(item => newDataArr.push(item));   
}

function getResponse(infoObj) {

return new Promise(
function(resolve) {
let xml = new XMLHttpRequest();
xml.open("GET", infoObj, false);
xml.send();

resolve(xml.response);
       }
    )
}

getResponse("data.json")
.then(
    function(response) {
        let dataList = parse(response).children;
        return getNewData(dataList);
    }
 )
.then(
    function() {
         getResponse("data2.json")
         .then(
             function(response) {
                let dataList2 = parse(response).children;
                 return getNewData(dataList2);
             }
         )
        .then(() => console.log(newDataArr))
     }
 );