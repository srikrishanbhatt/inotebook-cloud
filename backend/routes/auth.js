const express = require('express');
const router = express.Router();


router.get('/', (req, res) =>{

    obj = {
        a: 'this is the',
        number: 234
    }
    res.json(obj);

})

module.exports = router;