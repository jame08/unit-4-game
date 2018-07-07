

var rpg = (function () {

    var private = {

        player: null,
        enemies:[],
        characterChosen: false,
        enemyChosen: false,
        opponent: 0,
        defeated: false,
        bfchosen: false,
        defender: false,

        enemies:[],

        characters: [

            darkV = {
                name: "vader",
                image: "<img src = 'assets/images/darkvader.jpg' id = 'vader' class = 'ml-1 mr-1 var' onclick='rpg.selectPlayer(event)'> ",
                opImage: "<img src = 'assets/images/darkvader.jpg' id = 'vader' class = 'ml-1 mr-1' onclick='rpg.selectOponent(event)'>",
                counterAttack: 5,
                attack: 5,
                health: 50,

            },

            lukeS = {
                name: "luke",
                image: "<img src = 'assets/images/lukesky.jpg' id = 'luke' class = 'ml-1 mr-1 var' onclick='rpg.selectPlayer(event)'> ",
                opImage: "<img src = 'assets/images/lukesky.jpg' id = 'luke' class = 'ml-1 mr-1 ' onclick='rpg.selectOponent(event)'>",
                counterAttack: 6,
                attack: 6,
                health: 80,

            },

            sith = {
                name: "sith",
                image: "<img src = 'assets/images/sith.jpg' id = 'sith' class = 'ml-1 mr-1 var' onclick='rpg.selectPlayer(event)'>",
                opImage: "<img src = 'assets/images/sith.jpg' id = 'sith' class = 'ml-1 mr-1' onclick='rpg.selectOponent(event)'>",
                counterAttack: 8,
                attack: 8,
                health: 60,

            },

            oviwan = {
                name: "obiWan",
                image: "<img src = 'assets/images/oviwan.jpg' id = 'obiWan' class = 'ml-1 mr-1 var' onclick='rpg.selectPlayer(event)'>",
                opImage: "<img src = 'assets/images/oviwan.jpg' id = 'obiWan' class = 'ml-1 mr-1' onclick='rpg.selectOponent(event)'>",
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
                $("div.players").hide();
                $(".playerfield").html(arg.target.outerHTML);


                this.battlefield(private.enemies);
                 
            }     

        },



        selectOponent: function (arg) {

            console.log(arg.target.id);
           
        if(private.player != null && private.defender === false){
            private.defender =true;

            private.enemies = private.enemies.filter(x => x.name != arg.target.id);
            $(".defenderfield").html(arg.target.outerHTML);
            console.log(private.enemies);
            private.defender =true;
            
            $(".enemiesfield").empty();
            this.battlefield();
        }

        },

        battlefield: function (arg) {
             private.enemies.forEach(enemies => {
            $(".enemiesfield").append(enemies.opImage);
         } )

        },

        attackOponent: function () {

   
        },



        reset: function () {

        },

        // setdefender: function(arg) {

        //     private.defender = arg;
        // },
        // getdefender: function(){
        //     return private.defender;
        // }


       




    };



})();











