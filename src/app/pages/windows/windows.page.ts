import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { DemandeRequest } from 'src/model/demandeRequest.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-windows',
  templateUrl: './windows.page.html',
  styleUrls: ['./windows.page.scss'],
})
export class WindowsPage implements OnInit {
  isAlertDanger=false;
  isAlertSuccess=false;
  alertMsg="";
  loginad= localStorage.getItem('loginAd');
  constructor(private router: Router,
    private authservice : AuthService,
    private alertCtrl : AlertController
    ) { }

  ngOnInit() {
    
  }
  dashboardPage()
  {
	   this.router.navigate(['dashboard2'])
  }
  profilePage()
  {
	  this.router.navigate(['profile'])
  }
  notificationsPage()
  {
  this.router.navigate(['notifications'])
  }

  async presentPrompt(action:string,application:string,int :number,message:string) {
    await this.alertCtrl.create({
       header:"Compte "+application,
       subHeader:"",
       message:"<small>"+message+"</small>",
       inputs: [
         {
           name: 'password',
           placeholder: 'mot de passe',
           type: 'text',
           
         }
       ],
       
       buttons: [
         {
           text: 'annuler',
           role: 'cancel',
           handler: data => {
             console.log('Cancel clicked');
           }
         },
         {
           text: 'soumettre',
           handler: data => {
     
             this.authservice.demande(new DemandeRequest(action, application, this.loginad,data.password)).subscribe( 
               (data: string) =>{
                 console.log(data)
                 this.alertMsg="Votre demande a ete bien enregistrer merci"
                 this.isAlertSuccess = true;
                 
               },
               (error) =>{
                   this.alertMsg="verifier votre connexion"
                   this.isAlertDanger = true;
               }
             )
           }
         }
       ]
     }).then(data => data.present());
   }


}
