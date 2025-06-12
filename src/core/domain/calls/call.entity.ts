export class Call {
  id: string;
  agent: string;
  client: string;
  duration: string;
  time: string;
  creationDate: string;
  status: string;

  constructor(
    id: string,
    agent: string,
    client: string,
    duration: string,
    time: string,
    creationDate: string,
    status: string,
  ) {
    this.id = id;
    this.agent = agent;
    this.client = client;
    this.duration = duration;
    this.time = time;
    this.creationDate = creationDate;
    this.status = status;
  }
}
