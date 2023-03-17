export class User {
  user_id?: number;  
  firstname?: string;  
  lastname?: string;
  username?: string;
  contact?:string
  email?: string;  
  passwod?: string; 
  confirmpassword?: string;
}


export class Rapport {
  rapport_id?: number;  
  titre_rapport?: string;  
  text_rapport?: string;
  rapport_date?: Date;
}
