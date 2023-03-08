const jobsRouter = require('express').Router()
const {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
} = require('../controllers/jobs')

// jobsRouter.get('/', jobsController.getAllJobs)
// jobsRouter.get('/:id', jobsController.getJob)
// jobsRouter.post('/', jobsController.createJob)
// jobsRouter.patch('/', jobsController.createJob)
// jobsRouter.delete('/', jobsController.createJob)

jobsRouter.route('/').post(createJob).get(getAllJobs)
jobsRouter.route('/:id').get(getJob).patch(updateJob).delete(deleteJob)

module.exports = jobsRouter
