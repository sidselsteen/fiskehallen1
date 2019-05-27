var datoer= ["5. Juli 2019", "12. Juli 2019", "14. Juli 2019"]; 
var navn = ["Fiskebuffet", "Paella aften", "Live musik"];
var tid= ["kl.12.00 - 15.00", "kl. 12.00 - 15.00", "kl. 18.00"]; 
var indhold = "";

function events () {
    for (var i= 0; i < navn.length; i++) {
        
        indhold = indhold + '<h4>' + datoer[i] + '</h4>' + '<p>'+ navn[i]+'</p>' + '<p>' + tid[i] + '</p>'; 
        
    }
    
    document.getElementById("events").innerHTML=indhold;
}

events(); 