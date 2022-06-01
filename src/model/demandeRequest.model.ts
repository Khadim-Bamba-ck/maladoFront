export interface IDemandeRequest{
  action?:string;
  nom_application?:string;
  userId?:string;
  //id?:number;
  message?:string;
  status?:string;
  password?:string;
  date_demande?:Date;
  date_retour?:Date;
  
}

export class DemandeRequest implements IDemandeRequest {
 constructor(
    public nom_application?:string,
    public action?:string,
    public userId?:string,

    public password?:string,
    public date_demande?:Date,
    public date_retour?:Date,
    public message?:string,
    public status?:string

 ){}
}