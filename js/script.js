//
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.Bonus: Aggiungere un’immagine presa anch’essa da un data
// Altro possibile Bonus:
// gestire una funzione con un evento nel modo Vue.

var app = new Vue({

  el: "#container",
  data:{
    img: "img/img1.png",
    mex:"Scopri come ti riduce un corso Boolean!",
  },
  methods: {

    changeImg: function() {
      var lv = 0;

      if (this.lv === 1){
        this.img = "img/img1.png";
        this.lv = 1;
        console.log(this.lv);
      }else if (this.lv === 2){
        this.lv = 2;
        this.img = "img/img2.png";
          console.log(this.lv);
      }else{
        this.lv = 3;
        this.img = "img/img3.jpg";
          console.log(this.lv);
      }
    }
  }
});
