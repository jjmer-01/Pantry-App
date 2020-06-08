const bcrypt = require('bcryptjs')

module.exports = {

    register: async (req, res) => {
        console.log("hit register, req.body", req.body)
        const { email, username, first_name, last_name, password } = req.body
        const { session } = req
        const db = req.app.get('db')

        let uEmail = await db.auth.check_email({ email })
        let uName = await db.auth.check_username({ username })
        uEmail = uEmail[0]
        uName = uName[0]
        if (uEmail) {
            return res.status(400).send('User email already exists. Login please.')
        } else if (uName) {
            return res.status(400).send('Username already exists. Login please.')
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        let newUser = await db.auth.register({ email, username, first_name, last_name, hash })
        newUser = newUser[0]
        session.user = newUser
        res.status(201).send(session.user)

    },

    login: async (req, res) => {
        console.log('hit login, req.body', req.body)
        const { email, password } = req.body
        const { session } = req
        const db = req.app.get('db').auth

        let user = await db.check_email({ email })
        user = user[0]
        if (!user) {
            return res.status(400).send('User not found')
        }

        const authenticated = bcrypt.compareSync(password, user.hash)
        if (authenticated) {
            delete user.password
            session.user = user
            res.status(202).send(session.user)
        } else {
            res.status(401).send('Incorrect email or password.')
        }
    },

    logout: (req, res) => {
        console.log('hit logout')
        if (req.session) req.session.destroy()
        res.sendStatus(200)
    },
}