var num1 = parseInt(document.getElementById('num1').value);
var num2 = parseInt(document.getElementById('num2').value);
function cong(){
    var kq = num1 + num2;
    document.getElementById('kq').innerHTML = kq;
}
function tru(){
    var kq = num1 - num2;
    document.getElementById('kq').innerHTML = kq;
}
function nhan(){
    var kq = num1 * num2;
    document.getElementById('kq').innerHTML = kq;
}
function chia(){
    var kq = num1 / num2;
    document.getElementById('kq').innerHTML = kq;
}