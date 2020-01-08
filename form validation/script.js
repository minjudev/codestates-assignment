function validation() {
    var id = document.querySelector("#id").value;
    var password = document.querySelector("#password").value;
    var phone = document.querySelector("#phone").value;
    var email = document.querySelector("#email").value;    
    var error_message = document.querySelector("#error_message");

    error_message.style.padding = "10px";

    if(id.length < 4) {
        text = "아이디는 최소 4자 이상 입력해주세요";
        error_message.innerHTML = text;
        return false;
    }

    if(password.length < 8) {
        text = "비밀번호는 최소 8자 이상 입력해주세요";
        error_message.innerHTML = text;
        return false;
    }

    if(isNaN(phone) || phone.length != 11) {
        text = "전화번호를 바르게 입력해주세요";
        error_message.innerHTML = text;
        return false;
    }

    if(email.indexOf("@") == -1 || email.length < 6) {
        text = "이메일 주소를 바르게 입력해주세요";
        error_message.innerHTML = text;
        return false;
    }
    alert("회원가입이 완료되었습니다");
    return true;   
}