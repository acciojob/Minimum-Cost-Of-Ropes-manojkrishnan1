function calculateMinCost() {
  //your code here
	let input = document.getElementById('rope-lengths');

        let arr = input.value.split(',');
        for(let i in arr){
            arr[i] = Number(arr[i]);
        }
        // console.log(arr);

        //1. sort, 2. add, 3. shift, 4. add result in 1st index

        let sum = 0;

        while(arr.length>1){
            arr.sort((a,b)=>a-b);
            arr[1] = arr[0] + arr[1];
            sum += arr[1];
            arr.shift();
        }

        // console.log(arr, sum);

        let result = document.getElementById('result');
        result.innerHTML = sum;
}  
