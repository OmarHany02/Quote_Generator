let qoute = document.getElementById("quote");
let author = document.getElementById("author");


async function generateqoute() {
  let response = await fetch("https://api.quotable.io/random")
  let data = await response.json()
  qoute.innerHTML = data.content
  author.innerHTML = data.author
  console.log(data)
}
