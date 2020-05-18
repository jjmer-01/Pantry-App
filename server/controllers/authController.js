const bcrypt = require('bcryptjs')

module.exports = {

    register: async (req, res) => {
        const { email, first_name, last_name, password } = req.body
        const db = req.app.get('db')

        let user = await db.auth.check_user({email})
        user = user[0]
        if (user) {
            return res.status(400).send('User already exists. Login please.')
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        try {
            let newUser = await db.auth.register({ email, first_name, last_name, hash })
            newUser = newUser[0]
            req.session.user = newUser
            return res.status(201).send(req.session.user)
        } catch (err) {
            return res.sendStatus(500)
        }
    },

    login: async (req, res) => {

    },

    logout: (req, res) => {

    },

    getUser: (req, res) => {

    },
}