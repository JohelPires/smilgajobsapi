const notFound = (req, res) => {
  res.status(404).send(`Erro 404: Route ${req.path} não encontrada.`)
}

module.exports = notFound
