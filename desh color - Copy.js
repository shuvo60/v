const bg =document.getElementById('bg'); 
function randomcolor(){
	return math.floor(math.random()* 255);
}
bg.addEventListener('click',()=>{
	bg.style.background = 'rgba('+randomColor()+','+randomColor()+','+randomColor()+', )'
})