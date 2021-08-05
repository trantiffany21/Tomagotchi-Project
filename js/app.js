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
        const statChange = setInterval(()=>toma.game(),toma.randomTime())

    
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
        console.log("hunger " + this.hunger)
        console.log("boredom " +this.boredom)
        console.log("sleep " + this.sleep)
        
      
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
        if(this.alive === false){
            return false
        }
        this.age++
        this.displayStats()
    }
    hungerUp(){
        this.hunger++
        if(this.hunger >=10 ){
            gameOver("hunger")
        }
    }
    sleepUp(){
        this.sleep++
        if(this.sleep >=10 ){
            gameOver("fatigue")
        }
    }
    boredomUp(){
        this.boredom++
        if(this.boredom >=10 ){
            this.gameOver("boredom")
        }
    }
    game(){
        if(this.alive === false){
            return false
        }
        //select random stat to increase
        const randMethod = Math.floor(Math.random()*4)

        if(randMethod === 0 ){
            this.hungerUp()
            this.animate()
        }else if(randMethod === 1){
            this.sleepUp()
            this.animate()
        }else{
            this.boredomUp()
            this.animate()
        }
        this.displayStats()
    }
    randomTime(){
        const time = Math.floor(Math.random()*2000)+500;
        console.log(time)
        return time
    }

    gameOver(reason){
        alert(`${this.name} has died of ${reason}!`)
        this.alive = false
    }

    animate(){
        const img = document.querySelector("#img-box")
        const justify = ['flex-start', 'flex-end', 'center']
        const align = ['flex-start', 'flex-end', 'center']
        const rand1 = Math.floor(Math.random()*3)
        const rand2 = Math.floor(Math.random()*3)
        img.style['justify-content'] = justify[rand1]
        img.style['align-items'] = align[rand2]
    }
}




