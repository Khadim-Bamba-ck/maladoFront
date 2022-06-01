import { Component, OnInit } from '@angular/core';
import { DemandeRequest } from 'src/model/demandeRequest.model';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-historique',
  templateUrl: './historique.page.html',
  styleUrls: ['./historique.page.scss'],
})
export class HistoriquePage implements OnInit {
  image = '';
  today: number = Date.now();
  loginad= localStorage.getItem('loginad');
  todoList:JSON;
  TestList:JSON;
  constructor(private authservice : AuthService,private router: Router) { }

  ngOnInit() {
    this.listeDemande();
    // setInterval( () =>{
    //   this.listeDemande();
    // },20000);
  }

  dashboardPage(){
    this.router.navigate(['dashboard2'])
  }

  // deleteDemande(id:number){

  //   this.authservice.deleteDemande(new DemandeRequest('', '', '','')).subscribe( 
  //     //next en cas de success
  //     (data: string) =>{
  //       //data = JSON.parse(data);
  //       //Aller a la page suivante 
  //       //this.todoList = JSON.parse(data)
  //       console.log(data)
  //       this.listeDemande();
  //     },
  //     (error) =>{
  //         console.log(error)
 
  //     }
  //   )

  // }

  listeDemande(){
  //   this.authservice.getDemande(new DemandeRequest('','','','','',this.loginad)).subscribe( 
  //   //next en cas de success
  //   (data) =>{
  //     // data = JSON.parse(data);
  //     //Aller a la page suivante 
  //     // this.todoList = JSON.parse(data);
  //     console.log(data.body)
  //     // console.log(data)

  //   },
  //   //  en cas error 
  //   (error) =>{
  //     // if(error.status==404){
  //       console.log(error)

  //   }
  // )
} 

}
