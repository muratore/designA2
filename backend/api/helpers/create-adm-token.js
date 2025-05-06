import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
configDotenv();
const secret = process.env.JWT_SECRET;

const createAdmToken = async (newAdm, req, res) => {
  const token = jwt.sign({ name: newAdm.name, id: newAdm._id }, secret);
  //   console.log(token);

  res
    .status(200)
    .json({ message: "Você está logado", token, userId: newAdm._id });
};
export default createAdmToken;
