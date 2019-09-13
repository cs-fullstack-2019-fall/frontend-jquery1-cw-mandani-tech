// !! : you are calling function1 which calls funtion2 which calls function1 (bad)
let elementImage = document.getElementById("middleImage");
let flag = false;
function hideImage() {
    if (flag === false) {
        imageEvery2Seconds();
        alert("hello");
        elementImage = " ";
    }
}
function imageEvery2Seconds() {

    flag = true;
    let time_interval = window.setInterval(hideImage, 2000);
}
hideImage();