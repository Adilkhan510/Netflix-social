$(document).ready( () => {
    $('#username').append(`${window.sessionStorage.name}`)
    $('#email').append(`${window.sessionStorage.email}`)
    $('#cardNumber').append(`${window.sessionStorage.cardNumber}`)
    $('#cvc').append(`${window.sessionStorage.cvc}`)
})