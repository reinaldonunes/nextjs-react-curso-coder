export default (req, res) =>{
    if(req.method === "GET"){
        res.status(200).json({ nome: "Reinaldo"})
    }else{
        res.status(200).json({ nome: "Não é Reinaldo"})
    }
}