//your JS code here. If required.
let text= document.getElementById("text").value;
let number=document.getElementById("number").value;
let output=document.getElementById("output");

async function display(){
	return await setTimeout(()=>>{output.appedChild(text)},number*1000)
}