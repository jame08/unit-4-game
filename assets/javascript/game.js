

var rpg = (function () {

    var private = {

        player: null,
        enemies:[],
        defender:null,
        characterChosen: false,
        enemyChosen: false,
        opponent: 0,
        defeated: false,
        bfchosen: false,
        defenderselect: false,

        enemies:[],

        characters: [

            darkV = {
                name: "vader",
                image: "<img src = 'assets/images/darkvader.jpg' id = 'vader' class = 'ml-1 mr-1 var' onclick='rpg.selectPlayer(event)'> ",
                opImage: "<img src = 'assets/images/darkvader.jpg' id = 'vader' class = 'ml-1 mr-1' onclick='rpg.selectDefender(event)'>",
                counterAttack: 5,
                attack: 5,
                health: 50,

            },

            lukeS = {
                name: "luke",
                image: "<img src = 'assets/images/lukesky.jpg' id = 'luke' class = 'ml-1 mr-1 var' onclick='rpg.selectPlayer(event)'> ",
                opImage: "<img src = 'assets/images/lukesky.jpg' id = 'luke' class = 'ml-1 mr-1 ' onclick='rpg.selectDefender(event)'>",
                counterAttack: 6,
                attack: 6,
                health: 80,

            },

            sith = {
                name: "sith",
                image: "<img src = 'assets/images/sith.jpg' id = 'sith' class = 'ml-1 mr-1 var' onclick='rpg.selectPlayer(event)'>",
                opImage: "<img src = 'assets/images/sith.jpg' id = 'sith' class = 'ml-1 mr-1' onclick='rpg.selectDefender(event)'>",
                counterAttack: 8,
                attack: 8,
                health: 60,

            },

            oviwan = {
                name: "obiWan",
                image: "<img src = 'assets/images/oviwan.jpg' id = 'obiWan' class = 'ml-1 mr-1 var' onclick='rpg.selectPlayer(event)'>",
                opImage: "<img src = 'assets/images/oviwan.jpg' id = 'obiWan' class = 'ml-1 mr-1' onclick='rpg.selectDefender(event)'>",
                counterAttack: 10,
                attack: 10,
                health: 40,

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

            console.log(arg.target.id);
           
        if(private.defender === null){
           
            private.defender = private.enemies.find(x => x.name === arg.target.id);
            private.enemies = private.enemies.filter(x => x.name != arg.target.id);
            var stats = "<div class = 'bottom-right'>" + " AP " + private.defender.attack + " HP " + private.defender.health + " </div> ";
            $(".defenderfield").append("<div class = 'cont'>"+ private.defender.image + stats + "</div>" );
            $(".enemiesfield").empty();
            this.battlefield();
        }

        },

        battlefield: function (arg) {
            private.enemies.forEach(enemies => {

            var stats = "<div class = 'bottom-right'>" + " AP " + enemies.attack + " HP " + enemies.health + " </div> ";
            $(".enemiesfield").append( "<div class = 'cont'> "  + enemies.opImage + stats + "</div>");
         } )

        },

        attackOponent: function () {

   
        },



        reset: function () {

        },

        setdefender: function(arg) {

            private.defender = arg;
        },
        getdefender: function(){
            return private.defender;
        }


       




    };



})();











