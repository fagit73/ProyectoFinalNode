import jwt from "jsonwebtoken";

const default_user = {
  id: 1,
  email: "proyectonode@gmail.com",
  password: "1978faus",
};

export const login = (req, res) => {
  const { email, password } = req.body;
  if (email === default_user.email && password === default_user.password) {
    const token = jwt.sign({ id: default_user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } else {
    res.status(401).json({ error: "Credenciales inválidas" });
  }
};





