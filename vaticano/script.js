var en=["1","2","3","4"]
var passant=["B-o-o-B","B-o-o-B","B-o-o-B","B-o-o-B"]
var passantcoins = 0
var pc = document.getElementById("pc-c")
var cps = document.getElementById("cps")
var insults1 = [
    "Do you think you play well?",
    "Stop watching levy.",
    "The only thing you can make is finding il vaticanos.",
    "You call that an il vaticano? More like an en peasant!",
    "wtf was that il vaticano",
    "That was the worst il vaticano I've ever seen"
]
var insults2 = [
    "This guy can't even find an il vaticano.",
    "You call that a move?",
    "You don't know what il vaticano is?",
    "You are spending so many time at r/AnarchChess",
    "Play some chess!"
]
var epc = 0

var pos = document.getElementById("pos")
pos.src = "../ilvaticanos/"+en[epc]+".png"
ans=passant[epc]
function change(){
    if(epc==3){
        epc=-1
    }
    epc++
    pos.src = "../ilvaticanos/"+en[epc]+".png"
    ans=passant[epc]
}
function control(){
    answer = document.getElementById("answer")
    state = document.getElementById("state")
    console.log(ans)
    if (answer.value == ans){
        state.innerHTML = "True"
        state.style.color = "green"
        document.getElementById("ai-text").innerHTML = insults1[(Math.floor(Math.random() * insults1.length))]
        passantcoins++
        pc.innerHTML = passantcoins
    }
    else{
        state.style.color = "red"
        state.innerHTML = "False. <a href='https://www.google.com/search?q=il+vaticano' target=”_blank”>Google il vaticano</a>"
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
    passantcoins=parseFloat((dailypassant+passantcoins).toFixed(2))
    pc.innerHTML = passantcoins
}
var things={
    "bcp":{
        "f":10,
        "g":0.1,
        "c":0
    },
    "acp":{
        "f":50,
        "g":2,
        "c":0
    },
    "pcp":{
        "f":600,
        "g":10,
        "c":0
    },
    "cc":{
        "f":2000,
        "g":100,
        "c":0
    },
    "gc":{
        "f":10000,
        "g":500,
        "c":0
    },
    "epf":{
        "f":100000,
        "g":1000,
        "c":0
    },
    "aae":{
        "f":2000000,
        "g":20000,
        "c":0
    }
};
function buypassant(obj){
    if(passantcoins >= things[obj]["f"]){
        passantcoins=parseFloat((passantcoins-things[obj]["f"]).toFixed(2))
        dailypassant=parseFloat((things[obj]["g"]+dailypassant).toFixed(2))
        things[obj]["f"]=Math.round(((things[obj]["f"]/10)+things[obj]["f"])*100)/100
        things[obj]["c"]+=1
        document.getElementById(obj+"-p").innerHTML = things[obj]["f"]
        document.getElementById(obj+"-n").innerHTML = things[obj]["c"]
        pc.innerHTML = passantcoins
        cps.innerHTML = dailypassant
    }
}
setInterval(passantcoin,1000)
function exportSave(){
    save = `${JSON.stringify(things)}!!${passantcoins}!!${dailypassant}`
    document.getElementById("save").value = btoa(save)
}
function importSave(){
    save = atob(document.getElementById("save").value)
    
    things=JSON.parse(save.split("!!")[0])
    passantcoins = parseFloat(save.split("!!")[1])
    dailypassant = parseFloat(save.split("!!")[2])
    for(i in Object.keys(things)){
        let keys = Object.keys(things)
        document.getElementById(keys[i]+"-p").innerHTML = things[keys[i]]["f"]
        document.getElementById(keys[i]+"-n").innerHTML = things[keys[i]]["c"]
    }
    pc.innerHTML = passantcoins
    cps.innerHTML = dailypassant

}
function rollnumber(){
    nums = [133,134]
    document.getElementById("rn").innerHTML = nums[Math.floor(Math.random()*2)]
}
rollnumber()
