var en=["1","2","3","4","5","6","7","8","9","10","11","12"]
var passant=["exf6","dxc6","gxh6","dxe6","dxe6","gxh6","dxc6","cxb6","dxe6","axb6","gxf6","hxg6"]
var bgs = {"martin":3000,"horsey":10000,"brown":99999999999}
var passantcoins = 0
var pc = document.getElementById("pc-c")
var cps = document.getElementById("cps")
var music = document.getElementById("music")
music.style.display = "none"
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
    "You are spending so many time at r/AnarchChess",
    "Play some chess!"
]
var epc = 0

var pos = document.getElementById("pos")
pos.src = "../enpassants/"+en[epc]+".png"
ans=passant[epc]
function change(){
    if(epc==11){
        epc=-1
    }
    epc++
    pos.src = "../enpassants/"+en[epc]+".png"
    ans=passant[epc]
}
function control(){
    answer = document.getElementById("answer")
    state = document.getElementById("state")
    console.log(ans)
    if (answer.value.toLowerCase() == ans || answer.value.toLowerCase() == ans.split("x")[1]){
        document.getElementsByTagName("body")[0].onclick=""
        music.style.display = "block"
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
function martinHug(){
    alert("Martin hugged you.")
}
function buybg(bg){
    if(passantcoins>bgs[bg]){
        passantcoins = passantcoins-bgs[bg]
        document.getElementsByTagName("body")[0].style.backgroundImage = "url("+bg+".jpeg)"
    }
    else{
        alert("you need "+String(bgs[bg])+" passant coins kiddo")
        
    }
}
