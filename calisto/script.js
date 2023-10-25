var en=["1","2","3","4"]
var passant=["g8=Nf6","d8=Ne6","a8=Nc7","c8=Nd6"]
var passantcoins = 0
var pc = document.getElementById("pc-c")
var cps = document.getElementById("cps")
var epc = 0
ans=passant[epc]
function calisto(){
    passantcoins++
    pc.innerHTML = passantcoins
}
answer = document.getElementById("answer")
dailypassant = 0
function passantcoin(){
    passantcoins=parseFloat((dailypassant+passantcoins).toFixed(2))
    pc.innerHTML = passantcoins
}
var things={
    "bcp":{
        "f":100,
        "g":0.1,
        "c":0
    },
    "acp":{
        "f":500,
        "g":2,
        "c":0
    },
    "pcp":{
        "f":6000,
        "g":10,
        "c":0
    },
    "cc":{
        "f":20000,
        "g":100,
        "c":0
    },
    "gc":{
        "f":100000000,
        "g":500,
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
