
const chien = [{
    "id":0,
    "nom": "chien 1",
    "race": "bull dog",
    "age": "3 ans"
},
{
    "id": 1,
    "nom": "chien 3",
    "race": "Chihuahua",
    "age": "2 ans"
  },
  {
    "id": 2,
    "nom": "chien 3",
    "race": "Labrador",
    "age": "5 ans"
  }
];


const controllers = {
    //create
    createdogprofil : (req,res)=>{
       const {nom,race,age} = req.body;

      if (!nom || !race || !age) {
        return res.status(400).json({ error: "Nom, race et âge sont requis" });
      }
     // Vérify if dog is already there
        const chienExiste = chien.find((chien) => chien.nom === nom);
        if (chienExiste) {
        return res.status(400).json({ error: "Un chien avec ce nom existe déjà" });
      }   
       // Créer un nouveau chien
    const newdog = {
      // id: 4, // ID auto-g "“généré
      nom,
      race,
      age,
    };
        chien.push(newdog);
        res.status(201).json({msg:{success:"Dog created suceesfully"},newdog});       
    },
    //read all dogs
    getAllDogs: (req,res)=>{
        res.status(200).json({
            data:chien
        })
    }

    //update dog infos
    updatedogprofile : (req, res) => {
      const { nom, race, age } = req.body;
      const id = parseInt(req.params.id);
      // Vérification des champs fourni 
      if (!nom || !race || !age) {
        return res.status(400).json({ error: "Nom, race et âge sont requis" });
      }
       // Trouver le chien par ID
      const chienExiste = chien.find((chien) => chien.id === id);
      if (!chienExiste) {
        return res.status(404).json({ error: "Chien non trouvé" });
      }
      // change les ancien donne du  chien
      chien.nom = nom;
      chien.race = race;
      chien.age = age;
      res.status(200).json({ message: "Chien mis à jour", data: chien });
    },

  // Supprimer un chien
  deletedogprofile: (req, res) => {
    const id = parseInt(req.params.id);
    // Trouver l’index du chien
    const index = chien.findIndex((chien) => chien.id === id);
    if (index === -1) {
      return res.status(404).json({ error: "Chien non trouvé" });
    }  // Supprimer le chien
    chien.splice(index, 1);
    res.status(200).json({ message: "Chien supprimé" });
  },

};


export default controllers




