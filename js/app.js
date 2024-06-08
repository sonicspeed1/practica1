var today= new Date();
var hournow= today.getHours();
var saludo;
console.log(today);
console.log(hournow);
if(hournow>18){
    saludo="Buenas Noches";

}else if(hournow>12){
    saludo="Buenas tardes";
}else if(hournow>0){
    saludo="Buenos dias";
}else{
    saludo="Bienvenidos!!";
}
document.write('<h3>'+saludo+'</h3>');