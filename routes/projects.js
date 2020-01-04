const express = require('express')
const projectsController = require('../controllers/ProjectsController')

const router = express.Router()

router.route('/')
        .post(projectsController.create)

module.exports = router