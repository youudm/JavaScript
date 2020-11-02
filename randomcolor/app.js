const bg = ["orange", "blue", "red", "yellow", "green"]
const color = document.getElementById("color")
const bgBtn = document.getElementById("bgBtn")
const hexBtn = document.getElementById("hexBtn")

bgBtn.addEventListener("click", function () {
  const randomBgNum = Math.floor(Math.random() * bg.length)
  document.body.style.backgroundColor = bg[randomBgNum]
  color.textContent = bg[randomBgNum]
})
