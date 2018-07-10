

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

                var stats = "<div class = 'bottom-right'>" + " AP " + player.attack + " HP " + player.health + " </div> ";
                $(".init").append("<div class = 'cont'> "+ player.image +  stats +"</div>");
            
            })

        },

        selectPlayer: function (arg) {
            if (private.player === null) {
                
                private.player = private.characters.find(x => x.name === arg.target.id);
                private.enemies = private.characters.filter(x => x.name != arg.target.id);
                var stats = "<div class = 'bottom-right'>" + " AP " + private.player.attack + " HP " + private.player.health + " </div> ";
                $("div.players").empty();
                $(".playerfield").html(arg.target.outerHTML + stats);


                this.battlefield(private.enemies);
                 
            }     

        },



        selectDefender: function (arg) {

            console.log(arg);
           
        if(private.defender === null){
           
            private.defender = private.enemies.find(x => x.name === arg.target.id);
            private.enemies = private.enemies.filter(x => x.name != arg.target.id);
            var stats = "<div class = 'bottom-right'>" + " AP " + private.defender.attack + " HP " + private.defender.health + " </div> ";
            $(".defenderfield").append("<div class = 'cont'>"+ private.defender.image + stats + "</div>" );
            $(".enemiesfield").empty();
            this.battlefield();
        }

        },

        battlefield: function () {
            private.enemies.forEach(enemies => {

            var stats = "<div class = 'bottom-right'>" + " AP " + enemies.attack + " HP " + enemies.health + " </div> ";
            $(".enemiesfield").append( "<div class = 'cont'> "  + enemies.opImage + stats + "</div>");
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
        var stats = "<div class = 'bottom-right'>" + " AP " + private.defender.attack + " HP " + private.defender.health + " </div> ";
        $(".defenderfield").append( "<div class = 'cont'> "  + private.defender.opImage + stats + "</div>");
        var stats = "<div class = 'bottom-right'>" + " AP " + private.player.attack + " HP " + private.player.health + " </div> ";
        $(".playerfield").append( "<div class = 'cont'> "  + private.player.image + stats + "</div>");

          

        },


 

        reset: function () {

            location.reload();

        },


    

       




    };



})();

$(document).ready(function () {
 

    rpg.init();
    



})









