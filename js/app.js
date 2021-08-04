class Tomagotchi{
    constructor(){
        this.hunger = 1
        this.sleep = 1
        this.boredom = 1
        this.age = 0
    }
    getHunger(){
        return this.hunger
    }
    getSleep(){
        return this.sleep
    }
    getBoredom(){
        return this.boredom
    }
    getAge(){
        return this.age
    }
}

const char = new Tomagotchi()

const displayStats = () =>{
    const liStats = document.querySelectorAll('#statsList')
    liStats[0].innerHTML = `Hunger: ${char.getHunger()}`
    liStats[1].innerHTML = `Sleep: ${char.getSleep()}`
    liStats[2].innerHTML = `Boredom: ${char.getBoredom()}`
    liStats[3].innerHTML = `Age: ${char.getAge()}`
  
}
displayStats()