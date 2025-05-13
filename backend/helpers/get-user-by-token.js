import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
import Adm from "../models/UserModel.js";

configDotenv();
const mySecret = process.env.JWT_SECRET;
const getUserByToken = async (token) => {
  if (!token) {
    res.status(401).json({ message: "Acesso Negado" });
  }

  //   verificar token
  const decode = jwt.verify(token, mySecret);
  const userId = decode.id;

  const adm = await Adm.findById({ _id: userId });
  return adm;
};

export default getUserByToken;
