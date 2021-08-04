const User = require("../models/User");

const UserController = {
    create: async (req, res) => {
        try {
            const { name, email, cpf, phone, skills, active } = req.body;
            const { slug } = req.params;
            const user = await User.create({
                name,
                email: email.toLowerCase(),
                cpf,
                phone,
                skills,
                active,
                slug: slug.toLowerCase()
            })
            return res.status(200).json(user);
        } catch (error) {
            return res.status(400).json({ error });
        }
    }
}

module.exports = UserController;