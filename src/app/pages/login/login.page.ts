import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { MaladoRequest } from 'src/model/maladoRequest.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginField:string
  passwordField = ''
  loginAd= localStorage.getItem('loginAd');
  correctPassword = true;



  constructor(private router : Router,
    private authservice : AuthService,
    private alerteCtrl : AlertController,
    private loadingCtrl : LoadingController) { }
  registerPage()
  {
  this.router.navigate(['register'])
  }
  forgotpasswordPage()
  {
  this.router.navigate(['forgotpassword'])
  }
  dashboardPage()
  {
  this.router.navigate(['dashboard'])
  }
  ngOnInit() {
/*     this.connexion(correctPassword => {
        if (this.correctPassword) {
          alert("xixixixixiixi")
          //le password match
          this.router.navigate(['dashboard'])
        }else{
          this.router.navigate(['login'])
          alert("revoir votre mot de passe")
          //this.show()
        }
    }) */
  }

 /*  connexion(cb){
        this.authservice.connexion(new MaladoRequest('', '', '', this.passwordField, this.loginAd)).subscribe( 
        //next en cas de success
        (data) =>{
          localStorage.setItem('loginAd', this.loginField)
          this.correctPassword = data === 'true' ? true : false;
           cb(this.correctPassword)
        }
      )
    } */


  connexion(){
    this.authservice.connexion(new MaladoRequest('', '', '', this.passwordField, this.loginAd)).subscribe( 
      //next en cas de success
      (data) =>{
        localStorage.setItem('loginAd', this.loginField)
        if (this.correctPassword) {
          this.router.navigate(['dashboard2'])
        }else
        this.router.navigate(['login'])
      }
    )
  }

}
