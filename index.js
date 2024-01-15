
console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert("Your message has been submitted successfully!")
}


const mouseOverImg = () => {
	alert("You are so cute!")
}


let form = document.querySelector('#contact');
form.addEventListener('submit', handleSubmit);

const image = document.querySelector('#homeImage')
image.addEventListener('mouseover', mouseOverImg);