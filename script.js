//your JS code here. If required.


document.getElementById("btn").addEventListner('click',async ()=>{
	let text= document.getElementById("text").value;
let delay=document.getElementById("delay").value;
let output=document.getElementById("output");

	if(!delay || !text){
		output.innerText="Please Enter Text and Delay";
		return
	}

	delay=parseInt(delay);

	await new Promise((resolve)=>{
		setTimeout(resolve,delay*1000)
		output.innerText=text
	})
	
})