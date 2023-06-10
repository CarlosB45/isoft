import Usuario from "../models/user.model.js";

export const register = async (req, res) => {
  const { email, password, usuario, tipo_usuario } = req.body;
  try {
    const newUsuario = new Usuario({
      usuario,
      email,
      password,
      tipo_usuario,
    });
    const usuarioSaved = await newUsuario.save();
    res.json(usuarioSaved);
  } catch (error) {
    console.log(error);
  }
};
export const login = (req, res) => res.send("login");
