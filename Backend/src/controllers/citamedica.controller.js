import citaMedica from "../models/citamedica.model.js";

export const getCitasMedica = async (req, res) => {
  const citasmedica = await citaMedica.find({
    usuario: req.usuario.id
  }).populate('usuario')
  res.json(citasmedica);
};

export const getCitaMedica = async (req, res) => {
  const citamedica = await citaMedica.findById(req.params.id).populate('usuario');
  if (!citamedica)
    return res.Status(400).json({ message: "Cita medica no encontrada" });
  res.json(citamedica);
};

export const createCitaMedica = async (req, res) => {
  const { cedulaPaciente, date, motivo, doctor } = req.body;

  console.log(req.usuario)
  const newcitaMedica = new citaMedica({
    cedulaPaciente,
    date,
    motivo,
    doctor,
    usuario: req.usuario.id,
  });
  const savedcitaMedica = await newcitaMedica.save();
  res.json(savedcitaMedica);
};

export const deleteCitaMedica = async (req, res) => {
  const citamedica = await citaMedica.findByIdAndDelete(req.params.id);
  if (!citamedica)
    return res.status(404).json({ message: "Cita medica no encontrada" });
  res.sendStatus(204);
};

export const updateCitaMedica = async (req, res) => {
  const citamedica = await citaMedica.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  if (!citamedica)
    return res.sendStatus(404).json({ message: "Cita medica no encontrada" });
  res.json(citamedica);
};
