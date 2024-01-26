export default function handler(req,res){
    res.status(200).json({name:'shekhar joshi'})
    console.log(req.query)
}