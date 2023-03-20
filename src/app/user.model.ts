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
  id?: number;  
  titre_rapport?: string;  
  texte_rapport?: string;
  rapport_date?: Date;
}
