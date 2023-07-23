// Importar o modelo do login
const Login = require('../models/adminLogin.model');

// Função para lidar com a requisição de login
const loginController = async (req, res) => {


    const { username, password } = req.body;

    try {
        // Verificar se o usuário existe no banco de dados
        const user = await Login.findOne({ username });

        console.log(user);

        if (!user) {
            console.error('Usuário não encontrado');
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        // Verificar a senha
        if (user.password !== password) {
            console.error('Senha incorreta');
            return res.status(401).json({ message: 'Senha incorreta' });
        }

        // Login bem-sucedido
        return res.status(200).json({ message: 'Login bem-sucedido' });
    } catch (error) {
        console.error('Erro no servidor:', error);
        return res.status(500).json({ message: 'Erro no servidor' });
    }
};

module.exports = loginController;
