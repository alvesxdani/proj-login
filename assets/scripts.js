// PAGE STUDENT
function pageStudent() {
    document.getElementById('iframe').innerHTML = document.getElementById("pageStudent").innerHTML;
    document.getElementById('iframe').style.marginTop = "100px";
    document.getElementById('iframe').style.transition = "ease-in 0.9s";
}

// PAGE TEACHER
function pageTeacher() {
    document.getElementById('iframe').innerHTML = document.getElementById("pageTeacher").innerHTML;
    document.getElementById('iframe').style.marginTop = "100px";
    document.getElementById('iframe').style.transition = "ease-in 0.9s";
}

// FORGOT PASSWORD PAGE
function forgotPass() {
    document.getElementById('pageStudent').innerHTML = document.getElementById('forgotPass').innerHTML;
    document.getElementById("pageTeacher").innerHTML = document.getElementById("forgotPass").innerHTML;
    document.getElementById("iframe").innerHTML = document.getElementById('forgotPass').innerHTML;
    document.getElementById('iframe').style.marginTop = "100px";
    document.getElementById('iframe').style.transition = "ease-in 0.9s";
}