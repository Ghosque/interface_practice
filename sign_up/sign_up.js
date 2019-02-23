// 选中输入密码时检测账号是否输入
function checkOne() {
    var ACCOUNT_VALUE = document.getElementsByName("account")[0].value;
    if (ACCOUNT_VALUE == ''){
        document.getElementById("account-img").src = "ban.png";
        document.getElementById("account-title").textContent = "请输入账号";
    }
    else {
        document.getElementById("account-img").src = "success.png";
        document.getElementById("account-title").textContent = "";
    }
}

// 选中输入密码确认时检测账号、密码是否输入
function checkTwo(){
    checkOne();

    var PASSWORD_VALUE = document.getElementsByName("password")[0].value;
    if (PASSWORD_VALUE == ''){
        document.getElementById("password-img").src = "ban.png";
        document.getElementById("password-title").textContent = "请输入密码";
    }
    else {
        document.getElementById("password-img").src = "success.png";
        document.getElementById("password-title").textContent = "";
    }
}

// 选中输入验证码时检测账号、密码、确认密码是否输入，并检测两次输入密码是否一致
function checkThree() {
    checkOne();
    checkTwo();

    var CONFIRM_VALUE = document.getElementsByName("confirm")[0].value;
    if (CONFIRM_VALUE == ''){
        document.getElementById("confirm-img").src = "ban.png";
        document.getElementById("confirm-title").textContent = "请再次输入密码";
    }
    else {
        var PASSWORD_VALUE = document.getElementsByName("password")[0].value;
        if (PASSWORD_VALUE == CONFIRM_VALUE){
            document.getElementById("confirm-img").src = "success.png";
            document.getElementById("confirm-title").textContent = "";
        }
        else {
            document.getElementById("confirm-img").src = "ban.png";
            document.getElementById("confirm-title").textContent = "两次输入结果不一致";
        }
    }
}

function checkFour(){
    checkOne();
    checkTwo();
    checkThree();

    var VERIFY_VALUE = document.getElementsByName("verify")[0].value;
    if (VERIFY_VALUE == ""){
        document.getElementById("verify-img").src = "ban.png";
        document.getElementById("verify-title").textContent = "请输入验证码";
    }
    else {
        document.getElementById("verify-img").src = "success.png";
        document.getElementById("verify-title").textContent = "";
    }
}

function signUp() {
    var ACCOUNT_VALUE = document.getElementsByName("account")[0].value;
    var PASSWORD_VALUE = document.getElementsByName("password")[0].value;
    var CONFIRM_VALUE = document.getElementsByName("confirm")[0].value;
    var VERIFY_VALUE = document.getElementsByName("verify")[0].value;

    checkOne();
    checkTwo();
    checkThree();
    checkFour();
    
    if (ACCOUNT_VALUE == ""){
        alert("请输入账号");
    }
    else if (PASSWORD_VALUE == ""){
        alert("请输入密码");
    }
    else if (CONFIRM_VALUE == ""){
        alert("请输入确认密码")
    }
    else if (VERIFY_VALUE == ""){
        alert("请输入验证码");
    }
    else if (PASSWORD_VALUE != CONFIRM_VALUE){
        alert("两次输入密码不一致");
    }
    else if (VERIFY_VALUE.toLowerCase() != "wzjm"){
        alert("验证码输入有误");
    }
    else {
        alert("success");
    }
}
