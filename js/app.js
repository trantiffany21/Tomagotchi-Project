class Tomagotchi{
    constructor(){
        this.hunger = 1
        this.sleep = 1
        this.boredom = 1
        this.age = 0
    }
    displayStats(){
        const liStats = document.querySelectorAll('#statsList')
        liStats[0].innerHTML = `Hunger: ${this.hunger}`
        liStats[1].innerHTML = `Boredom: ${this.boredom}`
        liStats[2].innerHTML = `Sleep: ${this.sleep}`
        liStats[3].innerHTML = `Age: ${this.age}`
        
      
    }
    feed(){
        this.hunger--
        this.displayStats()
       
    }
    play(){
        this.boredom--
        this.displayStats()
    }
    lightsOff(){
        this.sleep--
        const screen = document.querySelector('#screen')
        screen.style.backgroundColor = "#346856"
        setTimeout(function(){
            screen.style.backgroundColor = "#88c070"
       },1000);

        this.displayStats()
    }
    changeNameStartGame(){
        const name = document.querySelector("#name").value
        this.name = name
        document.querySelector("h1").innerHTML = this.name
        
        const aging = setInterval(()=>this.ageUp(),5000)
    }
    ageUp(){
        this.age++
        this.displayStats()
    }
}
//create tomagotchi
const toma = new Tomagotchi()

//display the stats
toma.displayStats()

//feed when clicked
const feedBtn = document.getElementById('feed')
feedBtn.addEventListener("click", ()=>toma.feed())

//play when clicked
const playBtn = document.querySelector('#play')
playBtn.addEventListener("click", ()=>toma.play())

//sleep and turn off lights when clicked
const sleepBtn = document.querySelector('#sleep')
sleepBtn.addEventListener("click", ()=>toma.lightsOff())



