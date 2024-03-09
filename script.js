function calculateGCD() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);

    var result = gcd(num1, num2);
    document.getElementById('result').innerHTML = "<br>The GCD of <b>"+num1+"</b> and <b>"+num2+ "</b> is <b>"+result+"</b><br><br><hr>Made by Zaid Zuhair" ;
}

function gcd(a, b) {
    while (b !== 0) {
        var temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
