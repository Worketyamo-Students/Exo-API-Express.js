import express from "express";
import bodyparser from "body-parser";
import rooter from "./route/routees.js";

const app = express();
const port = 3000;
app.use(bodyparser.json()); //middleware
app.use("/dogs",rooter);
 



app.listen(port, (err) => {
    if(err) throw err;
	console.log(`Serveur démarré sur http://localhost:${port}`);
});