import css from '../../css/style.css'
import { useForm } from 'react-hook-form';
import React from 'react';

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="register-container">
      <body>
        <div className='corner-image'></div>
      </body>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="fullname">Nombre completo</label>
          <input type="text" id="fullname" {...register("fullname", { required: true })} />
          {errors.fullname && <span className="error-message">Este campo es requerido</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email", { required: true })} />
          {errors.email && <span className="error-message">Este campo es requerido</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" {...register("password", { required: true })} />
          {errors.password && <span className="error-message">Este campo es requerido</span>}
        </div>
        <div className="form-group">
          <label htmlFor="role">Rol</label>
          <select id="role" {...register("role", { required: true })}>
            <option value="">Seleccionar rol</option>
            <option value="doctor">Doctor</option>
            <option value="paciente">Paciente</option>
          </select>
          {errors.role && <span className="error-message">Seleccione un rol</span>}
        </div>
        <div className="form-group terms-and-conditions">
          <input type="checkbox" id="terms" {...register("terms", { required: true })} />
          <label htmlFor="terms">Aceptar los términos y condiciones</label>
          {errors.terms && <span className="error-message">Debe aceptar los términos y condiciones</span>}
        </div>
        <div className='container'><button type="submit">Registrar</button></div>
      </form>
    </div>
  );
}

export default Register;