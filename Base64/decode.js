// import readlineSync from "readline-sync"
// Decoding code
let decoding = () => {
    // let inputString = readlineSync.question("Enter the code you want to decode?")
    let inputtext = document.getElementById("intext").value
    // console.log(inputtext)
    if (inputtext == "") {
      alert("Please enter the string or code")
    } else {
      // console.log("hendrey")
    }
    let splitString = inputtext.split("")
  
    let checkString =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
    let checkStringarray = checkString.split("")
    // console.log(checkStringarray)
    var newArr = new Array()
    for (let i = 0; i < splitString.length; i++) {
      for (let z = 0; z < checkStringarray.length; z++) {
        if (checkStringarray[z] == splitString[i]) {
          newArr.push(checkString.indexOf(checkString[z]))
        }
      }
    }
    // console.log("new", newArr)
    let binCodes = newArr.map((e) => e.toString(2))
    // console.log("B", binCodes)
  
    let binCodes6 = binCodes.map((e) => {
      while (e.length < 6) {
        e = "0" + e
      }
      return e
    })
    // console.log("B6", binCodes6)
  
    //first join() and split()
    let jonedBiconde6 = binCodes6.join("")
    // console.log(jonedBiconde6)
  
    let splitBincodes = jonedBiconde6.split("")
    // console.log(splitBincodes)
    // joining 6 digits and removing last digits
    let bincode8 = []
    while (splitBincodes.length != 0) {
      bincode8.push(splitBincodes.splice(0, 8).join(""))
    }
    // Removing last digit also
    // if (bincode8.length - 1 != 8) console.log("after 8 pair" + 652, bincode8)
  
    // 8bit binary to decimal conversion
    // let nayaarray = ["10000", "10001", "10010"]
    let decimalarr = bincode8.map((e) => parseInt(e, 2))
    // console.log("decimal", decimalarr)
  
    // conversion of integer array to string array as charcodet() method is a string method works on strings only
  
    // let interToString = decimalarr.map(String)
    // console.log("CONVERSION", interToString)
  
    // decimal to ascii conversion
    // let ascii = 'a'.charCodeAt(0); // 97
    // let char = String.fromCharCode(ascii) // 'a'
  
    let reconstituted = String.fromCharCode.apply(null, decimalarr)
    // console.log(reconstituted)
  
    let decodedText = document.getElementById("outtext")
  
    // console.log(formattedText)
    //Changing Text of Output Text Area
    decodedText.innerText = reconstituted
  
    // let asciiArr = interToString.map((e) => e.fromCharCode())
    // console.log("ASSCII", asciiArr)
  }
  
  //decoding()
  // "S", "E", "V", "M", "T", "E", "8"
  // let checkString =
  //   "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  // let stringToArray = checkString.split("")
  // console.log(stringToArray)
  
  // let inputstring = "stuvwxy"
  // let inpitStringToArray = inputstring.split("")
  // console.log(inpitStringToArray)
  
  // function findMatch(array_1_small, array2_large) {
  //   var ary = new Array()
  //   for (let i = 0; i < array2_large.length; i++) {
  //     for (let z = 0; z < array_1_small.length; z++) {
  //       if (array2_large[i] == array_1_small[z]) {
  //         ary.push(i)
  //       }
  //     }
  //   }
  //   return ary
  // }
  
  // console.log(findMatch(inpitStringToArray, stringToArray))
  // export default decoding
  