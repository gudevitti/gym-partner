import { Workout } from "../../pages/Training/Training";

const treinoA: Workout = {
  id: 1,
  name: "Treino A",
  exercises: [
    {
      id: 1,
      name: "Manguito rotador",
      restTime: 0,
      weight: "1",
      weightUnit: "placa",
      series: "3",
      reps: "10",
    },
    {
      id: 2,
      name: "Elevação Lateral",
      restTime: 45,
      weight: "5+7",
      weightUnit: "kg",
      series: "2+3",
      reps: "15+10",
    },
    {
      id: 3,
      name: "Elevação Frontal Pronada + Supinada",
      restTime: 60,
      weight: "6",
      weightUnit: "kg",
      series: "4",
      reps: "8+8",
    },
    {
      id: 4,
      name: "Elevação Lateral Máquina",
      restTime: 60,
      weight: "2+1",
      weightUnit: "placa",
      series: "4",
      reps: "8+RM",
    },
    {
      id: 5,
      name: "Posterior no cabo unilateral",
      restTime: 45,
      weight: "2+1",
      weightUnit: "placa",
      series: "4",
      reps: "8+RM",
    },
    {
      id: 6,
      name: "Rosca direta barra W",
      restTime: 45,
      weight: "9",
      weightUnit: "kg/lado",
      series: "4",
      reps: "10",
    },
    {
      id: 7,
      name: "Rosca inclinado + direta",
      restTime: 60,
      weight: "6",
      weightUnit: "kg",
      series: "3",
      reps: "12+12",
    },
    {
      id: 7,
      name: "Rosca scott unilateral",
      restTime: 45,
      weight: "1",
      weightUnit: "placa",
      series: "4",
      reps: "10",
    },
  ],
};

const workoutsMock: Workout[] = [treinoA];

export default workoutsMock;
