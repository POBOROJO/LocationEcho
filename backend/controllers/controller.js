
const User = require("../modal/modal");

const home = (req, res) => {
    res.send("Hello World!");
}

const signup = async (req, res) => {
    try {
        await User.create(req.body);
        res.status(200).json({
            message: `User ${ req.body.username } created`
        })
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { home, signup };