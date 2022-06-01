
export interface IConfirmationToken{
     token?:string
     createdAt?:string
     expiresAt?:string
     
      
}



export class ConfirmationToken implements IConfirmationToken{
    constructor(
        public token?:string,
        public createdAt?:string,
        public expiresAt?:string,
    
          
    ){}
   
}