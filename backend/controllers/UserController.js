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
    },
    index: async (req, res) => {
        const users = await User.findAll({
            order: [
                ['name', 'ASC'],
            ]
        });
        return res.json(users);
    },
    validate: async (req, res) => {
        const { slug } = req.params;
        const user = await User.findOne({
            where: { slug }
        })
        return res.json(user);
    },
    update: async (req, res) => {
        const { slug } = req.params;
        const user = await User.findOne({
            where: { slug }
        })

        user.active = user.active ? false : true;
        await user.save();
        return res.json(user);
    }
}

module.exports = UserController;