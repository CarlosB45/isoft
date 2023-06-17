import mongoose from "mongoose";

const citaMedicaSchema = new mongoose.Schema(
  {
    cedulaPaciente: {
      type: Number,
    },
    date: {
      type: Date,
    },
    motivo: {
      type: String,
    },
    doctor: {
      type: String,
    },
    usuario:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("citaMedica", citaMedicaSchema);
