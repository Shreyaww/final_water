let predict_btn = document.getElementById('btn_predict');

predict_btn.addEventListener("click", () => {
    document.querySelector(".popup").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".popup").style.display = "none";
})

function validate() {
    var field1 = document.getElementById("f1");
    var field2 = document.getElementById("f2");
    var field3 = document.getElementById("f3");
    var field4 = document.getElementById("f4");
    var field5 = document.getElementById("f5");
    var field6 = document.getElementById("f6");
    var field7 = document.getElementById("f7");
    var field8 = document.getElementById("f8");
    var field9 = document.getElementById("f9");
    var field10 = document.getElementById("f10");

    if (field1.value.trim() == "" || field2.value == "" || field3.value == "" || field4.value == "" || field5.value == "" || field6.value == "" || field7.value == "" || field8.value == "" || field9.value == "" || field10.value == "") {
        alert("Please enter all the values");
        return false;
    }
    else {
        true;
    }
}

