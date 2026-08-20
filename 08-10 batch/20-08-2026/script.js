
// function fn() {
//     console.log("My Function")
// }

// setTimeout(fn, 1000)



// fetch("https://v6.exchangerate-api.com/v6/9fe39d1427af2081ceae740d/latest/USD")
//     .then((res) => {
//         return res.json()
//     }).then((data) => {
//         console.log(data)
//     }).catch((error) => {
//         console.log(error);
//     })

// async function GetInfo() {

//     const Res = await fetch("https://v6.exchangerate-api.com/v6/9fe39d1427af2081ceae740d/latest/USD")
//     const Data = await Res.json();

//     console.log(Data);

// }


// console.log("First Line")


// try {
//     throw new Error("Mesage")
// } catch (error) {
//     console.log("Errrroror:", error);

// } finally {
//     console.log("Done")
// }


// console.log("Next Line")

const select = document.createElement("select")
const hr = document.createElement("hr")
const opt = document.createElement("option")
opt.innerText = "Select Your Choice"
opt.hidden = true;

select.addEventListener("input", (e) => {
    console.log(e.target.value)
    GetInfo(e.target.value)
})


document.body.append(select, hr)

async function GetInfo(Code = "USD") {
    try {

        const Res = await fetch(`https://v6.exchangerate-api.com/v6/9fe39d1427af2081ceae740d/latest/${Code}`)
        const Data = await Res.json();

        console.log({ Data });
        ShowData(Data)
    } catch (error) {
        console.log(error)
    }
}


function ShowData(data) {



    console.log(data.conversion_rates)
    console.log(Object.keys(data.conversion_rates))

    let Codes = Object.keys(data.conversion_rates)

    select.appendChild(opt)
    Codes.forEach((value, index) => {
        const option = document.createElement("option")
        option.innerText = value;
        option.value = value;
        select.appendChild(option)
    })

}

GetInfo()
 
