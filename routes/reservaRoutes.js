import express from "express";
import fs, { read } from "fs";


const router = express.Router();

const readDataRes = () => {
    try {
        const data = fs.readFileSync("./reserva.json");
        return JSON.parse(data);
    } catch (error) {
        console.error(error);
    }
};

const writeReserva =(data)=>{
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
    <a href="https://www.example.com">Reservas Ejemplo</a>`;
    const data = readDataRes();
    res.render("reservas",{user, data, htmlMessage})
});

router.get("/:id",(req,res)=>{
    const data=readDataRes();
    const user={name:"Ainara"};
    const id=parseInt(req.params.id);
    const reserva =data.reservas.find((reserva)=>reserva.id===id);
    res.render("reservaDetalle", {reserva, user});
});


export default router;