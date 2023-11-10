const data = {
  tasks: {
    one: {
      task: "Learning Javascript",
      state: true,
      end: "2020/10/21",
    },
    two: {
      task: "Reader Book Clean Code",
      state: false,
      end: "2023/12/31",
    },
    three: {
      task: "Running",
      state: false,
      end: "2023/06/25",
    },
    four: {
      task: "Pass the Evaluation",
      state: false,
      end: "2023/11/09",
    },
    five: {
      task: "Go to Karaoke",
      state: true,
      end: "2022/08/25",
    },
    six: {
      task: "Finish watching the serie",
      state: false,
      end: "2023/12/31",
    },
    seven: {
      task: "Controll Weight",
      state: false,
      end: "2020/11/22",
    }
  },
};

var array = Object.values(data.tasks);
var fechaActual = new Date();
    const fecha = `${fechaActual.getFullYear()}/${
      fechaActual.getMonth() + 1
    }/${fechaActual.getDate()}`;

document.getElementById("tipoFilter").addEventListener("change", () => {
  const select = document.getElementById("tipoFilter");
  const code = select.value;
  const filtrado = document.getElementById("resultFilter");
  filtrado.length = 0;
  /**Actividades cumplidas (sin importar vigencia) */
  if (code == 0) {
    array
      .filter((element) => element.state == true)
      .forEach((task) => {
        filtrado.append(new Option(task.task, task.task));
      });
  } else if (code == 1) {
    /**Actividades no cumplidas vigentes */
    array
      .filter((element) => element.end > fecha && element.state == false)
      .forEach((task) => {
        filtrado.append(new Option(task.task, task.task));
      });
  } else if (code == 2) {
    /**Actividades cumplidas no vigentes */
    array
      .filter((element) => element.end < fecha && element.state == true)
      .forEach((task) => {
        filtrado.append(new Option(task.task, task.task));
      });
  }else if (code == 3){
    /**Todas*/
    array
      .forEach((task) => {
        filtrado.append(new Option(task.task, task.task));
      });
  }
});
document.getElementById("agregar").addEventListener("click", () => {
    const task = document.getElementById("task").value;
    const state = document.getElementById("state").value;
    const end = document.getElementById("end").value;
    const newTask = {
      task: task,
      state: state,
      end: end,
    };
    const key = `${Object.keys(data.tasks).length + 1}`;
    data.tasks[key] = newTask;
    array = Object.values(data.tasks);
  });

document.getElementById("resultFilter").addEventListener("change",()=>{
    const elementSelected = document.getElementById("resultFilter")
    const busca = array.find((element)=>element.task==elementSelected.value)
    const fielsTask = document.getElementById("taskField")
    fielsTask.append(busca.task)
    console.log(busca);
})