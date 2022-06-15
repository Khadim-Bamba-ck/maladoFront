import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AlertController, LoadingController } from '@ionic/angular';
import { DemandeRequest } from 'src/model/demandeRequest.model';
import { AuthService } from 'src/app/services/auth.service';
import { config } from "../../config/config";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.page.html',
  styleUrls: ['./dashboard2.page.scss'],
})
export class Dashboard2Page implements OnInit {
  isAlertDanger=false;
  isAlertSuccess=false;
  alertMsg="";
  userId= localStorage.getItem('loginAd');
  date_demande= new Date();
  date_retour=new Date();
  public menustatus: boolean;
  
  constructor(private router: Router,
    private authservice : AuthService,
    private menu: MenuController, 
    private alertCtrl : AlertController
    ) { }
  ngOnInit() {

    setInterval( () =>{
      if((this.isAlertDanger==true )||(this.isAlertSuccess==true)){
        this.isAlertDanger=false;
        this.isAlertSuccess=false;
      }
    },10000);
  }

  openCustom() {
    this.menu.enable(true, 'main-menu');
    this.menu.open('main-menu');
  }
  closeCupstom(){
    this.menu.close('main-menu');
  }

  settings
  windowsPage(){
    this.router.navigate(['windows'])
  }
  setting(){
    this.router.navigate(['settings'])
  }
  nessicoPage(){
    this.router.navigate(['nessico'])
  }
  assistance(){
    this.router.navigate(['assistance'])
  }
  historique(){
    this.router.navigate(['historique'])
  }

  oraclePage(){
    this.router.navigate(['oracle'])
  }

  gaiaPage(){
    this.router.navigate(['gaia'])
  }
  
  Comptewindows(){
    this.router.navigate(['comptewindows'])
  }
  profilePage()
  {
	  this.router.navigate(['profile'])
  }
  notificationsPage()
  {
  this.router.navigate(['notifications'])
  }

  simplissimoPage()
  {
	  this.router.navigate(['simplissimo'])
  }

  AuthentificationPage(){
    this.router.navigate(['connexion'])
  }

async presentPrompt(action:string,nom_application:string,messageAlert:string,status:string,message:string) {
 await this.alertCtrl.create({

    header:"Compte "+nom_application,
    //cssClass:"rgb(247,247,247)",
    cssClass: 'alertDanger',
    subHeader:"",
    message:"<small>"+messageAlert+"</small>",
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
  
          this.authservice.demande(new DemandeRequest(nom_application, action ,localStorage.getItem("loginAd"),data.password,this.date_demande,this.date_retour,message,status)).subscribe( 
            (data: string) =>{
              console.log(data)
              //this.alertMsg="Votre demande a ete bien enregistrer merci"
              //this.showSuccessAlert();
              Toast.fire({
                icon: 'success',
                title: 'Votre demande a été bien prise en compte merci!'
              })
              //this.isAlertSuccess = true;
              
              
            },
            (error) =>{

              console.log(error)
              //console.log(config.Authorization);
                //this.alertMsg="verifier votre connexion"
                this.showErrorsAlert();
                //this.isAlertDanger = true;
            }
          )
        }
      }
    ]
  }).then(data => data.present());
}
showSuccessAlert() {
  Swal.fire('Success!', 'Votre demande a été bien enregistré', 'success')
}
showErrorsAlert() {
  Swal.fire('Error!', 'Votre demande a échoué !', 'error')
}



}
const Toast = Swal.mixin({
  toast: true,
  //position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

