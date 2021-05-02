function Para1(){
    var par1 = [];
    for(var i=1 ; i < 7 ; i++){
        par1.push(document.getElementById("point_"+i).value);
    }
    document.getElementById("ShowPara1").innerHTML = par1.join(". ");
}
function Para2(){
    var par2 = [];
    for(var k=1 ; k < 7 ; k++){
        par2.push(document.getElementById("2point_"+k).value);
    }
    document.getElementById("ShowPara2").innerHTML = par2.join(". ");
}