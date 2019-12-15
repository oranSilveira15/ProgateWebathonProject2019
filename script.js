


const guideText=document.querySelector('.guide-text');
const output=document.querySelector('.output');
const codes=document.querySelector('.code');
const run=document.querySelector('.run');

let question="Printing a Statement- print('Hey There!')";
let display='';

const updateScreen1=(update1)=>
{
	guideText.value=update1;
}
updateScreen1(question);

const updateScreen2=(update2)=>
{
	output.value=update2;
}


const check=(codes)=>
{
	if(codes.value==="print\('Hey There!'\)")
	{
		display="Hey There!";
	}
	else
	{
		display='check code again';
	}
}


run.addEventListener('click',()=>{
	/*codes.forEach((code1)=>
	{
	code1.addEventListener('click',(event)=>{
		check(event.target.value);
		updateScreen2(display);
	});
});*/
		check(codes);
		updateScreen2(display);
})

