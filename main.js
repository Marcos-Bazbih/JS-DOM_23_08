var fName = document.getElementById("fName");
var lName = document.getElementById("lName");
var birthYear = document.getElementById("birthYear");
var patientId = document.getElementById("patientId");
var city = document.getElementById("city");
var search = document.getElementById("search");
var searchBtn = document.getElementById("searchBtn");
var searchBtnId = document.getElementById("searchBtnId");
var searchDiv = document.getElementById("searchDiv");
var formBtn = document.getElementById("formBtn");
var table4 = document.getElementById("table4");
var tableTd = document.getElementsByClassName("tableTd");

var patientsArray = [];

formBtn.addEventListener("click", function () {
    var patientObj = {
        FirstName: fName.value,
        LastName: lName.value,
        BirthYear: birthYear.value,
        Id: Number(patientId.value),
        City: city.value,
        date: {
            dateOfTest: `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`,
            timeOfTest: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
        }
    };
    patientsArray.push(patientObj);
    console.log(patientsArray);

    
    table4.innerHTML += `<tr><td>${patientObj.FirstName}</td><td>${patientObj.LastName}</td><td>${patientObj.BirthYear}</td><td>${patientObj.Id}</td><td>${patientObj.City}</td> </tr>`;

    
});


fName.oninput=function(){
    fName.value= fName.value.toUpperCase();
};
lName.oninput=function(){
    lName.value= lName.value.toUpperCase();
};
city.oninput=function(){
    city.value= city.value.toUpperCase();
};

searchBtn.onclick=function(){
    for(var i=0; i<patientsArray.length;i++){
        if(patientsArray[i].FirstName == search.value){
            searchDiv.innerHTML = `${patientsArray[i].FirstName},${patientsArray[i].LastName},${patientsArray[i].BirthYear},${patientsArray[i].Id},${patientsArray[i].City}`;
            return searchDiv.innerHTML;
        }
        else{
            searchDiv.innerHTML = `your name is not here`;
        }
    }
}

searchBtnId.onclick=function(){
    for(var i=0; i<patientsArray.length;i++){
        if(patientsArray[i].Id == Number (search.value)){
            searchDiv.innerHTML = `${patientsArray[i].FirstName},${patientsArray[i].LastName},${patientsArray[i].BirthYear},${patientsArray[i].Id},${patientsArray[i].City}`;
            return searchDiv.innerHTML;
        }
        else{
            searchDiv.innerHTML = `your id is not here`;
        }
    }
}