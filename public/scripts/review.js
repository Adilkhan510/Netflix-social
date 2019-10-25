

const reviews = {
	"url": `/api/v1/review/${window.sessionStorage.userid}`,
	"method": "GET",
	"headers": {},
	"data": "{}"
  }
  
  $.ajax(reviews).done(function (response) {
    //   console.log(response)

	for(let i=0; i<response.data.length; i++){
        const template = `
        <div id=${response.data[i]._id} class="grid">
            <h4>user : ${response.data[i].user}</h4>
            <h4> Movie Id: ${response.data[i].movieId} </h4> 
            <p>Comment : ${response.data[i].comment}</p>
        
            <input type="button" class="delete" value="delete">
            <input type="button" class="update" value="edit">
        </div>`
        $('.userReviews').append(template)
	}

    console.log(response);
    
    
});

$('body').on('click', ".delete", (event)=>{
    event.preventDefault();
    // console.log(event.target.parentElement.id)
    $.ajax({
    "method": "DELETE",
    "url": `/api/v1/review/delete/${event.target.parentElement.id}`
    }).done(function (response) {
    console.log(response)
    return window.location = "/review"
    })
})

$('body').on('click', ".update", (event)=>{
    event.preventDefault();
    const comment = event.target.parentElement.querySelector('p').innerHTML
    $('#review').children().remove();
    $('#review').html(`
        <textarea rows="4" cols="50" id="review-input">${comment}</textarea>
        <div id ="buttons">
            <button id="update-review">submit</button>
        </div>
    `)
    // const comment = event.target.parentElement.querySelector('p').innerHTML;
    $('#review-input').val(comment);
    $(`#update-review`).on('click', ()=>{
         $.ajax({
    "method": "PUT",
    "url": `/api/v1/review/update/${event.target.parentElement.id}`,
    "data": {
        "comment": `${$('#review-input').val()}`,
    }
}).done(function (response) {
    console.log(response)
    return window.location = "/review"
    })
    });
})

const newReview = (event)=> {
    event.preventDefault();
    
    const newReviews = $('#review-input').val();
    console.log(newReviews);

    if(newReviews !== ""){
    const newReview = `<div>
         <div id="newReviews">${newReviews}</div>
        <button  class="edit">Edit</button>
        <button class="remove">Remove</button>
        </div> `;
    $('#newComments').prepend(newReview);
    $(`#submit-review`).hide('slow');
    $('#review-input').hide('slow');
    }

    let settings = {
        "url": `/api/v1/review/create/`,
        "method": "POST",
        "headers": {},
        "data": {
            "comment": `${newReviews}`,
            "movieId" : `${window.sessionStorage.movieID}`,
            "user" : `${window.sessionStorage.userid}`
        }
    }
    $.ajax(settings).done(function(response) {
        console.log(response);
        return window.location = "/review"

    })


    return;
}

  function  removeReview(event) { 
      $(this).parent().remove();
      $(`#submit-review`).show();
      $('#review-input').val('');
       $('#review-input').show('slow');
}

// function updateReview(event){

//     $(`#submit-review`).show('slow');
//     $('#review-input').show('slow');
//     $('#review-input').val($(`#newReviews`).text());
//     $(this).parent().remove();   
// }

// $(`body`).on('click', '#update-review', updateReview);
$(`#submit-review`).on('click', newReview);
$('#newComments').on('click','.remove',removeReview);
// $('#newComments').on('click', '.edit', updateReview);

