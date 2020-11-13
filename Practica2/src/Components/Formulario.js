import '../App.css';
import { Button ,} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Formulario = (props) => {
    return ( 
        <div className="Form">
        <form onSubmit={props.enviar}>
        <div>
          <label htmlFor="id">Id</label>
          <input
            type="text"
            placeholder="Ejm. 18211154"
            onChange={props.guardarCambios}
            value={props.ropa.id}
            name="id"
            disabled={props.desactivado}
          />
        </div>
        <div>
          <label htmlFor="genero">Genero</label>
          <select name="genero" value={props.ropa.genero} onChange={props.guardarCambios}>
            <option value="selecciona">selecciona</option>
            <option value="Hombre">Hombre</option>
            <option value="Mujer">Mujer</option>
          </select>
        </div>
        <div>
          <label htmlFor="temporada">Temporada</label>
          <select name="temporada" value={props.ropa.temporada} onChange={props.guardarCambios}>
            <option value="selecciona">selecciona</option>
            <option value="Primavera">Primavera</option>
            <option value="Verano">Verano</option>
            <option value="Otonoño">Otoño</option>
            <option value="Invierno">Invierno</option>
          </select>
        </div>
        <div>
          <label htmlFor="talla">Talla</label>
          <select name="talla" value={props.ropa.talla} onChange={props.guardarCambios}>
            <option value="selecciona">selecciona</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>
        </div>
        <div>
          <label htmlFor="descripcion">Descripcion</label>
          <input
            type="text"
            placeholder="Ej. Blusa Morada"
            onChange={props.guardarCambios}
            value={props.ropa.descripcion}
            name="descripcion"
          />
        </div>
        <button><Button>Enviar</Button></button>
        </form>
      </div>
    );
}
 
export default Formulario;