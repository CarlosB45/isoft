import citaMedica from "../models/citamedica.model.js";
import Usuario from "../models/user.model.js";

export const nombrePacientes= async (req, res) => {
  const citasmedica = await citaMedica
    .find({
      doctor: req.usuario.id,
    })
    .populate({
      path: "paciente",
      select: "usuario",
    })
    .select("-_id")

  const pacientes = citasmedica.map(cita => cita.paciente);

  res.json(pacientes);
};

export const getCitasMedicaDoctor = async (req, res) => {
  const citasmedica = await citaMedica
    .find({
      doctor: req.usuario.id,
    })
    .populate({
      path: "paciente",
      select: "usuario",
    })
    .populate({
      path: "doctor",
      select: "usuario",
    });
    
  res.json(citasmedica);
};

export const getCitasMedicaPaciente = async (req, res) => {
  const citasmedica = await citaMedica
    .find({
      paciente: req.usuario.id,
    })
    .populate({
      path: "paciente",
      select: "usuario",
    })
    .populate({
      path: "doctor",
      select: "usuario",
    })
    .populate({
      path: "doctor",
      select: "usuario",
    });

  res.json(citasmedica);
};


export const getCitaMedica = async (req, res) => {
  const citamedica = await citaMedica
    .findById(req.params.id)
    .populate({
      path: "paciente",
      select: "usuario",
    })
    .populate({
      path: "doctor",
      select: "usuario",
    });
  if (!citamedica)
    return res.Status(400).json({ message: "Cita medica no encontrada" });
  res.json(citamedica);
};

export const createCitaMedica = async (req, res) => {
  const { date , motivo, nombreDoctor } = req.body;
  console.log(req.body);

  try {
    const doctor = await Usuario.findOne({ usuario: nombreDoctor });
    if (!doctor) {
      return res
        .status(404)
        .json({ message: "No se encontró al doctor especificado" });
    }
    const newcitaMedica = new citaMedica({
    date: date.toString(), // Convierte el objeto Date a una cadena de texto
    motivo,
    doctor: doctor.id,
    paciente: req.usuario.id,
    });
    const savedcitaMedica = await newcitaMedica.save();
    res.json(savedcitaMedica);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
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
