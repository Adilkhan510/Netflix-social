const getFavorites = async ()=>{
   const data = await fetch(`/api/v1/users/${window.sessionStorage.getItem('userid')}/favorites`, {
        method: 'GET',
        headers : {},
      }).then(response=>response.json()).then(json=>json.data)
      .catch(error=>{console.log(error)})
    console.log(data)
}

getFavorites()