let m =1,n=4,nums=[];

function sum(arr) {
    let len = arr.length;
    if(len == 0){
        return 0;
    } else if (len == 1){
        return arr[0];
    } else {
        return arr[0] + sum(arr.slice(1));
    }
}

let fan = true;

for(let i =0,k=1;i<n;i++) {
    console.log(k)
    if (k > m ) {
        k = 2;
        fan = !fan;
    } else {
        k++;
    }
    if(fan) {
        nums[i] = 0 - i - 1;
    } else {
        nums[i] = i + 1;
    }
}
console.log(nums)