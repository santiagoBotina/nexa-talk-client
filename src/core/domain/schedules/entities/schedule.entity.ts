export class Schedule {
  constructor(
        public readonly id: number,
        public readonly studentID: number,
        public readonly asignature: string,
        public readonly teacher: string,
        public readonly weekDay: string,
        public readonly startHour: string,
        public readonly endHour: string,
        public readonly semester: string,
  ) {
  }
}
