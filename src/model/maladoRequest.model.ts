export interface IMaladoRequest{
    firstName?:string;
    lastName?:string;
    email?:string;
    password?:string;
    loginad?:string;

}

export class MaladoRequest implements IMaladoRequest {
   constructor(
      public firstName?:string,
      public lastName?:string,
      public email?:string,
      public password?:string,
      public loginad?:string,
   ){}
}