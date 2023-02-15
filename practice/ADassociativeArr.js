//連想配列上級
let desktopComputer ={
    "motherboard" : "AGUX 203-4344 Extreme",
    "CPU" : "Fantel l9 extreme 16 core 4.5Ghz",
    //連想配列の配列
    "RAM" : [
        {
            "title" : "Zolik DDR6 MegaHyper 32gb",
            "sizeMb" : 32000,
            "clockSpeedMHz" : 3000
        },
        {
            "title": "Zolik DDR6 MegaHyper 32gb",
            "sizeMb": 50000,
            "clockSpeedMHz": 7600
        }
    ],
    "storage" :[
        {
            "title": "Skygate ST3433 4TB HDD",
            "sizeGb": 4000, 
        },
        {
            "title": "Skygate GT3433 1TB SSD",
            "sizeGb": 2000,   
        },
    ],
    "GPU": "Livia jtx3400i ",
    "powerSupply": "Fursair Platinum 1200W PSU DirectY 12GB VRAM"
}


console.log(desktopComputer["mothorboard"]);
console.log(desktopComputer["CPU"]);
console.log(desktopComputer["RAM"][0]["title"]);
console.log(desktopComputer["RAM"][0]["sizeMb"]);
console.log(desktopComputer["RAM"][0]["clockSpeedMHz"]);
console.log(desktopComputer["RAM"][1]["title"]);
console.log(desktopComputer["RAM"][1]["sizeMb"]);
console.log(desktopComputer["RAM"][1]["clockSpeedMHz"]);
console.log(desktopComputer["storage"][0]["title"]);
console.log(desktopComputer["storage"][0]["sizeGb"]);
console.log(desktopComputer["storage"][1]["title"]);
console.log(desktopComputer["storage"][1]["sizeGb"]);
console.log(desktopComputer["GPU"]);
console.log(desktopComputer["powerSupply"]);
