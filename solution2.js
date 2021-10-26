// 2] Given an array and a value, find if there is a triplet in array whose sum is equal
// to the given value. If there is such a triplet present in array, then print the triplet 
//and return true. Else return false.

// Input: array = {12, 3, 4, 1, 6, 9}, sum = 24; Output: 12, 3, 9                
// Explanation: There is a triplet (12, 3 and 9) present in the array whose sum is 24.


const findtriplet=(arr,sum)=>{
    let triplet=[]
    for(let i=0; i<=arr.length; i++){
        for( let j=0; j<=arr.length;j++){
            for(let k=0;k<=arr.length;k++){
                if(i!=j){
                    if(j!=k){
                        if(arr[i]+arr[j]+arr[k]===sum){
                            triplet.push(arr[i],arr[j],arr[k])
                        }
                    }
                }
            }
        }
    }
    console.log(triplet)
}
const input= [12, 3, 4, 1, 6, 9]
const sumOfInput=12;
findtriplet(input,sumOfInput)