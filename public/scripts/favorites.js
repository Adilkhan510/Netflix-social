
const getFavorites = async ()=>{
  const data = await fetch(`/api/v1/users/${window.sessionStorage.getItem('userid')}/favorites`, {
        method: 'GET',
        headers : {},
      }).then(response=>response.json()).then(response=>{
        const template = `
        <img src=${response.data} alt="">
        `
        $('.1').append(template)
      })
      .catch(error=>{console.log(error)})
}
getFavorites()
