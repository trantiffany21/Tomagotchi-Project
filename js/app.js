//game function
const game = () => {
        //create tomagotchi
        const name = document.querySelector("#name").value
        document.querySelector("h1").innerHTML = name

        const toma = new Tomagotchi(name)

        //feed when clicked
        const feedBtn = document.getElementById('feed')
        feedBtn.addEventListener("click", ()=>toma.feed())

        //play when clicked
        const playBtn = document.querySelector('#play')
        playBtn.addEventListener("click", ()=>toma.play())

        //sleep and turn off lights when clicked
        const sleepBtn = document.querySelector('#sleep')
        sleepBtn.addEventListener("click", ()=>toma.lightsOff())
        
        const aging = setInterval(()=>toma.ageUp(),5000)

        //randomly change a stat within an interval of 0.5-2.5 seconds
        const statChange = setInterval(()=>{
                const randMethod = Math.floor(Math.random()*4)
                console.log(randMethod)
                if(randMethod === 0 ){
                    toma.hungerUp()
                }else if(randMethod === 1){
                    toma.sleepUp()
                }else{
                    toma.boredomUp()
                }
                console.log("hunger", toma.hunger)
                toma.displayStats()
            },(Math.floor(Math.random()*2000)+500))

}

class Tomagotchi{
    constructor(name){
        this.name = name
        this.hunger = 1
        this.sleep = 1
        this.boredom = 1
        this.age = 0
        this.alive = true
        this.displayStats()
    }
    displayStats(){
        const liStats = document.querySelectorAll('#statsList')
        liStats[0].innerHTML = `Hunger: ${this.hunger}`
        liStats[1].innerHTML = `Boredom: ${this.boredom}`
        liStats[2].innerHTML = `Sleep: ${this.sleep}`
        liStats[3].innerHTML = `Age: ${this.age}`
        
      
    }
    feed(){
        if(this.hunger>1){
            this.hunger--
            this.displayStats()
        }
    }
    play(){
        if(this.boredom>1){
            this.boredom--
            this.displayStats()
        }
    }
    lightsOff(){
        if(this.sleep>1){
            this.sleep--
            const screen = document.querySelector('#screen')
            screen.style.backgroundColor = "#346856"
            setTimeout(function(){
                screen.style.backgroundColor = "#88c070"
                },1000);
                this.displayStats()
            }
    }
        
    
    
    ageUp(){
        this.age++
        this.displayStats()
    }
    hungerUp(){
        this.hunger++
    }
    sleepUp(){
        this.sleep++
    }
    boredomUp(){
        this.boredom++
    }
}




