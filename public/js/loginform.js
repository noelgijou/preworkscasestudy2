let email = document.getElementById("exampleInputEmail1");
let pwd = document.getElementById("exampleInputPassword1");

function validate(){
    if (email.value.trim()==""||pwd.value.trim()==""){
        alert("Fields cannot be empty");
        return false;
    }
    else{
        alert("Validation approved");
        return true;
    }
}