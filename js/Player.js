class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }
// it will first take player1 and then player2
   addPlayer() {
    var playerIndex = "players/player" + this.index;
    // giving position for car 1 and 2
    if (this.index === 1) {
      this.positionX = width / 2 - 100;
    } else {
      this.positionX = width / 2 + 100;
    }

    // we are referring to the location in the database for the position
    database.ref(playerIndex).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY,
    });
  }
  //TA
  getDistance() {
    var playerDistanceRef = database.ref("players/player" + this.index);
    playerDistanceRef.on("value", data => {
      var data = data.val();
      this.positionX = data.positionX;
      this.positionY = data.positionY;
    });
  }
 
  //Bp
  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
    });
  }

  //Bp
  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }

  update(){
    var playerIndex="players/player"+this.index;
    database.ref(playerIndex).update({
      positionX:this.positionX,
      positionY:this.positionY
    })
  }
// we write so that we can call the name of the class itself rather that the object
  static getPlayersInfo(){
    var playerInfoRef=database.ref("players");
    playerInfoRef.on("value", data=>{
      allPlayers= data.val();
    })
  }
}