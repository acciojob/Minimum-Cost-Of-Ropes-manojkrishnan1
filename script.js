function calculateMinCost() {
  //your code here
	let input = document.getElementById('rope-lengths');

    let arr = input.value.split(',');
        for(let i in arr){
            arr[i] = Number(arr[i]);
        }

        let sum = 0;

        while(arr.length>1){
            arr.sort((a,b)=>a-b);
            arr[1] = arr[0] + arr[1];
            sum += arr[1];
            arr.shift();
        }

        let result = document.getElementById('result');
        result.innerHTML = sum;
}  
