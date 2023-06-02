const { Router } = require("express");

const ContactController = require('./app/controllers/ContactController')

const router = new Router();

router.get('/contacts', ContactController.index)
router.get('/contacts/:id', ContactController.show)

router.delete('/contacts/:id', ContactController.delete)

module.exports = router;
