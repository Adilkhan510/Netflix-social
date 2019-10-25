

console.log("hello")

let iChars = ["˜", "`", "!", "#", "$", "%", "ˆ", "&", "*", "+", "=", "-", "_", "[", "]", "/", ";", ":", ",", "{", "}", "|", "<", ">", "?", "!"];

let valid = true;

const characterValidation =(value , message)=>{
    for (let i = 0; i < iChars.length; i++) {
        if ($(value).val().includes(iChars[i]) === true || $(value).val()=== "" || $(value).val().length <2 ) {     
            $(value).addClass("invalid");
            $(message).text('invalid input');
            $(message).addClass('invalid-message');
            valid = false;
        }else{
            $(value).addClass("valid");
            $(message).addClass('valid-message');
            
        }

}}


validateEmail =(email)=> {
    var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  
    return $.trim(email).match(pattern) ? true : false;
  }


const nameval = $(`#name`).val();
const lastNameval = $(`#lastName`).val();
const emailval = $(`#email`).val();
const ageval = $(`#age`).val();
const passwordval = $(`#password`).val();
const passwordConfirmval = $(`#passwordConfirm`).val();
const cardNumberval = $(`#cardNumber`).val();
const cvcval = $(`#cvc`).val();

const name = $(`#name`);
const lastname = $(`lastName`);
const email = $(`#email`);
const age = $(`#age`);
const password = $(`#password`);
const passwordConfirm = $(`#passwordConfirm`);
const cardNumber = $(`#cardNumber`);
const cvc = $(`#cvc`);

const allElementsValue = [nameval, lastNameval , cardNumberval, cvcval];
const allEllement = ['#name' , '#lastName', '#cardNumber','#cvc']
const allP = ['#name-p' , '#lastName-p', '#cardNumber-p','#cvc-p']

const validation = (event)=>{
    valid = true;
    event.preventDefault();
    for(let i = 0 ; i < allEllement .length ; i++){
            characterValidation(allEllement[i] , allP[i]);
            }
    if(valid){
        const userData = {
            name : $('#name').val(),
            lastName: $('#lastName').val(),
            email: $('#email').val(),
            cardNumber: $('#cardNumber').val(),
            cvc: $('#cvc').val(),
            password: $('#password').val()
        };
        fetch('api/v1/users',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(stream => stream.json())
        .then(res=>console.log(res))
        .catch((err)=> console.log(err));
        return window.location = "/login"

    
    } else {
        console.log('not valid');
    }
    }

    const Emailvalidation = (event)=>{
        event.preventDefault();
    if(validateEmail($(`#email`).val()) === true){
        $(`#email`).addClass("valid");
    }else{
        $(`#email`).addClass("invalid");
    }
    }

const passwordValidation = (event)=>{
    event.preventDefault();
    
    
if($(`#password`).val() !== $(`#passwordConfirm`).val()) {
   
    $(`#password`).addClass("invalid");
    $(`#passwordConfirm`).addClass("invalid");   
    $('#passwordConfirm-p').text('password is not match')
    $('#passwordConfirm-p').addClass('invalid-message')
    }else{
        $(`#passwordConfirm`).addClass("valid");  
        $(`#password`).addClass("valid");
    }
}

const rewritePass = (event)=>{
    event.preventDefault();
    if($(`#password`).hasClass("invalid")===true && $(`#passwordConfirm`).hasClass("invalid") === true){
        $(`#password`).removeClass("invalid");
        $(`#passwordConfirm`).removeClass("invalid");
        $('#passwordConfirm-p').text("");

}
}
const rewriteName = (event)=>{
    event.preventDefault();
    if( $(`#name`).hasClass("invalid") || $(`#name`).hasClass("valid")){
        $(`#name`).removeClass("invalid");
        $(`#name`).removeClass("valid");
        $(`#name`).val("");
        $('#name-p').text("");
}
}

const rewriteLastName = (event)=>{
    event.preventDefault();
    if( $(`#lastName`).hasClass("invalid") || $(`#lastName`).hasClass("valid")){
        $(`#lastName`).removeClass("invalid");
        $(`#lastName`).removeClass("valid");
        $(`#lastName`).val("");
        $('#lastName-p').text("");
}
}

const rewriteCardumber= (event)=>{
    event.preventDefault();
    if( $(`#cardNumber`).hasClass("invalid") || $(`#cardNumber`).hasClass("valid")){
        $(`#cardNumber`).removeClass("invalid");
        $(`#cardNumber`).removeClass("valid");
        $(`#cardNumber`).val("");
        $('#cardNumber-p').text("");
}
}

const rewriteCvc= (event)=>{
    event.preventDefault();
    if( $(`#cvc`).hasClass("invalid") || $(`#cvc`).hasClass("valid")){
        $(`#cvc`).removeClass("invalid");
        $(`#cvc`).removeClass("valid");
        $(`#cvc`).val("");
        $('#cvc-p').text("");
}
}


$('#signin').on('click',validation);
$(`#email`).on( "focusout", Emailvalidation);
$(`#passwordConfirm`).on( "focusout", passwordValidation);
$(`#passwordConfirm`).on( "focusin", rewritePass);
$(`#password`).on( "focusin", rewritePass);

$(`#name`).on( "focusin", rewriteName);
$(`#lastName`).on( "focusin", rewriteLastName);
$(`#cardNumber`).on( "focusin", rewriteCardumber);
$(`#cvc`).on( "focusin", rewriteCvc);


