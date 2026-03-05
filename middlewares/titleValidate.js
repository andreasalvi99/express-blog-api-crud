function titleValidate(req, res, next) {
  const newTitle = req.body.title;

  if (newTitle) {
    const normalizedTitle = newTitle.toLowerCase().trim();
    if (normalizedTitle.includes("bug")) {
      return res.status(403).json({
        message: "Valore non ammesso",
        success: false,
      });
    }
  }

  next();
}

module.exports = titleValidate;
