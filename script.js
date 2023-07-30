en=["1","2","3","4","5","6","7","8"]
passant=["exf6","dxc6","gxh6","dxe6","dxe6","gxh6","dxc6","cxb6"]
insults1 = [
    "Do you think you play well?",
    "Stop watching levy.",
    "The only thing you can make is finding en passants.",
    "You call that en passant? More like a en peasant!",
    "wtf was that en passant",
    "That was the worst en passant I've ever seen"
]
insults2 = [
    "This guy can't even find an en passant.",
    "You call that a move?",
    "You don't know what en passant is?",
    "You are spending so much time on r/AnarchChess",
    "Play some chess!"
]
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
    if (answer.value.toLowerCase() == ans || answer.value.toLowerCase() == ans.split("x")[1]){
        state.innerHTML = "True"
        state.style.color = "green"
        document.getElementById("ai-text").innerHTML = insults1[(Math.floor(Math.random() * insults1.length))]
    }
    else{
        state.style.color = "red"
        state.innerHTML = "False. <a href='https://www.google.com/search?q=en+passant' target=”_blank”>Google en passant</a>"
        document.getElementById("ai-text").innerHTML = insults2[(Math.floor(Math.random() * insults2.length))]
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