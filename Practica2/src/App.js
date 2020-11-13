import './App.css';
import React, { Component } from 'react';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import Listado from './Components/Listado';
import firebase from './Settings/ConfigFirebase.js'


class App extends Component {
  constructor() {
    super();
    this.state = {
      ropa:{
        id:"",
        genero:"",
        temporada:"",
        talla:"",
        descripcion:""
      },
      lista:[],
      desactivado:false,
    };
  }
  
  componentDidMount(){
    firebase.database().ref('Ropa').on('value', snapshot=> {
      let ropaLista=[];
      snapshot.forEach(row=>{
        ropaLista.push({
            id:row.key,
            genero:row.val().genero,
            temporada:row.val().temporada,
            talla:row.val().talla,
            descripcion:row.val().descripcion
          })
      })
      this.setState({
        ...this.state,
        lista:ropaLista
      })
    });
  }


  guardarCambios=(e)=>{
    this.setState({ 
      ...this.state,
      ropa:{
      ...this.state.ropa,  
      [e.target.name]: e.target.value
      } 
    });
  }
  
  eliminar=(id)=>{

    firebase.database().ref('Ropa/' + id).set(null).then(() => {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Eliminado',
        showConfirmButton: false,
        timer: 1500
      })
    });

    const temporal = this.state.lista.filter(a=>a.id!==id)
    this.setState({
      ...this.state,
      lista:temporal
    })
  }

  modificar=(id)=>{
    const temporal = this.state.lista.find(a=>a.id===id);
    this.setState({
      ...this.state,
      ropa:{
        id:temporal.id,
        genero:temporal.genero,
        temporada:temporal.temporada,
        talla:temporal.talla,
        descripcion:temporal.descripcion
      },
      desactivado:true
    })
  }
  enviar=(e)=>{
    e.preventDefault();

    const {id,genero, temporada, talla, descripcion} = this.state.ropa;
      
    const vacios = id.length===0 || descripcion.length===0 || genero==="selecciona" || temporada==="selecciona" || talla==="selecciona" 

    if(!vacios){

      firebase.database().ref('Ropa/' + id).update(this.state.ropa).then(() => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Prenda agregada',
          showConfirmButton: false,
          timer: 1500
        })
      });
      
      let temporal = this.state.lista;

      if(this.state.desactivado===true){
        temporal= temporal.filter(a=>a.id!==id)
      }

      this.setState({
        ...this.state,
        lista:[...temporal,this.state.ropa],
        ropa:{
          id:"",
          genero:"",
          temporada:"",
          talla:"",
          descripcion:""
        },
        desactivado:false
      })
    }
    else{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Llena todos los campos',
        showConfirmButton: false,
        timer: 1500
      })
      return;
    }
    
  }
  
  render() {
    
    return (
      <div className="App">
        <Header/>
        <div className="Containers">
          <Formulario
              enviar={this.enviar}
              guardarCambios={this.guardarCambios}
              ropa={this.state.ropa}
              desactivado={this.state.desactivado}
          />
          <Listado
            lista={this.state.lista}
            eliminar={this.eliminar}
            modificar={this.modificar}
          />
          
        </div>
      </div>
    )
  }
}

export default App;
