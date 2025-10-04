import { Router } from "express";
const router = Router();

var artistas =["Taylor Swift", "Nicki Minaj", "Adele", "bbno$",]

router.get("/", function   (req, res){
  res.render("home", {artistas});
})

router.get("/", (req, res) => {
  res.render("home");

});

router.get("/info", (req, res) => {
  res.render("informacion");
});

router.get("/c", (req, res) => {
  res.render("contactanos");
});

export default router;

router.post("/c", function(req, res) {
  var nombre = req.body.nombre;
  var edad = req.body.edad;
  console.log("Nombre :" + nombre + "Edad" + edad);
  res.render("Respuesta", {nombre,edad});
});

