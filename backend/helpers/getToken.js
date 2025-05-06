const getToken = (req) => {
  const authToken = req.headers.authorization;

  let token = authToken.split(" ")[1];
  token = token.replace(/"/g, "")
 
  
  return token;
};
export default getToken;
