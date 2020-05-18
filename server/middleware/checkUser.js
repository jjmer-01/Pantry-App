module.exports = (req, res, next) => {
    console.log('hit check user')
    if (req.session.user) {
        res.status(200).send(req.session.user)
    } else {
        next()
    }
}

