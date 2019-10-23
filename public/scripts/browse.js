
const buttonArray = document.querySelectorAll('button')
const like2 = (btns)=>{

	buttonArray.forEach(btn => {
		btn.addEventListener('click', (event)=>{
			event.preventDefault();
			console.log('like')

		})
	});
}
like2();

console.log(buttonArray)





