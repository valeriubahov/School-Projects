const A = [1,800,-3,22,788,-2,0,5];

for(let i = 0; i< A.length; i++){
    for(let j =0; j<A.length;j++){
        if(A[j]>A[i]){
            let tmp = A[i];
            A[i] = A[j];
            A[j] = tmp;
        }
    }
}

console.log(A);