module.exports = (req, res, next) => {
    console.log(req.method + ' at ' + req.path)
    next()
}