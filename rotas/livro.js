const { Router } = require("express")
const { getLivros, getLivro } = require("../controladores/livro")

const router = Router()

router.get('/', getLivros) 

router.get('/:id', getLivro) 

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