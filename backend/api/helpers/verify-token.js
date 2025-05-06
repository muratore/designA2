import getToken from "./getToken.js";
import jwt from "jsonwebtoken";

const mysecret = process.env.JWT_SECRET;
const verifyToken = (req, res, next) => {
  const auth = req.headers.authorization;
  console.log(`----- ${auth}  ----- `);

  if (!auth) {
    res.status(401).json({ message: "Acesso Negado!" });
    return;
  }

  // Pegar o token dos headers
  const token = getToken(req);
  console.log("GetToken do Backend");
  console.log(token);
  
  if (!token) {
    res.status(401).json({ message: "Acesso Negado!" });
    return;
  }
  // Verificar se o token é válido com o método jwt.verify()
  try {
    const verified = jwt.verify(token, mysecret);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ message: "Esse token não é válido" });
  }
};
export default verifyToken;
