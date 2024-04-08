function checkName(){
    var check2 = document.getElementById("username").value.length;

    if(check2==0){
        document.getElementById("username").style.borderColor = "red";
        document.getElementById("usernamelabel").style.color = "red";
        document.getElementById("usernameerror").innerHTML = "Error! Please fill in the required field.";
    }
    else{
        document.getElementById("username").style.borderColor = "green";
        document.getElementById("usernamelabel").style.color = "green";
        document.getElementById("usernameerror").innerHTML = "";
    }
}

function checkpName(){
    var check2 = document.getElementById("pname").value.length;

    if(check2==0){
        document.getElementById("pname").style.borderColor = "red";
        document.getElementById("pnamelabel").style.color = "red";
        document.getElementById("pnameerror").innerHTML = "Error! Please fill in the required field.";
    }
    else{
        document.getElementById("pname").style.borderColor = "green";
        document.getElementById("pnamelabel").style.color = "green";
        document.getElementById("pnameerror").innerHTML = "";
    }
}

function checkPassword(){
    var check2 = document.getElementById("password").value.length;

    if(check2==0){
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("passwordlabel").style.color = "red";
        document.getElementById("passworderror").innerHTML = "Error! Please fill in the required field.";
    }
    else{
        document.getElementById("password").style.borderColor = "green";
        document.getElementById("passwordlabel").style.color = "green";
        document.getElementById("passworderror").innerHTML = "";
    }
}

function checkEmail(){
    var check2 = document.getElementById("email").value.length;

    if(check2==0){
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("emaillabel").style.color = "red";
        document.getElementById("emailerror").innerHTML = "Error! Please fill in the required field.";
    }
    else{
        document.getElementById("email").style.borderColor = "green";
        document.getElementById("emaillabel").style.color = "green";
        document.getElementById("emailerror").innerHTML = "";
    }
}

function checkAddress(){
    var check2 = document.getElementById("address").value.length;

    if(check2==0){
        document.getElementById("address").style.borderColor = "red";
        document.getElementById("addresslabel").style.color = "red";
        document.getElementById("addresserror").innerHTML = "Error! Please fill in the required field.";
    }
    else{
        document.getElementById("address").style.borderColor = "green";
        document.getElementById("addresslabel").style.color = "green";
        document.getElementById("addresserror").innerHTML = "";
    }
}

function checkInterests(){
    var check2 = document.getElementById("interests").value.length;

    if(check2==0){
        document.getElementById("interests").style.borderColor = "red";
        document.getElementById("interestslabel").style.color = "red";
        document.getElementById("interestserror").innerHTML = "Error! Please fill in the required field.";
    }
    else{
        document.getElementById("interests").style.borderColor = "green";
        document.getElementById("interestslabel").style.color = "green";
        document.getElementById("interestserror").innerHTML = "";
    }
}

function checkValues(){
    var username, pname, password, email, address, interests, y, z, check1, check2, check3;
    y = 0;

    username = document.getElementById("username").value;
    pname = document.getElementById("pname").value;
    password = document.getElementById("password").value;
    email = document.getElementById("email").value;
    address = document.getElementById("address").value;
    interests = document.getElementById("interests").value;

    var errors = [username, pname, password, email, address, interests];

    for (x=0;x<errors.length;x++){
        if (errors[x] == ""){
            y++;
        }
    }

    check1 = document.getElementById("male").checked;
    check2 = document.getElementById("female").checked;
    check3 = document.getElementById("no").checked;

    if (check1 == true){
        z = 1;
    }
    else if (check2 == true){
        z = 1;
    }
    else if (check3 == true){
        z = 1;
    }
    else{
        z = 0;
    }

    if (y==0 && z==1){
        document.getElementById("submit").removeAttribute("disabled");
    }
    else{
        document.getElementById("submit").setAttribute("disabled", "");
    }
}

function submitform(){
    var username, pname, password, email, address, interests, output, radiochoice;
    radiochoice = document.getElementsByName("gender");
    output = "";

    for (x=0;x<radiochoice.length;x++){
        if(radiochoice[x].checked){
            output = output + radiochoice[x].value; 
        }
    }

    username = document.getElementById("username").value;
    pname = document.getElementById("pname").value;
    password = document.getElementById("password").value;
    email = document.getElementById("email").value;
    address = document.getElementById("address").value;
    interests = document.getElementById("interests").value;


    document.getElementById("usernamedisplay").innerHTML = "Name: " + username;
    document.getElementById("pnamedisplay").innerHTML = "Preferred Name: " + pname;
    document.getElementById("passworddisplay").innerHTML = "Password: " + password;
    document.getElementById("emaildisplay").innerHTML = "Email:" + email;
    document.getElementById("addressdisplay").innerHTML = "Address: " + address;
    document.getElementById("interestsdisplay").innerHTML = "Inerests: " + interests;  
    document.getElementById("genderdisplay").innerHTML = "Gender: " + output;
    return (false);
}

function reset(){
    document.getElementById("usernamedisplay").innerHTML = "";
    document.getElementById("pnamedisplay").innerHTML = "";
    document.getElementById("passworddisplay").innerHTML = ""
    document.getElementById("emaildisplay").innerHTML = "";
    document.getElementById("addressdisplay").innerHTML = "";
    document.getElementById("interestsdisplay").innerHTML = "";  
    document.getElementById("genderdisplay").innerHTML = "";
}
