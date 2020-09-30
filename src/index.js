import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import shadows from '@material-ui/core/styles/shadows';



function Encuesta() {
  const [estado, setEstado] = React.useState(0)
  const [checked, setChecked] = React.useState({check:false, name:null});
  const [next, setNext] = React.useState(null)
  const [data, setData] = React.useState(null);
  const [pregunta, setPregunta] = React.useState({value:null,ind:-1,start:null})
  const [respuestas, setRespuestas] = React.useState({encuesta:null,nombre:'',value:[]})
  const handleChange = (event) => {
    setChecked({check:event.target.checked, name:event.target.name});
  };
  const handleChangeNext = async () => {
    console.log('Id pregunta: '+pregunta.ind)
    console.log('Numero preguntas: '+data.preguntas.length)
    console.log(checked)
    if (estado > 0 && checked.name !== null && pregunta.ind < data.preguntas.length){
      const tempRespuestas = respuestas.value
      tempRespuestas.push({
        pregunta:pregunta.value.pregunta,
        respuesta:checked.name,
        tiempo: (new Date().getTime() - pregunta.start)/1000
      })
      setRespuestas({encuesta:respuestas.encuesta,nombre:respuestas.nombre,value:tempRespuestas})
    }
    
    if (estado > 0 && checked.name !== null && pregunta.ind + 1 < data.preguntas.length){
      setPregunta({value:data.preguntas[pregunta.ind+1],ind:pregunta.ind+1,start:new Date().getTime()})
      setChecked({check:false, name:null})
      console.log('cambiar pregunta')
    }
    else if (pregunta.ind + 1 === data.preguntas.length) {
      setPregunta({value:{pregunta:'Has finalizado, ahora solo queda enviarlo '},
      ind:pregunta.ind+1,start:new Date().getTime()})
      
    }
    else if (estado === 0){
      setEstado(1)
    }
    else {
      try {
        const post = await fetch("https://encuestapsicologia.herokuapp.com/save/send",{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(respuestas)
        
      })
      setEstado(2)
      setPregunta({value:{pregunta:'Encuesta guardada'}})
      } catch (error) {
        
      }
      
    
    
      
    }
    
    setNext(!next)
    
  }

  const handleChangeText = (event) => {
    setRespuestas({nombre:event.target.value,encuesta:respuestas.encuesta,value:[]})
  }

  function fetchData() {
    
    if (data==null){
      console.log('fethc')
    fetch("https://encuestapsicologia.herokuapp.com/encuesta/1"
    )
    .then(response =>response.json())
    .then(data =>{
      console.log(data)
      setRespuestas({encuesta:data.nombre,value:[],nombre:''})
      setPregunta({value:data.preguntas[0],ind:0,start:new Date().getTime()})
      setData(data)})
    .catch(err => console.log(err));
  }
  
}
  React.useEffect(() => { 
    fetchData();
    console.log(pregunta)
  },[next]);
  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
      <Card>
        <CardContent>
          {estado === 0 && 
          <div className="form-group">
          <label htmlFor="exampleInputEmail1">Digite el nombre</label>
          <input type="text" className="form-control" id="nombreText" placeholder="Nombre"  
          onChange={handleChangeText}
          />
          </div>
          }
          <blockquote className='blockquote text-center' style={{fontSize:'30px'}}>
          {estado > 0 && pregunta.value != null && pregunta.value.pregunta}
          </blockquote>
          
        </CardContent>
              <CardContent style={{display:'flex'}}>
        <div className='container'>
        <div className='row'>
          {estado > 0 &&
          pregunta.value != null && 
          pregunta.value.opciones != null && 
          pregunta.value.opciones.map((element,index) => {
            return(
              <div key={index} className='col text-center border border-primary rounded' 
              style={{fontSize:'25px', margin:'9px'}}>
              {element}
            </div>
            )
          })}
        </div>
        <div className='row'>
        {estado > 0 &&
        pregunta.value != null && 
        pregunta.value.respuestas != null && 
        pregunta.value.respuestas.map((element,index) => {
          const check = (element.respuesta === checked.name)
          const color = check ? 'green':'blue'
          return(<div key={index} className="col text-center  w-100" style={{paddingTop:'9px'}}>
            <button type="button" className='btn'
            style={{backgroundColor:color, fontSize:'25px' ,height:'100%',
            width:'50%'}}
            name={element.respuesta}
            checked={check}
            onClick={handleChange}
            className="btn btn-primary" 
            data-toggle="button" 
            aria-pressed="false" 
            autoComplete="off">
              {element.respuesta}
              </button>
            </div>)
        })}
        
      </div>
      <div className='w-100 p-3  text-center'>
      <button type="button" className="btn btn-primary w-100" name='siguiente'
      disabled={estado == 2 || respuestas.nombre.slice().length == 0}
      style={{fontSize:'25px' }} 
      onClick={handleChangeNext}
      >
        Siguiente
      </button>
      </div>
      </div>
        </CardContent>
      </Card>
        
    </div>
  )  
}
ReactDOM.render(
  <Encuesta/>,
  document.getElementById('root')
);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
