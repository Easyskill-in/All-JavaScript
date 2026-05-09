let num = 237;

function Count(num) {
    let i = 0;

    while (num != 0) {
        i++;
        num = parseInt(num / 10)
    }

    return i;
}


function checkArmStrongNumber(num) {
    let temp = num;
    let pow = Count(num)
    let sum = 0;

    while (temp != 0) {
        let rem = temp % 10;
        sum = sum + Math.pow(rem, pow)
        temp = parseInt(temp / 10)
    }

    return sum === num
}



for (let i = 0; i < 1000; i++) {
    if (checkArmStrongNumber(i)) {
        console.log(i, "Yes")
    } else {
        console.log(i, "No")
    }
}