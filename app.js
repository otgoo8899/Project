const menuBtn = document.querySelector('.menu');
const tab = document.querySelector('.tab');
const closeBtn = document.querySelector('.close');
menuBtn.addEventListener('click',()=>{
	tab.style.left="0px";
});
closeBtn.addEventListener('click',()=>{
	tab.style.left="-300px";
});

