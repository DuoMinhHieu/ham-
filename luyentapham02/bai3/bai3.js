function giaiThua(number) {
    let tich = 1;
    for (let i = 1; i <= number;i++) {
        tich = tich * i
    }
    return tich;
}
function tinh(){
    let a = document.getElementById('1').value;
    let b = giaiThua(a);
    document.getElementById('2').innerHTML= b;
}