

var rpg = (function () {

    var private = {

        player:"",
        characterChosen: false,
        enemyChosen: false,
        opponent:0,
        defeated :false,
        bfchosen: false,

        characters: [

            darkV = {
                name: "vader",
                image: "<img src = 'assets/images/darkvader.jpg' id = 'vader' class = 'ml-1 mr-1'>",
                counterAttack: 5,
                attack: 5,
                health: 50,

            },

            lukeS = {
                name: "luke",
                image: "<img src = 'assets/images/lukesky.jpg' id = 'luke' class = 'ml-1 mr-1 players'>",
                counterAttack: 6,
                attack: 6,
                health: 80,

            },

            sith = {
                name: "sith",
                image: "<img src = 'assets/images/sith.jpg' id = 'sith' class = 'ml-1 mr-1'>",
                counterAttack: 8,
                attack: 8,
                health: 60,

            },

            oviwan = {
                name: "obiWan",
                image: "<img src = 'assets/images/oviwan.jpg' id = 'obiWan' class = 'ml-1 mr-1'>",
                counterAttack: 10,
                attack: 10,
                health: 40,

            }
        ],

        //private functions 
        
    };

    return {


        init: function ()  {

            console.log(private.characters);

        // for (var i= 0;i<= private.characters.length;i++){

        // // $("#init").append("<buttom id='close-image players'>"+private.characters[i].image+"</buttom>");
        // // $("#init").append(private.characters[i].image);



        //  }

        },

        selectPlayer: function (arg) {
            private.characterChosen = true;
            private.player = arg.target.id;
            $(".playerfield").append()
            this.battlefield(arg.target.id);
        
        },



        selectOponent: function (arg) {
            
        },

        battlefield: function(arg){
            console.log(arg);
            if( private.bfchosen == false){
           for(var i=0; i<= private.characters.length; i++){
               if(private.characters[i].name !== arg){
                   $(".enemiesfield").append(private.characters[i].image);
               }

            private.bfchosen = true;
           }
        }

        },

        attackOponent: function () {

        },



        reset: function () {
           
        }




    };

 

})();











