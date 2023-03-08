const getAllJobs = async (req, res) => {
  res.send('All jobs')
}

const getJob = async (req, res) => {
  res.send(`get job ${req.params.id}`)
}

const createJob = async (req, res) => {
  res.send('create job')
}

const updateJob = async (req, res) => {
  res.send(`update job ${req.params.id}`)
}

const deleteJob = async (req, res) => {
  res.send(`delete job ${req.params.id}`)
}

module.exports = { getAllJobs, getJob, createJob, updateJob, deleteJob }
