const diff=(num1,num2)=>{
    let num= parseInt(num1/num2)
    let closestNum1= num * num2;
    let closestNum2 = num1*num2;
    if (closestNum2>0){
        return num2*(num+1)
    }else{
        return num2*(num-1)
    }


    console.log(closestNum)
}
diff(15,7)