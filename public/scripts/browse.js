
// const like2 = (btns)=>{

// 	buttonArray.forEach(btn => {
// 		btn.addEventListener('click', (event)=>{
// 			event.preventDefault();
// 			console.log('like')

// 		})
// 	});
// }
// like2();



const nowPlaying = {
	"async": true,
	"crossDomain": true,
	"url": "https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=b899afbc3f53930ff5b7789533082450",
	"method": "GET",
	"headers": {},
	"data": "{}"
  }
  
  $.ajax(nowPlaying).done(function (response) {

	for(let i=0; i<6; i++){
		const template = `
		<div class="imageClass">
			<img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/${response.results[i].poster_path}" alt="">
			<div class="image-content">
				<button class="${response.results[i].id} like"><i class="fas fa-thumbs-up"></i></button>
				<button class="${response.results[i].id} comment"><a href="#">Comment</a></button>
			</div>  
		</div>`
		$('.slideshow1').append(template)
	}

	// console.log(response);
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
		const template = `
		<div class="imageClass">
			<img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/${response.results[i].poster_path}" alt="">
			<div class="image-content">
				<button class="${response.results[i].id} like"><i class="fas fa-thumbs-up"></i></button>
				<button class="${response.results[i].id} comment"><a href="#">Comment</a></button>
			</div>  
		</div>`
		$('.slideshow2').append(template)
	}
	// console.log(response);
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
		const template = `
		<div class="imageClass">
			<img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/${response.results[i].poster_path}" alt="">
			<div class="image-content">
				<button class="${response.results[i].id} like"><i class="fas fa-thumbs-up"></i></button>
				<button class="${response.results[i].id} comment"><a href="#">Comment</a></button>
			</div>  
		</div>`
		$('.slideshow3').append(template)
	}
	// console.log(response);
	
	$('.image-content').on('click', '.like', ()=>{
		console.log(event.target.id)
	
		const id = `${event.target.id}`
		
		let settings = {
			"url": "/api/v1/movies",
			"method": "POST",
			"headers": {},
			data: {
				id: id,
			}
		}
		$.ajax(settings).done(function(response) {
			console.log(response);
		})
		})
});




















