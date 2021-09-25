document.getElementById('formulario').addEventListener('submit',crear);

function crear(e){

e.preventDefault();

let Especialidad = document.getElementById('Especialidad').value;
let Medico = document.getElementById('Medico').value;
let consulta = document.getElementById('consulta').value;
let Descripcion = document.getElementById('Descripcion').value;

let cita = {
    Especialidad,
    Medico,
    consulta,
    Descripcion
}

if(localStorage.getItem('cita') === null){

let citas = [];
citas.push(cita)
localStorage.setItem('cita', JSON.stringify(cita))
} else{
    let cita = jSON.parse(localStorage.getItem('cita'))
    cita.push(cita)
    localStorage.setItem('cita', JSON.stringify(cita))
}
document.getElementById('formulario').reset();

}

function agendar(){
    let cita = JSON.parse(localStorage.getItem(cita));
    
    document.getElementById('tbody').innerHTML ="";

 for (let i = 0;1 < cita,length; i++){
     let Especialidad = cita [i].Especialidad;
     let medico = cita [i].medico;
     let consulta = cita [i].consulta;
     let Descripcion = cita [i].Descripcion;

     Document.getElementById('tbody').innerHTML += 
     `
     <tr> 
     <td>${Especialidad}</td>
     <td>${medico}</td>
     <td>${consulta}</td>
     <td>${Descripcion}</td>
     </tr>
     `
     
    }
}

agendar();





