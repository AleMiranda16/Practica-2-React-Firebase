import '../App.css';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Listado = (props) => {
    return ( 
        <div className="List">
        {
                    
            props.lista.length===0   
            ? <p>No hay prendas registradas</p>
            : 
        
             <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Genero</th>
                <th>Temporada</th>
                <th>Talla</th>
                <th>Descripcion</th>
                <th></th>
                <th></th> 
              </tr>
            </thead>
              <tbody>
            {
              props.lista.map((a,index)=>
                <tr key={index}>
                    <td>{a.id}</td>
                    <td>{a.genero}</td>
                    <td>{a.temporada}</td>
                    <td>{a.talla}</td>
                    <td>{a.descripcion}</td>
                    <td><Button onClick={()=>props.eliminar(a.id)} variant="danger">Eliminar</Button></td>
                    <td><Button onClick={()=>props.modificar(a.id)}variant="success">Modificar</Button></td>
                </tr>
              )
            }
              </tbody>
            </Table>
          }

          </div>
     );
}
 
export default Listado;