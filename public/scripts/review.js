

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
    })


    return;
}

  function  removeReview(event) { 
      $(this).parent().remove();
      $(`#submit-review`).show();
      $('#review-input').val('');
       $('#review-input').show('slow');
}

function updateReview(event){

    $(`#submit-review`).show('slow');
    $('#review-input').show('slow');
    $('#review-input').val($(`#newReviews`).text());
    $(this).parent().remove();   
}


$(`#submit-review`).on('click', newReview);
$('#newComments').on('click','.remove',removeReview);
$('#newComments').on('click', '.edit', updateReview);