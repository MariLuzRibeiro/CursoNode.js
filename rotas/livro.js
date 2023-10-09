const { Router } = require("express")

const router = Router()

router.get('/', (req, res) => {
    res.send("TesteTesteOK")
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