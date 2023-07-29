en=["1","2","3","4","5","6","7","8"]
passant=["f6","c6","h6","e6","e6","h6","c6","b6"]
epc = 0

pos = document.getElementById("pos")
pos.src = "enpassant/"+en[epc]+".png"
ans=passant[epc]
function change(){
    if(epc==7){
        epc=-1
    }
    epc++
    pos.src = "enpassant/"+en[epc]+".png"
    ans=passant[epc]
}
function control(){
    answer = document.getElementById("answer")
    state = document.getElementById("state")
    console.log(ans)
    if (answer.value.toLowerCase() == ans){
        state.innerHTML = "True"
        state.style.color = "green"
    }
    else{
        state.style.color = "red"
        state.innerHTML = "False. <a href='https://www.google.com/search?q=en+passant' target=”_blank”>Google en passant</a>"
    }
    answer.value = ""
    change()
}
answer = document.getElementById("answer")
answer.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("submit").click();
    }
  });