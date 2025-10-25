const { createApp } = Vue;

createApp({
  data() {
    return {
     pieces:[
    {
        "id": 1,
        "nom": "Batterie 12V",
        "prix": 120,
        "categorie": "Électricité",
        "image" : "./images/batterie12vl.webp" ,
        "disponible": true
    },
    {
        "id": 2,
        "nom": "Filtre à huile",
        "prix": 15,
        "categorie": "Filtration",
        "image" : "./images/filtrehuile.webp" ,
        "disponible": true
    },
    {
        "id": 3,
        "nom": "Bougies d'allumage (x4)",
        "prix": 35,
        "categorie": "Moteur" ,
        "image" : "./images/Bougiesallumage (x4).webp" ,
        "disponible": true
    },
    {
        "id": 4,
        "nom": "Disques de frein (x2)",
        "prix": 80,
        "categorie": "Freinage",
        "image" : " " ,
        "disponible": false
    },
    {
        "id": 5,
        "nom": "Courroie de distribution",
        "prix": 90,
        "categorie": "Moteur",
        "image" : "./images/courroie-de-distribution-voiture.jpg" ,
        "disponible": true
    },
    {
        "id": 6,
        "nom": "Pompe à eau",
        "prix": 70,
        "categorie": "Refroidissement",
        "image" : "./images/pompe-a-eau.jpg" ,
        "disponible": true
    },
    {
        "id": 7,
        "nom": "Amortisseurs arrière (x2)",
        "prix": 150,
        "categorie": "Suspension",
        "image" : "./images/amortisseur.webp" ,
        "disponible": true
    },
    {
        "id": 8,
        "nom": "Filtre à air",
        "prix": 20,
        "categorie": "Filtration",
        "image" : "./images/filtre-a-air.jpg" ,
        "disponible": true
    },
    {
        "id": 9,
        "nom": "Capteur ABS",
        "prix": 50,
        "categorie": "Sécurité",
        "image" : "./images/capteur-ABS-2.jpg" ,
        "disponible": true
    },
    {
        "id": 10,
        "nom": "Radiateur de refroidissement",
        "prix": 130,
        "categorie": "Refroidissement",
        "image" : "./images/Rasiateur.jpeg" ,
        "disponible": true
    },
    {
        "id": 11,
        "nom": "Alternateur",
        "prix": 200,
        "categorie": "Électricité",
        "image" : "./images/car-alternator.jpg" ,
        "disponible": true
    },
    {
        "id": 12,
        "nom": "Démarreur",
        "prix": 180,
        "categorie": "Électricité",
        "image" : "./images/demarreur-voiture-moteur-1024x587.jpg" ,
        "disponible": true
    },
    {
        "id": 13,
        "nom": "Kit d'embrayage",
        "prix": 220,
        "categorie": "Transmission",
        "image" : "./images/kitembrayage.jpeg" ,
        "disponible": true
    },
    {
        "id": 14,
        "nom": "Injecteur de carburant",
        "prix": 110,
        "categorie": "Moteur",
        "image" : " " ,
        "disponible": false
    },
    {
        "id": 15,
        "nom": "Pompe à carburant",
        "prix": 90,
        "categorie": "Carburant",
        "image" : "./images/Pompecarburant.webp" ,
        "disponible": true
    },
    {
        "id": 16,
        "nom": "Capteur de pression des pneus (TPMS)",
        "prix": 45,
        "categorie": "Sécurité",
         "image" : " " ,
        "disponible": false
    },
    {
        "id": 17,
        "nom": "Rétroviseur extérieur",
        "prix": 60,
        "categorie": "Carrosserie",
         "image" : "./images/retroviseur.webp" ,
        "disponible": true
    },
    {
        "id": 18,
        "nom": "Échappement complet",
        "prix": 250,
        "categorie": "Échappement",
         "image" : "./images/echappement.webp" ,
        "disponible": true
    },
    {
        "id": 19,
        "nom": "Vanne EGR",
        "prix": 140,
        "categorie": "Moteur",
         "image" : "./images/vane.webp" ,
        "disponible": true
    },
    {
        "id": 20,
        "nom": "Turbo",
        "prix": 400,
        "categorie": "Moteur",
         "image" : " " ,
        "disponible": false
    },
    {
        "id": 21,
        "nom": "Joint de culasse",
        "prix": 75,
        "categorie": "Moteur" ,
         "image" : " " ,
        "disponible": false
    },
    {
        "id": 22,
        "nom": "Boîtier de direction",
        "prix": 300,
        "categorie": "Direction",
         "image" : " " ,
        "disponible": false
    },
    {
        "id": 23,
        "nom": "Silent bloc de suspension",
        "prix": 35,
        "categorie": "Suspension",
         "image" : " " ,
        "disponible": false
    },
    {
        "id": 24,
        "nom": "Cardan de transmission",
        "prix": 160,
        "categorie": "Transmission",
         "image" : " " ,
        "disponible": false
    },
    {
        "id": 25,
        "nom": "Capteur de position vilebrequin",
        "prix": 50,
        "categorie": "Moteur",
         "image" : " " ,
        "disponible": false
    }
],

    filtrerecherche: "" ,
    afficheparcategorie: "",
    tri_prix: "Croissant",

    }
  },
  computed:{
      filtrepiece(){
          let result=this.pieces.filter(e=>
            (e.disponible === true &&
             e.nom.toLowerCase().includes(this.filtrerecherche.toLowerCase()) 
             && (e.categorie===this.afficheparcategorie||this.afficheparcategorie === ""))
        
            )
             if (this.tri_prix==="Croissant"){
               result.sort((a,b)=>a.prix-b.prix);
             }else{
               result.sort((a,b)=>b.prix-a.prix);
             }

        return result
      }
     
  }
}).mount("#app");

