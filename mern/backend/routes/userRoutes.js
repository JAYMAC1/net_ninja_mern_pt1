const express = require('express')

const router = express.Router()

router.get('/', (req, res) =>{
    console.log('route from roues file');
})

module.exports = router