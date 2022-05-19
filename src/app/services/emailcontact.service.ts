import { Injectable } from '@angular/core';
import {  Observable, throwError } from 'rxjs';
import { environment } from "../../environments/environment";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Emailcontact } from "../models/emailcontact";

/**
 * Servicio EmailcontactService
 */
@Injectable({
  providedIn: 'root'
})
export class EmailcontactService {
 
  /**
   * atriburo que hace referencia al e-mail de  contacto
   */
  nuevoemailContacto: Emailcontact;
  /**
   * atributo que hace referencia a la ruta asociada en la api rest
   */
  readonly URL_API = environment.pathRoot+"/emailcontact";
  
  /**
   * Método constructor para instanciar la clase del servicio y poder realizar las peticiones HTTP.
   * @param http tipo de comunicación o protocolo. Recibe por parámetro el cliente HttpClient
   */
  constructor(private http: HttpClient) {
    this.nuevoemailContacto=new Emailcontact();
   }
  
   /**
   * Objeto de la clase HttpHeaders para la configuración de las cabeceras.
   */
  headers = new HttpHeaders()
  .set('content-type', 'application/json; charset=utf-8')
  .set('Access-Control-Allow-Origin', '*')
  .set('Authorization', environment.token);


  /**
   * Método del servicio que envia los datos al e-mail de contacto por petición POST.
   * @param emailcontact clase de Emailcontact y contiene e-mail de contacto
   * @returns un observable para manejar la petición POST con las cabeceras para el envío y la url asociada en la api rest
   */
   postEmailContact(emailcontact: Emailcontact): Observable<any> {
    return this.http.post<Emailcontact>(
      this.URL_API,
      emailcontact,
      {headers: this.headers}
    )
  }



}

