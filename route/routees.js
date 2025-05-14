import {Router} from 'express'
import controllers from '../controller/control.js';

const rooter = Router ();

 rooter.get("/all",controllers.getAllDogs);
 rooter.post("/aff",controllers.createdogprofil);
 rooter.put("/modif",controllers.updatedogprofile);
 rooter.delete("/supp",controllers.deletedogprofile);



export default rooter 























































