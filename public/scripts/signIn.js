const checkUser= ()=>{
    event.preventDefault();
    console.log('hello')
    const userData = {
        email: $('#email').val(),
        password : $('#password').val(),
    }
    fetch('/api/v1/auth/users', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })
        .then(dataStream => dataStream.json())
        .then(res => {
          console.log(res);
          if (res.status === 201){
            window.sessionStorage.setItem(`userid`, `${res.data.id}`)
            window.sessionStorage.setItem(`name`, `${res.data.name}`)
            window.sessionStorage.setItem(`email`, `${res.data.email}`)
            return window.location = '/browse'
          }
        })
        .catch(err => console.log(err));
}

$('form').on('submit', checkUser)