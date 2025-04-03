import express from "express";
import fs, { read } from "fs";


const router = express.Router();


const readDataRec = () => {
    try {
        const data = fs.readFileSync("./recurs.json");
        return JSON.parse(data);
    } catch (error) {
        console.error(error);
    }
};

const writeRec=(data)=>{
    try{
        fs.writeFileSync("",JSON.stringify(data));

    }catch(error){
        console.log(error);
    }
};

router.get('/', (req, res) => {
    const user={name:"Ainara"}
    const htmlMessage = `
    <p>Aquest és un text <strong>amb estil</strong> i un enllaç:</p>
    <a href="https://www.example.com">Recursos Example</a>`;
    const data = readDataRec();
    res.render("recurso",{user, data, htmlMessage})
});

//Ver recurso por id GET
router.get("/:id",(req,res)=>{
    const data=readDataRec();
    const user={name:"Ainara"};
    const id=parseInt(req.params.id);
    const recurso =data.recursos.find((recurso)=>recurso.id===id);
    res.render("recursoDetalle", {recurso, user});
});

/* //Crear recurso
//Hacemos que la app cree un post (publicar)
router.post("/recursos",(req,res)=>{
    const data=readData();
    const body=req.body;
    //Creamos nuevo usuario
    const nuevoRecurso={
        //Generamos el siguiente id de forma automática
        id:data.recursos.length+1,
        //y le ponemos el resto de información
        ...body,    
    };
    //
    data.recursos.push(nuevoRecurso);
    //
    writeData(data);

    res.json(nuevoRecurso);
})

//MODIFICAR || PUT
router.put("/recursos/:id", (req, res) => {
    const data = readData();
    const body = req.body;
    const id = parseInt(req.params.id);
    const recursIndex = data.recursos.findIndex((recurso) => recurso.id === id);
    data.recursos[recursIndex] = {
        ...data.recursos[recursIndex],
        ...body,
    };
    writeData(data);
    res.json({ message: "Usuari modificat correctament" });
});

//PARA ELIMINAR || DELETE
router.delete("/recursos/:id", (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const recursIndex = data.recursos.findIndex((recurso)=> recurso.id===id);
    data.recursos.splice(recursIndex, 1);
    writeData(data);
    res.json({ message: "Usuari eliminat correctament" });
}); */


export default router;