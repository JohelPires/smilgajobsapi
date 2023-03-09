const Job = require('../models/Job')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId }).sort('createdAt')
  res.status(StatusCodes.OK).json(jobs)
}

const getJob = async (req, res) => {
  // const { user, params } = req
  const jobId = req.params.id
  const user = req.user.userId

  const job = await Job.findOne({ _id: jobId, createdBy: user })

  if (!job) {
    throw new NotFoundError(`Job id ${jobId} not found.`)
  }

  res.status(StatusCodes.OK).json(job)
}

const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId
  const job = await Job.create(req.body)
  res.status(StatusCodes.CREATED).json({ job })
  // res.json(req.body)
}

const updateJob = async (req, res) => {
  const user = req.user.userId
  const jobId = req.params.id
  const job = Job.findByIdAndUpdate()
  res.send(`update job ${req.params.id}`)
}

const deleteJob = async (req, res) => {
  res.send(`delete job ${req.params.id}`)
}

module.exports = { getAllJobs, getJob, createJob, updateJob, deleteJob }
