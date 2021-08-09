function onFormSubmit(){
    let isValid = false;
    document.getElementById("messages").innerHTML = "";
    if(validateName("firstname") & validateName("lastname") & validatePassword() & validateUsername()){
        handleMessages(["Success!!!"]);
        isValid = true;
    }
    return isValid;
}

function validateName(name){
    let isValid = true;
    let messages = [];
    let flname = name==="firstname" ? document.signup.firstname.value.trim() :document.signup.lastname.value.trim();
    if(flname[0]<'A' || flname[0]>'Z'){
        messages.push("ERROR:: "+name+" must start with a cap and only alphabet allowed!");
    }
    flname = flname.toUpperCase();
    for (let i = 1; i < flname.length; i++) {
        if (flname.charAt(i) < "A" || flname.charAt(i) > "Z" ){ 
            messages.push("ERROR:: "+name+" - only alphabet allowed!");
        }
    } 
    if(messages.length>0){
        isValid = false;
        handleMessages(messages);
    }
    
    return isValid;
}

function validateUsername(){
    let isValid = true;
    let messages = [];
    let username = document.signup.username.value.trim();
    let firstChar = username.charAt(0).toUpperCase();

    if(firstChar < "A" || firstChar > "Z"){
        messages.push("ERROR:: username must start with alphabet!");
    }
    if (username.length < 6) {
        messages.push("ERROR:: username must have at least 6 characters!");
    }
    if(messages.length>0){
        isValid = false;
        handleMessages(messages);
    }
   
    return isValid;
}


function validatePassword(){
    let isValid = true;
    let capCount = 0, digitCount = 0;
    let messages = [];
    let pass1 = document.signup.password.value;
    let pass2 = document.signup.confirmPassword.value;
    if(pass1 !== pass2){
        messages.push("ERROR:: passwords do not match!");
    }
    if(pass1.length !== 6 || pass2.length !== 6){
        messages.push("ERROR:: password length must be 6!");  
    }
    let firstChar = pass1.charAt(0).toUpperCase();
    if(firstChar < "A" || firstChar > "Z"){
        messages.push("ERROR:: password must start with alphabet!");
    }

    for (let i = 0; i < pass1.length; i++) {
        if (pass1.charAt(i) >= "A" && pass1.charAt(i) <= "Z" ){ 
            capCount++; 
        }else if(parseInt(pass1.charAt(i)) != pass1.charAt(i)){
            digitCount++;
        }
    }
    if(capCount<1){
        messages.push("ERROR:: password must have at least 1 uppercase letter!");
    }
    if(digitCount<1){
        messages.push("ERROR:: password must have at least 1 digit!");
    }
    if(messages.length>0){
        isValid = false;
        handleMessages(messages);
    }
    return isValid;
}


function handleMessages(messages){
    let aside = document.getElementById("messages");
    let p, text;
    for(let i=0; i<messages.length; i++){
        console.log(messages[i]);
        p = document.createElement("p");
        text = document.createTextNode(messages[i]);
        p.appendChild(text);
        aside.appendChild(p);
    }
}


