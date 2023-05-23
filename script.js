const pass_f = document.querySelector('.password');
const showbtn = document.querySelector('.show');

showbtn.addEventListener("click", function() {
    if (pass_f.type === "password") {
        pass_f.type = "text";
        showbtn.textContent = "HIDE";
    } else {
        pass_f.type = "password";
        showbtn.textContent = "SHOW";

    }
})

function validate() {
    var username = document.getElementById("user").value;
    var passw = document.getElementById("pass").value;
    if (username == "student" && passw == "1234") {
        // window.location.assign("index2.html");
    } else {
        alert("Invalid User name or password!!");
    }
}