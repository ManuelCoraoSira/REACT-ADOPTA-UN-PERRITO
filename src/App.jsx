import './App.css';
import { Header, Card, Footer } from "./components";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <Header/>
    <br/> 
    <div className='cards'>
    <Card  
      name='Bartolo'
      url ='https://images.pexels.com/photos/8605665/pexels-photo-8605665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      description='LLeno de energía y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!'
      raza= 'Husky'
      /> 
      <Card  
      name='Messi'
      url='https://images.pexels.com/photos/14531531/pexels-photo-14531531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      description='Es juguetón, amigable y se lleva bien con los niños y otros animales. ¡Haz de Messi parte de tu familia ahora mismo!'
      raza= 'Bulldog'
      /> 
      <Card  
      name='Gohan'
      url='https://images.pexels.com/photos/9826777/pexels-photo-9826777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      description='Un perro tamaño mediano con un corazon gigante. Hazte amigo de Gohan y experimenta un amor incondicional!'
      raza= 'Bulldog Frances'
      /> 
      <Card  
      name='Princesa'
      url='https://images.pexels.com/photos/5430714/pexels-photo-5430714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      description='Es una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a Princesa a encontrar su final feliz!'
      raza= 'Bernes de la Montaña'
      /> 
    </div>
    <br/>
    <Footer/>
    </>
  );
}

export default App