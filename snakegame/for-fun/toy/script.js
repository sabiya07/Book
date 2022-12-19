let monkeyAudio = new Audio("monkey.mp3")
let elephantAudio = new Audio("elphantmp3.mp3")
let tigerAudio = new Audio("tigermp3.mp3")

//var myAudio = new Audio('my_great_song.mp3');
// myAudio.play();

let monkeySound = () => {
  let monkey = document.getElementById("monkey")
  // console.log(monkey)
  monkeyAudio.play()
}

let elephantSound = () => {
  let elephant = document.getElementById("elephant")
  // console.log(elephant)
  elephantAudio.play()
}

let tigerSound = () => {
  let tiger = document.getElementById("tiger")
  // console.log(tiger)
  tigerAudio.play()
}
