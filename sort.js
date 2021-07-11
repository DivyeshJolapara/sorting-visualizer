	$(function(){
		
		function randomArrayGenerator(size){
			let arr=new Array(size);
			for(let i = 0;i< size;i++){
				
				arr[i]=10 + Math.floor(Math.random() * 70);
			}
			return arr;
		}


	//console.log(randomArrayGenerator(2));
	var arr = randomArrayGenerator(Math.floor(screen.width/58)); //[20,10];

	function createBars(){
		

		var chart = $('.chart');
		for(let a of arr){

			let val = $(`<div>${a}</div>`);

			$(`<div class='bar'>${a}</div>`).css({
				"background-color":"yellow",
				"height":`calc(${a}vh )`,
				"width":"40px",
				"display":"inline-block",
				"margin-right":"5px",
				"position":"relative"
			}).appendTo('.chart')
		}

	}
	createBars();
	var interval;
	$('#sort').click( function(){

		// while(bubbleSortGen(arr,swap).next().value != undefined){
			interval = setInterval( function(){
				bubbleSortGen(arr,swap).next().then(clearInterval(this));

			},200)
		// }
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

	// function bubbleSort(arr,swap){
	// 	for(i=0;i<50;i++){
	// 		bubbleSortGen(arr,swap).next()
	// 	}
	// }


	function swap(a,b){

		// let temp = a;

		return new Promise((r1,r2)=>{
			let temp = arr[a];
			arr[a]=arr[b];
			arr[b]=temp;
		// return new Promise((res,rej)=>{
		// let x = await
		
		a = $('.bar').eq(a);
		b = $('.bar').eq(b);
		a.css({"background-color":"green","color":"white"})
		b.css({"background-color":"green","color":"white"})
		
		a.before(b);
		b.after(a);

	})
	// })
	}




		// return new Promise((r,r2)=>{
		// 	a.before(b);
		// 	b.after(a);
		// })


		async function* bubbleSortGen(arr,cb)
		{
			$('.bar').css({"background-color":"yellow","color":"black"})
			let n = arr.length;
			let swapped  = false;
			for(let i = 0 ; i<n;i++){
				for(let j=0;j<n-i-1;j++){
					if(arr[j]>arr[j+1]){

						await swap(j,j+1);
						swapped=true;
						yield 1;

					}
					
				}
				if(!swapped){
					clearInterval(interval)
					return;

				}
			}

		}

	})