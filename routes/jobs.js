const jobsRouter = require('express').Router()
const jobsController = require('../controllers/jobs')

jobsRouter.get('/', jobsController.getAllJobs)
jobsRouter.get('/:id', jobsController.getJob)
jobsRouter.post('/', jobsController.createJob)
jobsRouter.patch('/', jobsController.createJob)
jobsRouter.delete('/', jobsController.createJob)

module.exports = jobsRouter
