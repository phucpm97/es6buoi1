// console.log("nhenho")

// let str = "foo"
// let chars = [...str]
// console.log(chars);


// let mangC = [1, 2, 3, 4];
// let mangD = [...mangC];
// mangD.push(5);
// mangD.push(6);
// console.log(mangD);
// console.log(mangC);


// let obj = {
//     name: "Nguyen",
//     age: "18",
// };
// let objNew = {...obj, gender: "Female" };
// console.log(objNew);






var obj = document.getElementById("Idheading");
Idheading.addEventListener("click", function() {
    let content = document.getElementById('Idheading').innerText;
    console.log(content);
    let str = content;
    let chars = [...str];
    console.log(chars);
    for (let i = 1; i <= chars.length; i++) {

        var a = chars[i];
        console.log(a)
        this.style.color = "red";
    }
});

// var obj = document.getElementById('Idheading');
// Idheading.onmouseover = function() {
//     alert('Bạn đã hover chuột qua thẻ input');
// };

// //lấy nội dung của thẻ có id = hello
// var content = document.getElementById('hello').innerText;
// //in ra nội dung của thẻ đó.
// alert(content);