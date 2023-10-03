 const User = require('../models/User');

 module.exports = {
    async index(req, res) {

        const users = await User.findAll();

        if (users == "" || users == null) {
            return res.status(200).send({ message: "Nenhum usuário cadastrado" });

        }

        return res.status(200).send({ users });

    },

    async store(req, res) {

        const { name, password, email } = req.body;

        const user = await User.create({ name, password, email });

        return res.status(200).send({
            status: 1,
            message: 'usuário cadastrado com sucesso!',
            user

        });

    },
    async update(req, res) {

        const { name, password, email } = req.body;

        const { user_id } = req.params;

        await User.update({
            name, password, email
        }, {
            where: {
                id: user_id
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Usuário atualizado com sucesso!",
        });

    },
    async delete(req, res) {

        const { user_id } = req.params;

        await User.destroy({
            where: {
                id: user_id
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Usuário deletado com sucesso!",
        });

    }
 }