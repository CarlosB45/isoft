import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {useForm} from 'react-hook-form'

import Loginpage from './Pages/home/Loginpage'
import Register from './Pages/home/Register'
import Homeadministrador from './Pages/administrador/home'
import Homedoctor from './Pages/doctor/home'
import Homepaciente from './Pages/paciente/home'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<Loginpage/>} />
      <Route path='/Login' element ={<Loginpage/>} />
      <Route path='/Register' element ={<Register/>} />
      <Route path='/Homeadministrador' element ={<Homeadministrador/>} />
      <Route path='/Homedoctor' element ={<Homedoctor/>} />
      <Route path='/Homepaciente' element ={<Homepaciente/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
