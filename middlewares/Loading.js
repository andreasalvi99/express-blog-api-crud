function Loading(err, req, res, next) {
  console.log("[ERROR:]", err.message);

  return res.status(500).json({
    success: false,
    message: "Internal server error",
  });
}

module.exports = Loading;
