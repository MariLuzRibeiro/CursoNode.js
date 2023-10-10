const { Router } = require("express")

const router = Router()

router.get('/', (req, res) => {
    try{
        throw new Error("teste")
        res.send("TesteTesteOK")
    }catch (error){
        res.status(500)
        res.send(error.message)
    }
}) 

router.post('/', (req, res) => {
    res.send('Requisição do tipo Post')
})

router.patch('/', (req, res) => {
    res.send('Requisição do tipo Patch')
})

router.delete('/', (req, res) => {
    res.send('Requisição do tipo Delete')
})

module.exports = router