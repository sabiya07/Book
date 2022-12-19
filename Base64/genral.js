let selectFun = () => {
    let x = document.getElementById("enc").value
  
    //   console.log(x)
    if (x == "encode") {
      document.getElementById("endbtn").hidden = false
      document.getElementById("dec").disabled = true
    } else {
      document.getElementById("decbtn").disabled = true
    }
  }
  let selectFun2 = () => {
    let y = document.getElementById("dec").value
    //   console.log(y)
    if (y == "decode") {
      document.getElementById("decbtn").hidden = false
      document.getElementById("enc").disabled = true
    } else {
      document.getElementById("endbtn").disabled = true
    }
  }
  