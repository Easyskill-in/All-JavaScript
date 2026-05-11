let num = 153;

function Count(num) {
    let i = 0;
    while (num != 0) {
        i++;//1,2,3
        num = Math.floor(num / 10)//15 , 1 0 
    }

    return i;
}


function CheckArmStrongNumber(num) {
    let temp = num;//153
    let count = Count(num)//3
    let sum = 0;//0//27//152//153

    while (num != 0) {

        const rem = num % 10;//3,5,1
        sum = sum + Math.pow(rem, count)//27+0,27+125,152+1
        num = Math.floor(num / 10)//0
    }

    return sum === temp
}


for (let i = 0; i <= 1000; i++) {
    if (CheckArmStrongNumber(i)) {
        console.log("Yes", i)
    } else {
        console.log("No", i)
    }
}