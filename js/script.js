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

    changeImg(i) {
      if (i === 1){
        this.img = "img/img1.png";
      }else if (i === 2){
        this.img = "img/img2.png";
      }else{
        this.img = "img/img3.jpg";
      }
    }
  }
});
