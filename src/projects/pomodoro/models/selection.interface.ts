export default interface Selection {
  pomodoro: {
    time: number;
    type: string;
    selected: boolean;
  };
  shortBreak: {
    time: number;
    type: string;
    selected: boolean;
  };
  longBreak: {
    time: number;
    type: string;
    selected: boolean;
  };
}
