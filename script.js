var en=["1","2","3","4","5","6","7","8"]
var passant=["exf6","dxc6","gxh6","dxe6","dxe6","gxh6","dxc6","cxb6"]
var passantcoins = 0
var pc = document.getElementById("pc-c")
var cps = document.getElementById("cps")
var insults1 = [
    "Do you think you play well?",
    "Stop watching levy.",
    "The only thing you can make is finding en passants.",
    "You call that en passant? More like an en peasant!",
    "wtf was that en passant",
    "That was the worst en passant I've ever seen"
]
var insults2 = [
    "This guy can't even find an en passant.",
    "You call that a move?",
    "You don't know what en passant is?",
    "You are spending so much time on r/AnarchChess",
    "Play some chess!"
]
var epc = 0

var pos = document.getElementById("pos")
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
        passantcoins++
        pc.innerHTML = passantcoins
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
dailypassant = 0
function passantcoin(){
    passantcoins+=dailypassant
    pc.innerHTML = passantcoins
}
var things={
    "bcp":{
        "f":10,
        "g":1
    },
    "acp":{
        "f":40,
        "g":2
    },
    "pcp":{
        "f":60,
        "g":4
    },
    "cc":{
        "f":150,
        "g":10
    },
    "gc":{
        "f":200,
        "g":10
    },
    "epf":{
        "f":1000,
        "g":50
    },
    "aae":{
        "f":2000,
        "g":100
    }
};
function buypassant(that,obj){
    if(passantcoins >= things[obj]["f"]){
        passantcoins-=things[obj]["f"]
        dailypassant+=things[obj]["g"]
        that.disabled = true
        that.innerHTML = "bougth"
        pc.innerHTML = passantcoins
        cps.innerHTML = dailypassant
    }
    
    
}
setInterval(passantcoin,1000)