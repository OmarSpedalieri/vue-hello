//
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.Bonus: Aggiungere un’immagine presa anch’essa da un data
// Altro possibile Bonus:
// gestire una funzione con un evento nel modo Vue.

var app = new Vue({

  el: "#container",
  data:{

    img: "img/img1.png",
    // img2: "img/img2.png",
    // img3: "img/img3.jpg",
    lv:0,
    mex:"Scopri come ti riduce un corso Boolean",
  },
  methods: {

    changeImg: function() {
      // var button_pressed=1;

      if (this.lv === 0){
        this.pics = "img/img1.png";
        this.lv = 0;
        console.log(this.lv);
      }else if (this.lv === 1){
        this.lv = 1;
        this.pics = "img/img2.png";
          console.log(this.lv);
      }else{
        this.lv = 2;
        this.pics = "img/img3.jpg";
          console.log(this.lv);
      }
    }
  }
});

//
// var app = new Vue({
//   el: "#app",
//   data: {
//     nome: "nome",
//     cognome: "cognome",
//     mieClassi: "classe2"
//   },
//   methods: {
//     changeTitle: changeTitle() {
//       //alert("ciao dal metodo interno");
//       if (this.mieClassi === "classe2"){
//         this.mieClassi = "classe1";
//       } else {
//         this.mieClassi = "classe2";
//       }
//       console.log(this.cognome);
//     }
//   }
// });
//
// var app = new Vue({
//     el: '#root',
//     data: {
//         message: 'Hello World!!!!!!',
//         mieClassi: "blue"
//       },
//     methods: {
//         saluta: function () {
//             if (this.mieClassi === "red") {
//                 this.mieClassi = "blue";
//             } else {
//                 this.mieClassi = "red";
//             }
//             console.log(this.message);
//         }
//     }
//
//    });
