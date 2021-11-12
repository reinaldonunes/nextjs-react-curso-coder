const users = []

export default function(req,res){
    if(req.method === "POST"){
        posts(req, res)
    }else{
        res.status(200).json(users)
    }
}

function posts(req, res){
    const user = JSON.parse(req.body)
    users.push(user)
    res.status(200).send()
}