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
        this.displayStats()
    }
}

const toma = new Tomagotchi()

toma.displayStats()
const feedBtn = document.getElementById('feed')
feedBtn.addEventListener("click", ()=>toma.feed())
const playBtn = document.querySelector('#play')
playBtn.addEventListener("click", ()=>toma.play())
const sleepBtn = document.querySelector('#sleep')
console.log(sleepBtn)
sleepBtn.addEventListener("click", ()=>{
    toma.lightsOff())
