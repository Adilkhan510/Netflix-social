const getFavorites = ()=>{
    fetch(`/api/v1/users/${window.sessionStorage.getItem('userid')}/favorites`, {
        method: 'GET',
        headers : {},
      }).then(response=>console.log(response)).catch(error=>{console.log(error)})
}

getFavorites()