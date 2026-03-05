function NotFound(req, res, next) {
  return res.status(404).json({
    success: false,
    message: "Pagina non trovata",
    error: "not found",
  });
}

module.exports = NotFound;
