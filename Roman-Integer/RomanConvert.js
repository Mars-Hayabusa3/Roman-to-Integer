const showRoman = document.querySelector("#show-roman");
const Roman = document.getElementById("Roman").value;
// let inputValue = document.getElementById("domTextElement").value; 

function RomanConvert(s) {
    var map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    var arr = s.split(''); // XII => ["X", "I", "I"];

    var sum = 0; // 初始值

    for (i = 0; i < arr.length; i++) { // 是 arr.length 沒錯，因為起始值是 0
        var v1 = map[arr[i]]; 
        var v2 = map[arr[i+1]]; // 解決 IX = 9 等特殊狀況

        if (v2 > v1) {
            sum = sum + v2 - v1;
            i++;
        } else {
            sum = sum + v1;
        }
    }

    return sum;
}

showRoman.innerText = RomanConvert(Roman);
// document.getElementById("valueInput").innerHTML = inputValue; 

// console.log(RomanConvert("XII")); // 記得要是字串！
// console.log(RomanConvert("MMXXII"));
// console.log(RomanConvert("MCMXCI"));
// console.log(RomanConvert("DCXXXII"));