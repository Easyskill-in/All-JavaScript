
const h1 = document.createElement("h1")
console.log(h1)

h1.innerText = "Hello I am New H1 Tag"
document.body.appendChild(h1)
h1.style.color = "red"

//https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D

// // const img = document.createElement("img")
// img.src = "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
// img.height="500"
// document.body.appendChild(img)

const a = document.createElement("a")
a.innerText = "Google"
a.href = "https://www.google.com"
a.target="_blank"
document.body.appendChild(a)

const box = document.createElement("div")

document.body.appendChild(box)

box.style.height="400px"
box.style.width="400px"
box.style.backgroundColor="red"

const circle = document.createElement("div")
circle.style.height = "100px"
circle.style.width = "100px"
circle.style.backgroundColor = "blue"
circle.style.borderRadius = "50%"


box.style.display="flex"
box.style.justifyContent="center"
box.style.alignItems="center"
circle.style.display="flex"
circle.style.justifyContent="center"
circle.style.alignItems="center"

const circle1 = document.createElement("div")
circle1.style.height = "50px"
circle1.style.width = "50px"
circle1.style.backgroundColor = "yellow"
circle1.style.borderRadius = "50%"

box.appendChild(circle)
circle.appendChild(circle1)

// const arr = ["a","b","c","d"]

// const ul = document.createElement("ul")

// arr.forEach((value,index)=>{
//     const li = document.createElement("li")
//     li.innerText = value
//     ul.appendChild(li)
// })

// document.body.appendChild(ul)

// data.todos.forEach
const data = {
  "todos": [
    {
      "id": 1,
      "todo": "Do something nice for someone you care about",
      "completed": false,
      "userId": 152
    },
    {
      "id": 2,
      "todo": "Memorize a poem",
      "completed": true,
      "userId": 13
    },
    {
      "id": 3,
      "todo": "Watch a classic movie",
      "completed": true,
      "userId": 68
    },
    {
      "id": 4,
      "todo": "Watch a documentary",
      "completed": false,
      "userId": 84
    },
    {
      "id": 5,
      "todo": "Invest in cryptocurrency",
      "completed": false,
      "userId": 163
    },
    {
      "id": 6,
      "todo": "Contribute code or a monetary donation to an open-source software project",
      "completed": false,
      "userId": 69
    },
    {
      "id": 7,
      "todo": "Solve a Rubik's cube",
      "completed": true,
      "userId": 76
    },
    {
      "id": 8,
      "todo": "Bake pastries for yourself and neighbor",
      "completed": true,
      "userId": 198
    },
    {
      "id": 9,
      "todo": "Go see a Broadway production",
      "completed": false,
      "userId": 7
    },
    {
      "id": 10,
      "todo": "Write a thank you letter to an influential person in your life",
      "completed": true,
      "userId": 9
    },
    {
      "id": 11,
      "todo": "Invite some friends over for a game night",
      "completed": false,
      "userId": 104
    },
    {
      "id": 12,
      "todo": "Have a football scrimmage with some friends",
      "completed": false,
      "userId": 32
    },
    {
      "id": 13,
      "todo": "Text a friend you haven't talked to in a long time",
      "completed": true,
      "userId": 2
    },
    {
      "id": 14,
      "todo": "Organize pantry",
      "completed": false,
      "userId": 46
    },
    {
      "id": 15,
      "todo": "Buy a new house decoration",
      "completed": true,
      "userId": 105
    },
    {
      "id": 16,
      "todo": "Plan a vacation you've always wanted to take",
      "completed": true,
      "userId": 162
    },
    {
      "id": 17,
      "todo": "Clean out car",
      "completed": false,
      "userId": 71
    },
    {
      "id": 18,
      "todo": "Draw and color a Mandala",
      "completed": true,
      "userId": 6
    },
    {
      "id": 19,
      "todo": "Create a cookbook with favorite recipes",
      "completed": true,
      "userId": 53
    },
    {
      "id": 20,
      "todo": "Bake a pie with some friends",
      "completed": false,
      "userId": 162
    },
    {
      "id": 21,
      "todo": "Create a compost pile",
      "completed": false,
      "userId": 13
    },
    {
      "id": 22,
      "todo": "Take a hike at a local park",
      "completed": true,
      "userId": 37
    },
    {
      "id": 23,
      "todo": "Take a class at local community center that interests you",
      "completed": true,
      "userId": 65
    },
    {
      "id": 24,
      "todo": "Research a topic interested in",
      "completed": true,
      "userId": 130
    },
    {
      "id": 25,
      "todo": "Plan a trip to another country",
      "completed": false,
      "userId": 140
    },
    {
      "id": 26,
      "todo": "Improve touch typing",
      "completed": false,
      "userId": 178
    },
    {
      "id": 27,
      "todo": "Learn Express.js",
      "completed": false,
      "userId": 194
    },
    {
      "id": 28,
      "todo": "Learn calligraphy",
      "completed": false,
      "userId": 80
    },
    {
      "id": 29,
      "todo": "Have a photo session with some friends",
      "completed": true,
      "userId": 91
    },
    {
      "id": 30,
      "todo": "Go to the gym",
      "completed": true,
      "userId": 142
    }
  ],
}