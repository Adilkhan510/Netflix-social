
console.log("hello")

// const isInvalid;

// const nameval = $(`#name`).val();
// const lastNameval = $(`#lastName`).val();
// const emailval = $(`#email`).val();
// const ageval = $(`#age`).val();
// const passwordval = $(`#password`).val();
// const passwordConfirmval = $(`#passwordConfirm`).val();
// const cardNumberval = $(`#cardNumber`).val();
// const cvcval = $(`#cvc`).val();

// const name = $(`#name`);
// const lastname = $(`lastName`);
// const email = $(`#email`);
// const age = $(`#age`);
// const password = $(`#password`);
// const passwordConfirm = $(`#passwordConfirm`);
// const cardNumber = $(`#cardNumber`);
// const cvc = $(`#cvc`);

// const allElementsValue = [nameval, lastNameval , emailval, ageval, passwordval , passwordConfirmval, cardNumberval, cvcval];
// const allEllement = ['#name' , '#lastName', '#email', '#age', '#password', '#passwordConfirm', '#cardNumber','#cvc']
// const allP = ['#name-p' , '#lastName-p', '#email-p', '#age-p', '#password-p', '#passwordConfirm-p', '#cardNumber-p','#cvc-p']


// const validation = (event)=>{
    
//     event.preventDefault();
    
//     for(let i = 0 ; i < allElementsValue .length ; i++){
//         if(allElementsValue[i] == '' || allElementsValue[i].length < 2 ){
//             $(`${allEllement[i]}`).css('border','3px solid red');
//             $(`${allP[i]}`).text (`invalid entry `);
//              $(`${allP[i]}`).addClass('invalid');
//         }else{
//             $(`${allP[i]}`).removeClass('invalid');
//             $(`${allP[i]}`).text('');
//             $(`${allP[i]}`).text (`valid entry. Thanks. `);
//             $(`${allEllement[i]}`).css('border','3px solid green');
//              $(`${allP[i]}`).addClass('valid');
        
//     }
// }
// }



//     console.log($(`#name`).val());
//     if(name == "" || name.lenght < 3){
//         $(`#name-p`).text(`please enter a valid name`);
//         $(`#name-p`).addClass('invalid');
//         $(`#name`).css ('border', '1px solid red');
//     }else{
//         $(`#name-p`).text('name is valid. Thanks');
//         $(`#name-p`).addClass('valid');
//         $(`#name`).css ('border', '1px solid green');
//     }
// }
let iChars = ["˜", "`", "!", "#", "$", "%", "ˆ", "&", "*", "+", "=", "-", "_", "[", "]", "/", ";", ":", ",", "{", "}", "|", "<", ">", "?", "!"];

const nameval = $(`#name`).val();
const lastNameval = $(`#lastName`).val();
const emailval = $(`#email`).val();
const ageval = $(`#age`).val();
const passwordval = $(`#password`).val();
const passwordConfirmval = $(`#passwordConfirm`).val();
const cardNumberval = $(`#cardNumber`).val();
const cvcval = $(`#cvc`).val();

const characterValidation =(value)=>{
    for (let i = 0; i < iChars.length; i++) {
        if ($(value).val().includes(iChars[i]) === true || $(value).val()=== "" || $(value).val().length <2 ) {     
            $(value).addClass("invalid");
        }
}}

const validation = ()=>{
    event.preventDefault();
    characterValidation('#name');
}


 $('#signin').on('click',validation)


