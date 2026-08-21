
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

const Input = document.createElement("input")
const H1 = document.createElement("h1")
Input.type = "Number"

// let MainAmount = 0


let main = "USD"
let sub = "USD"

let conversion_rates = {}


async function GetInfo(Code = "USD") {
    try {

        const Res = await fetch(`https://v6.exchangerate-api.com/v6/9fe39d1427af2081ceae740d/latest/${Code}`)
        const Data = await Res.json();

        console.log({ Data });
        // ShowData(Data)

        return Data;
    } catch (error) {
        console.log(error)
    }
}


function ShowData(data, action) {

    const select = document.createElement("select")
    const hr = document.createElement("hr")
    const opt = document.createElement("option")
    opt.innerText = "Select Your Country"
    opt.hidden = true;

    if (action == "main") {
        select.addEventListener("input", async (e) => {
            main = e.target.value
            const MainData = await GetInfo(main)

            console.log(MainData);

            conversion_rates = MainData.conversion_rates;

            if (Input.value >= 0 && select.value != "") {
                ShowAmount(Input.value)
            }
        })



    } else if (action == "sub") {
        select.addEventListener("input", (e) => {
            sub = e.target.value
            if (Input.value >= 0 && select.value != "") {
                ShowAmount(Input.value)
            }
        })
    } else {
        console.warn("Not Valid Type")
        return;
    }

    // select.addEventListener("input", async (e) => {
    //     if (action == "main") {
    //         const SelectData = await GetInfo(e.target.value)
    //         console.log({ SelectData });
    //     } else if (action == "sub") {

    //     } else {

    //     }
    //     console.log(e.target.value)


    // })

    // console.log(data.conversion_rates)
    // console.log(Object.keys(data.conversion_rates))

    let Codes = Object.keys(data.conversion_rates)

    select.appendChild(opt)
    Codes.forEach((value, index) => {
        const option = document.createElement("option")
        option.innerText = value;
        option.value = value;
        select.appendChild(option)
    })


    document.body.append(select, hr)

}


async function Main() {
    try {

        const Data = await GetInfo();


        ShowData(Data, "main")

        ShowData(Data, "sub")


        document.body.appendChild(Input)

    } catch (error) {
        console.log("Error : ", error)
    }
}

Main();



Input.addEventListener("input", async (e) => {
    if (e.target.value <= 0) {
        e.target.value = 0;
    }

    ShowAmount(e.target.value)
})


function ShowAmount(amount) {
    H1.innerText = `${amount} ${main} = ${(amount * conversion_rates[sub]).toFixed(2)} ${sub}`;
    document.body.appendChild(H1)
}