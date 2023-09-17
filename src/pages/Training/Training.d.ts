export interface Exercise {
  id: number;
  name: string;
  restTime: number;
  weight: number;
  weightUnit?: string;
  series: number;
  reps: number;
}
export interface Workout {
  id: number;
  name: string;
  exercises: Exercise[];
}
