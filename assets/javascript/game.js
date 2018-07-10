

var rpg = (function () {
    
    

  

    var private = {

        
        
        player: null,
        enemies:[],
        defender:null,
        characterChosen: false,
       defenderleft: 3,
        defeated: false,

        enemies:[],

        characters: [

            darkV = {
                name: "vader",
                image: "<img src = 'assets/images/darkvader.jpg' id = 'vader' class = 'ml-1 mr-1 var' onclick='rpg.selectPlayer(event)'> ",
                opImage: "<img src = 'assets/images/darkvader.jpg' id = 'vader' class = 'ml-1 mr-1' onclick='rpg.selectDefender(event)'>",
                attack: 5,
                health: 60,

            },

            lukeS = {
                name: "luke",
                image: "<img src = 'assets/images/lukesky.jpg' id = 'luke' class = 'ml-1 mr-1 var' onclick='rpg.selectPlayer(event)'> ",
                opImage: "<img src = 'assets/images/lukesky.jpg' id = 'luke' class = 'ml-1 mr-1 ' onclick='rpg.selectDefender(event)'>",
                attack: 6,
                health: 70,

            },

            sith = {
                name: "sith",
                image: "<img src = 'assets/images/sith.jpg' id = 'sith' class = 'ml-1 mr-1 var' onclick='rpg.selectPlayer(event)'>",
                opImage: "<img src = 'assets/images/sith.jpg' id = 'sith' class = 'ml-1 mr-1' onclick='rpg.selectDefender(event)'>",
                attack: 7,
                health: 60,

            },

            oviwan = {
                name: "obiWan",
                image: "<img src = 'assets/images/oviwan.jpg' id = 'obiWan' class = 'ml-1 mr-1 var' onclick='rpg.selectPlayer(event)'>",
                opImage: "<img src = 'assets/images/oviwan.jpg' id = 'obiWan' class = 'ml-1 mr-1' onclick='rpg.selectDefender(event)'>",
                attack: 10,
                health: 50,

            }
        ],

        //private functions 

    };

    return {

        init: function () {

            private.characters.forEach(player => {
               
                $(".init").append(this.stats(player.attack,player.health,player.image));
            
            })

        },

        selectPlayer: function (arg) {
            if (private.player === null) {
                
                private.player = private.characters.find(x => x.name === arg.target.id);
                private.enemies = private.characters.filter(x => x.name != arg.target.id);
                $("div.players").empty();
                $(".playerfield").html(this.stats(private.player.attack,private.player.health,arg.target.outerHTML));
                this.battlefield(private.enemies);
                 
            }     

        },

        selectDefender: function (arg) {

            console.log(arg);
           
        if(private.defender === null){
           
            private.defender = private.enemies.find(x => x.name === arg.target.id);
            private.enemies = private.enemies.filter(x => x.name != arg.target.id);
            $(".defenderfield").append(this.stats(private.defender.attack,private.defender.health,private.defender.image));
            $(".enemiesfield").empty();
            this.battlefield();
        }

        },

        battlefield: function () {
            private.enemies.forEach(enemies => {
            $(".enemiesfield").append(this.stats(enemies.attack,enemies.health,enemies.opImage));
         } )

        },

       attack: function () {
        var saberSounds = ["assets/sounds/saber2.mp3", "assets/sounds/saber3.mp3", "assets/sounds/saber4.mp3"]
		var sound = new Audio (saberSounds[Math.floor(Math.random()*saberSounds.length)]);
            if(private.defender && private.player){
            sound.play;
            private.defender.health -= private.player.attack;
            private.player.health -= private.defender.attack;
            private.player.attack += 5 ;
            this.refresh();
            this.gamestate();

            }
   
        },

        gamestate: function(){

            if(private.player.health < 1){
                
                 alert("looser")
                 this.reset();
            }


            if(private.defender.health < 1 && private.defenderleft > 0){
              
                private.defender = null;
                private.defenderleft-= 1;
                console.log(private.defenderleft);
                $(".defenderfield").empty();
                addEventListener.selectDefender;
                
                if(private.defenderleft === 0){
                    this.reset();
                }
            
            }
        },

        refresh: function() {
        
        $(".playerfield").empty();
        $(".defenderfield").empty();
        $(".defenderfield").append(this.stats(private.defender.attack,private.defender.health,private.defender.opImage));
        $(".playerfield").append(this.stats(private.player.attack,private.player.health,private.player.image) );     

        },

        stats: function(arg1,arg2,arg3) {

           var stats = "<div class = 'bottom-right'>" + " AP " + arg1 + " HP " + arg2 + " </div> ";
           return "<div class = 'cont'> "  + arg3 + stats + "</div>";

        },

        reset: function () {

            location.reload();

        },
    };

})();

$(document).ready(function () {
 

    rpg.init();
    



})









