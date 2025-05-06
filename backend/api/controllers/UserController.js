import bcrypt from "bcrypt";
import Adm from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
configDotenv();

const secret = process.env.JWT_SECRET;
// helpers
import createAdmToken from "../helpers/create-adm-token.js";
import getUserByToken from "../helpers/get-user-by-token.js";
import getToken from "../helpers/getToken.js";
class UserController {
  async createUser(req, res) {
    const { email, name, password, confirmpassword } = req.body;
    // const adm = false;
    if (!name) {
      res.status(400).json({ message: "O nome é obrigatório" });
      return;
    }
    if (!email) {
      res.status(400).json({ message: "O email é obrigatório" });
      return;
    }
    if (!password) {
      res.status(400).json({ message: "A senha obrigatória" });
      return;
    }
    if (!confirmpassword) {
      res.status(400).json({ message: "A confirmação de senha é obrigatória" });
      return;
    }
    if (password !== confirmpassword) {
      res.status(400).json({ message: "As senhas não são iguais" });
      return;
    }

    // check if user already exists
    const checkUser = await Adm.findOne({ email: email });
    if (checkUser) {
      res.status(400).json({ message: "Este email já está em uso" });
      return;
    }

    const salt = bcrypt.genSaltSync(10);
    const senhaHash = bcrypt.hashSync(password, salt);

    const user = new Adm({
      name,
      email,
      password: senhaHash,
    });
    
    const newUser = await user.save();
    console.log(newUser);
    try {
      await createAdmToken(newUser, req, res);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async login(req, res) {
    const { email, password } = req.body;
    if (!email) {
      res.status(400).json({ message: "O email é obrigatório" });
      return;
    }
    if (!password) {
      res.status(400).json({ message: "A senha é obrigatória" });
      return;
    }
    //   check if user exists
    const adm = await Adm.findOne({ email: email });
    if (!adm) {
      res
        .status(422)
        .json({ message: "Não há usuário cadastrado com esse e-mail" });
      return;
    }

    // Check the password
    const checkpassword = await bcrypt.compare(password, adm.password);
    if (!checkpassword) {
      res.status(400).json({ message: "Senha incorreta" });
      return;
    }
    await createAdmToken(adm, req, res);
  }
  async checkUser(req, res) {
    let currentUser;
    if (req.headers.authorization) {
      // A função no helper, createAdmToken, envia junto com o token por meio dos headers o id do usuário alé do token
      const token = getToken(req); // extrai o token da requisição
      const decode = jwt.verify(token, secret); // retorna um objeto com todas as propriedades enviadas
      console.log(decode);

      currentUser = await Adm.findById(decode.id).select("-password");
    } else {
      currentUser = null;
    }
    res.status(200).send(currentUser);
  }
  async editUser(req, res) {
    const { name, email, phone, password, confirmpassword } = req.body;

    const token = getToken(req);
    // check the user by token
    const adm = await getUserByToken(token);

    // A imagem é enviada por meio do req.file
    if (req.file) {
      adm.image = req.file.filename;
    }

    if (!adm) {
      res.status(422).json({ message: "Usuário não exite" });
      return;
    }

    if (!name) {
      res.status(400).json({ message: "O nome é obrigatório" });
      return;
    }
    adm.name = name;

    if (!email) {
      res.status(400).json({ message: "O email é obrigatório" });
      return;
    }
    // Verifica se o email que o usuario está enviando é diferente do email atual do cadastro dele e se esse esse email já está cadastrado no sistema.
    const userExist = await Adm.findOne({ email: email }); //verifica se o email já foi cadastrado no banco
    if (adm.email !== email && userExist) {
      res
        .status(422)
        .json({ message: "Já existe um usuário cadastrado com esse email" });
      return;
    }
    adm.email = email;

    if (!phone) {
      res.status(400).json({ message: "O telefone é obrigatório!" });
      return;
    }
    adm.phone = phone;

    if (!password || !confirmpassword) {
      res
        .status(400)
        .json({ message: "A senha e confirmação de senha são obrigatórias" });
      return;
    }
    if (password !== confirmpassword) {
      res.status(400).json({ message: "As senhas não são iguais" });
      return;
    } else if (password === confirmpassword && password !== null) {
      const salt = bcrypt.genSaltSync(10);
      const senhaHash = bcrypt.hashSync(password, salt);

      adm.password = senhaHash;
    }
    try {
      // Fazer a atualização do usuáro
      console.log(adm);

      await Adm.findByIdAndUpdate(
        { _id: adm._id },
        { $set: adm },
        { new: true }
      );
      res.status(200).json({ message: "Usuário atualizado com sucesso!" });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
}
export default new UserController();
