import { Injectable } from "@angular/core";
import { ConfirmationToken } from "../../model/confirmationToken.model";
import { MaladoRequest } from "../../model/maladoRequest.model";
import { DemandeRequest } from "../../model/demandeRequest.model";
import { environnement } from "../shared/environnement";
import { config } from "../config/config";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { analyzeAndValidateNgModules } from "@angular/compiler";
//import { CookieService } from 'ngx-cookie-service';
@Injectable({
    providedIn: 'root'
 })
export class AuthService {

    constructor(private http: HttpClient){


     }

    public url: string= "api/";

    // retrieveToken(code) {
    //     let params = new URLSearchParams();   
    //     params.append('grant_type','password');
    //     params.append('client_id', this.clientId);
    //     params.append('client_secret', 'web_app');
    //     //params.append("username", username);
    //    // params.append('redirect_uri', this.redirectUri);
    //     params.append('code',code);
    
    //     let headers = new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'});
           
    //       this.http.post('http://keycloak:9080/auth/realms/jhipster/protocol/openid-connect/token', 
    //         params.toString(), { headers: headers })
    //         .subscribe(
    //           data => this.saveToken(data),
    //           err => alert('Invalid Credentials')); 
    // }
    // saveToken(token) {
    //     //stocker la date d'expiration
    //     var expireDate = new Date().getTime() + (1000 * token.expires_in);
    //     //this.cookieService.set("access_token", token.access_token, expireDate);
    //     //ajouter la valeur accestoken
    //    // this.cookieService.set("access_token", token.access_token, expireDate);
    //    localStorage.setItem('access_token', token.access_token);
    //    localStorage.setItem('expireDate',expireDate.toString());
    //    //Cookie.set("access_token", token.access_token, expireDate);
        
    //     console.log('Obtained Access token');
    //     window.location.href = 'http://localhost:8081';
    // }
 
    loginad(data:MaladoRequest){
       return this.http.post(environnement.localurla + this.url + 'mobile/client-info', data, {headers:config.jsonHeader, responseType: 'text'});
    }

    maladoconnexion(data:MaladoRequest){
       
        return this.http.post(environnement.localurla + this.url + 'mobile/client-info', data, {headers:config.jsonHeader, responseType: 'text'});
     }

     demande(data:DemandeRequest){

        console.log(data.nom_application);
        var headers = new HttpHeaders({
            'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 
            'Authorization': 'Bearer'+localStorage.getItem("token")});
        if (data.nom_application.toLowerCase() =='oracle')
            return this.http.post(environnement.localurla+ 'services/smoapp/api/demandes', data, {headers:config.jsonHeader, responseType: 'text'});
        if (data.nom_application =='nessico')
            return this.http.post(environnement.localurla+'services/nessico/api/nessicos', data, {headers:config.jsonHeader, responseType: 'text'});
        if (data.nom_application.toLowerCase() =='simplissimo')
        return this.http.post(environnement.localurla+ this.url + 'services/simplissimo/api/simplissimos', data, {headers:config.jsonHeader, responseType: 'text'});
        if (data.nom_application.toLowerCase() =='gaia')
        return this.http.post(environnement.localurla+ this.url + 'services/gaia/api/gaias', data, {headers:config.jsonHeader, responseType: 'text'});
     }

     listeDemande(data:DemandeRequest){
        return this.http.post(environnement.localurla + this.url + 'listeDemande', data, {headers:config.jsonHeader, responseType: 'text'});
     }
    //  deletedemande
    deleteDemande(data:DemandeRequest){
        return this.http.post(environnement.localurla + this.url + 'deletedemande', data, {headers:config.jsonHeader, responseType: 'text'});
     }
    // isEnabled(data:MaladoRequest) : any{
    //     return this.http.post(environnement.localurla + this.url +'enable', data, {headers:config.jsonHeader, responseType: 'text'});
    // }
    // dataUser(data:MaladoRequest) : any{
    //     return this.http.post(environnement.localurla + this.url +'maladoUser', data, {headers:config.jsonHeader, responseType: 'text'});
    // }
    passwordVerification(data:MaladoRequest) : any{
        return this.http.post(environnement.localurla + this.url +'passwordVerification', data, {headers:config.jsonHeader, responseType: 'text'});
    }
    confirmpassword(data:MaladoRequest){
        return this.http.post(environnement.localurla + this.url +'confirmpassword', data, {headers:config.jsonHeader, responseType: 'text'});
    }
    
    connexion(dataRequest:MaladoRequest)
    {
        console.log(dataRequest);
           
        return this.http.post(environnement.localurla + 'api/' +'authenticate-mobile', dataRequest, {headers:config.jsonHeader, responseType: 'text',observe: 'response'});

    }
    tokenValidation(data:MaladoRequest){
        return this.http.post(environnement.localurla + this.url + 'token', data, {headers:config.jsonHeader, responseType: 'text'});

    } 
    forgotpassword(data:MaladoRequest){
        return this.http.post(environnement.localurla + this.url + 'forgotpassword', data, {headers:config.jsonHeader, responseType: 'text'});

    } 
    isEnabled(data:MaladoRequest) : any{
        return this.http.post(environnement.localurla + this.url +'enable', data, {headers:config.jsonHeader, responseType: 'text',observe: 'response'});
    }

}


