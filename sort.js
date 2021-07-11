$(function(){
	
	function randomArrayGenerator(size){
		let arr=new Array(size);
		for(let i = 0;i< size;i++){
			
			arr[i]=10 + Math.floor(Math.random() * 90);
		}
		return arr;
	}


//console.log(randomArrayGenerator(2));
var arr = randomArrayGenerator(10); //[20,10];

function createBars(){
	

	var chart = $('.chart');
	for(let a of arr){

		let val = $(`<div>${a}</div>`);

		$(`<div class='bar'>${a}</div>`).css({
			"background-color":"yellow",
			"height":`calc(${a}vh )`,
			"width":"20px",
			"display":"inline-block",
			"margin-right":"5px",
			"position":"relative"
		}).appendTo('.chart')
	}

}
createBars();

$('#sort').click( function(){

	
	let a = $('.bar').eq(0);
	let b = $('.bar').eq(1);
	let c= $('.bar').eq(2);
	let d= $('.bar').eq(3);


	bubbleSortGen(arr,swap).next();
		// await swap(a,b);
		// await swap(c,d);
		//let count = 0;


		// setInterval(()=>{
		// 	if(++count == 2)
		// 		clearInterval(this)
		// 	a.css("background-color","red")
		// 	swap(a,b);
		// 	a.css("background-color","yellow")
		// 	a=c;
		// 	b=d;

		// },2000)
	}
	)

function bubbleSort(arr,swap){
	for(i=0;i<50;i++){
		bubbleSortGen(arr,swap).next()
	}
}


function swap(a,b){

	// let temp = a;
	let temp = arr[a];
	arr[a]=arr[b];
	arr[b]=temp;
	// return new Promise((res,rej)=>{
	// let x = await
	
	a = $('.bar').eq(a);
	b = $('.bar').eq(b);
	// a.animate({
	// 	left:'25px',
	// 	color:'red'
	// })
	// // let y = 
	// //await
	// b.animate({
	// 	right:'25px',
	// 	color:'red'
	// })
		a.before(b);
		b.after(a);

	
// })
}

	
	

	// return new Promise((r,r2)=>{
	// 	a.before(b);
	// 	b.after(a);
	// })


	 function* bubbleSortGen(arr,cb)
	{
		let n = arr.length;let count=0;
		let swapped  = false;
		for(let i = 0 ; i<n;i++){
			for(let j=0;j<n-i-1;j++){
				if(arr[j]>arr[j+1]){

					 swap(j,j+1);
					swapped=true;
					yield;

				}
				
			}
			if(!swapped)
				return;
		}

	}

})