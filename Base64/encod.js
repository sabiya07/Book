// Base 64 encoding decoding process
// 1. Convert characters to ASCII - 8 bit (CHARCODE AT)
// 2. Combine all 8-bit binaries
// 3. Devide the whole binari to 6-bits
// 4. If the last digit is less than 6 bits we have to add 00
// 5. Convert binaries to decimal
// 5. Convert it by base-64 table( you will get some code like Example= HELLO => SEVMTE8= )
// 6. Join and display
// ________FIRST PROJECT_________
// BUILD A BASE-64 ENCODER DECODER CLI PROJECT

let base64Encoding = () => {
  // let inputString = readlineSync.question("Enter the string ?")
  // console.log(inputString);
  let inputtext = document.getElementById("intext").value
  // console.log(typeof inputtext)
  if (inputtext == "") {
    alert("Please enter the string or code")
  } else {
    // console.log("hendrey")
  }

  let splitString = inputtext.split("")
  // console.log("SplitString is ", splitString)

  //H -> bin  nai nikal skte
  //H ->ASCII ->bin
  //"h".charCodeAt()

  let asciiArr = splitString.map((e) => e.charCodeAt())
  // console.log(asciiArr)

  //ASCII -> bin
  //toString(2)

  let binCodes = asciiArr.map((e) => e.toString(2))
  // console.log("B", binCodes)

  //each binCodes element should be of 8bits
  //1 -->  00000001
  //11 --> 00000011
  //1000001 -> 0100001

  let binCodes8 = binCodes.map((e) => {
    while (e.length < 8) {
      e = "0" + e
    }
    return e
  })
  // console.log("B8", binCodes8)

  //first join() and split()
  let oneBinCodes = binCodes8.join("")
  // console.log(oneBinCodes);

  let oneBinSplit = oneBinCodes.split("")
  // console.log(oneBinSplit)

  //6 k pairs
  let binCodes6 = []
  while (oneBinSplit.length != 0) {
    binCodes6.push(oneBinSplit.splice(0, 6).join(""))
  }
  // console.log("after 6 pair", binCodes6)

  //selecting lastElement
  let lastElement = binCodes6[binCodes6.length - 1]
  // console.log(lastElement);

  //Last Element padding from rightside
  //whenever we are adding two zero's we have to add '='
  // 00 -> =
  // 0000 -> ==

  var equalToCount = 0
  while (lastElement.length < 6) {
    lastElement = lastElement + "0"
    equalToCount++
  }
  binCodes6[binCodes6.length - 1] = lastElement

  // console.log("last element", lastElement.length)
  // console.log(equalToCount);
  // console.log(binCodes6);

  //bin --> dec
  let bintoDec = binCodes6.map((e) => parseInt(e, 2))
  // console.log(bintoDec)

  //dec --> corresponding base64 values
  let base64 =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  // console.log("base64 value is ", base64[27])

  let finalCode = bintoDec.map((e) => base64[e])
  // console.log(finalCode)

  let finalString = finalCode.join("")
  // console.log(finalString)

  if (equalToCount == 2) {
    finalString = finalString + "="
  } else if (equalToCount == 4) {
    finalString = finalString + "=="
  }

  // console.log("Final Encoded base64 is: ", finalString)
  let encodedText = document.getElementById("outtext")

  // console.log(formattedText)
  //Changing Text of Output Text Area
  encodedText.innerText = finalString
}
//base64Encoding()

// HELLO
// [H E L L O]
// each ASCII
// ASCII --> binary
//[0001, 11000, 00011]
// padding kr k each element 8bit
//[ 00011100, ....]
// join->split [0,1,1,0,1,0,.....]
// each 6 bit
// last element usku padding 6 bit kr k count kitte zero's akhri mein = lgane
// last element fix
// wapis each element bin-->dec.....parseInt();
// base64 table likh liye
// each element substitute with base64 corresponding values
// join()
// = lgaliye
// THE END

// export default base64Encoding
