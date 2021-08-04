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
        liStats[1].innerHTML = `Sleep: ${this.sleep}`
        liStats[2].innerHTML = `Boredom: ${this.boredom}`
        liStats[3].innerHTML = `Age: ${this.age}`
      
    }
}

const char = new Tomagotchi()

char.displayStats()