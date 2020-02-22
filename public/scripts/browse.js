
const nowPlaying = {
	"async": true, 
	"crossDomain": true, 
	"url": "https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=b899afbc3f53930ff5b7789533082450",
	"method": "GET",
  }
  
  $.ajax(nowPlaying).done(function (response) {
	//   add .catch error here

	for(let i=0; i<6; i++){
		const imgSrc = `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${response.results[i].poster_path}`
		const template = `
		<div class="imageClass">
			<img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/${response.results[i].poster_path}" alt="">
			<div class="image-content">
				<button class="${imgSrc} like"><i class="fas fa-thumbs-up"></i></button>
				<button class="${response.results[i].id} comment"><i class="fas fa-comment"></i></button>
			</div>  
		</div>`
		$('.1').append(template)
	}
});

const topRated = {
	"async": true,
	"crossDomain": true,
	"url": "https://api.themoviedb.org/3/movie/top_rated?page=1&language=en-US&api_key=b899afbc3f53930ff5b7789533082450",
	"method": "GET",
	"headers": {},
	"data": "{}"
  }
  
  $.ajax(topRated).done(function (response) {

	for(let i=0; i<6; i++){
		const imgSrc = `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${response.results[i].poster_path}`
		const template = `
		<div class="imageClass">
			<img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/${response.results[i].poster_path}" alt="">
			<div class="image-content">
				<button class="${imgSrc} like"><i class="fas fa-thumbs-up"></i></button>
				<button class="${response.results[i].id} comment"><i class="fas fa-comment"></i></button>
			</div>  
		</div>`
		$('.2').append(template)
	}
});

const upcoming = {
	"async": true,
	"crossDomain": true,
	"url": "https://api.themoviedb.org/3/movie/upcoming?page=1&language=en-US&api_key=b899afbc3f53930ff5b7789533082450",
	"method": "GET",
	"headers": {},
	"data": "{}"
  }
  
  $.ajax(upcoming).done(function (response) {

	for(let i=0; i<6; i++){
		const imgSrc = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${response.results[i].poster_path}`
		const template = `
		<div class="imageClass">
			<img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/${response.results[i].poster_path}" alt="">
			<div class="image-content">
				<button class="${imgSrc} like"><i class="fas fa-thumbs-up"></i></button>
				<button class="${response.results[i].id} comment"><i class="fas fa-comment"></i></button>
			</div>  
		</div>`
		$('.3').append(template)
	}

	$('.image-content').on('click', '.like', ()=>{
		const data = {"movie" : event.target.classList[0]}
		
		fetch(`/api/v1/users/update/${window.sessionStorage.userid}/addmovie`,{
			method : "PUT",
			headers : {'Content-Type': 'application/json'},
			body : JSON.stringify(data)
		}).then(response=>{
			console.log(response)
		}).catch(error=>{
			console.log(error)
		})
		});
	$('.image-content').on('click', '.comment', ()=>{
		event.preventDefault();
		window.sessionStorage.setItem('movieID', `${event.target.classList[0]}`);
		window.location= '/review'
	})
		
  });




















