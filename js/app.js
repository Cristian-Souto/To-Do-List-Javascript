let idCount = 0;
const input = document.querySelector('input[type="text"]'); 

userInput.addEventListener('submit', (e) => {
  e.preventDefault();
  addTask();
})
//funcion que nos permite agregar nuevas tareas
let addTask = () => {
  //variabla que incrementa el valor del id tarea y newValue almacena el valor ingresado en el text input
  idCount++;
  let newValue = input.value;

  lista.innerHTML +=`
      <div class="task-container" id="${idCount}">
        <label>
          <input type="checkbox" />
          ${newValue}
        </label>
        <img src="./images/trash.png" class="closeBtn" />
      </div> `
      //cada vez que agregamos una tarea borramos el text del input
      input.value='';
      //invocamos una funcion para actulizar los stats 
     updateStats()
};

lista.addEventListener('click', (e)=>{
  /*  console.log(e.srcElement.nodeName)  */
  if(e.srcElement.nodeName == 'INPUT'){
    //actualizamos las tareas completadas si estas estan selecciondas
    updateStats();
    //de esta forma obtenemos el Id de la tarea y seleccionando la img podemos eliminarla con una funcion
  }else if(e.srcElement.nodeName == 'IMG'){ 
    deleteTask(e.srcElement.parentNode.id);
  }
})


//funcion para mantener las estadisticas actualizadas
let updateStats = ()=>{
  let elements = document.querySelectorAll('div');
  let chkbox = document.querySelectorAll('input[type="checkbox"]:checked');
  stats.innerHTML = `<p>Tareas pendientes: ${elements.length-2} Completadas: ${chkbox.length}</p>`;
};

//funcion para eliminar tareas

let deleteTask = (id)=>{
  let deleteToTask = document.getElementById(id);
  lista.removeChild(deleteToTask);
  updateStats();
}