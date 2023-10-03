export interface Exercise {
  id: number;
  name: string;
  restTime: number;
  weight?: string;
  weightUnit?: string;
  series: string;
  reps: string;
}
export interface Workout {
  id: number;
  name: string;
  exercises: Exercise[];
}
