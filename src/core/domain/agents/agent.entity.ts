export class Agent {
  constructor(
    public id: number,
    public legal_id: string,
    public name: string,
    public email: string,
    public password: string,
    public phone: string,
    public address: string,
    public is_active: boolean,
    public created_at: number,
    public updated_at: string,
  ) {}
}
