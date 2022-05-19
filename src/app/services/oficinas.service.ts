import { Injectable } from '@angular/core';
import {  Observable, throwError } from 'rxjs';
import { environment } from "../../environments/environment";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Oficinas } from "../models/oficinas";

/**
 * Servicio OficinaService
 */
@Injectable({
  providedIn: 'root'
})
export class OficinasService {

  /**
   *  atributo que hace referencia a la oficina seleccionada
   */
  selectedOficinas: Oficinas;

  /**
   * atributo que hace referencia a las oficinas
   */
  oficinas: Oficinas[]=[];

  /**
   * atributo que hace referencia a las oficinas destacadas de modalidad alquiler
   */
  oficinasDestacadasAlquiler: Oficinas[]=[];
  /**
   * atributo que hace referencia a las oficinas destacadas de modalidad coworking
   */
  oficinasDestacadasCoworking: Oficinas[]=[];
  /**
   * atributo que hace referencia a nueva oficina
   */
  nuevoOficina: Oficinas ;
  
  /**
   * @ignore
   */
  strSession: String='';
  /**
   * atributo que hace referencia a la ruta asociada en la api rest
   */
  readonly URL_API = environment.pathRoot+"/oficinas";
  
  /**
   * Método constructor para instanciar la clase del servicio y poder realizar las peticiones HTTP.
   * @param http tipo de comunicación o protocolo. Recibe por parámetro el cliente HttpClient
   */
  constructor(private http: HttpClient) {
    this.selectedOficinas = new Oficinas();
    this.nuevoOficina=new Oficinas();
  }
  
  /**
   * Objeto de la clase HttpHeaders para la configuración de las cabeceras.
   */
  headers = new HttpHeaders()
  .set('content-type', 'application/json; charset=utf-8')
  .set('Access-Control-Allow-Origin', '*')
  .set('Authorization', environment.token);
  
  /**
   * Objeto de la clase HttpHeaders
   */
  headersMyToken = new HttpHeaders()
  .set('content-type', 'application/json; charset=utf-8')
  .set('Access-Control-Allow-Origin', '*')
  .set('Authorization',"Barear "+sessionStorage.getItem("tokenSession"));
  
  /**
   * Método del servicio que crea la petición GET para obtener las oficinas destacadas.
   * @param modality modalidad de la oficina 
   * @returns un observable para manejar la petición GET con las cabeceras y la url asociada en la api rest
   */
  getOficinasDestacadas(modality: String): Observable<Oficinas[]> {
    return this.http.get<Oficinas[]>(this.URL_API  + '/destacadas' + `/${modality}`,{headers: this.headers});
  }
  
  /**
   * Método del servicio que crea la petición GET para obtener las oficinas cuya modalidad (alquiler o coworking) se ha pasado por parámetro.
   * @param modality modalidad de la oficina
   * @returns un observable para manejar la petición GET con las cabeceras, la modalidad y la url asociada en la api rest
   */
  getOficinaByModality(modality: String): Observable<Oficinas[]>{ 
    return this.http.get<Oficinas[]>(this.URL_API+'/modality' + `/${modality}` ,{headers: this.headers});
  }
  
  /**
   *Método del servicio que envia los datos de la oficina por petición POST
   * @param oficinas oficinas
   * @returns un observable para manejar la petición POST con las cabeceras y la url asociada en la api rest
   */
  postOficinasByoptions(oficinas: Oficinas): Observable<Oficinas[]>{ 
    return this.http.post<Oficinas[]>(this.URL_API+'/opciones',oficinas,{headers: this.headers});
  }
  
  /**
   * Método del servicio que crea la petición GET para obtener la oficina cuyo id se ha pasado como parámetro.
   * @param _id id de la oficina
   * @returns un observable para manejar la petición GET con las cabeceras y la url asociada en la api rest
   */
  getOficinaByid(_id: String): Observable<Oficinas>{ 
    return this.http.get<Oficinas>(this.URL_API + `/${_id}` ,{headers: this.headers});
  }

  //Transacciones con el token almacenado.
  /**
   * Método del servicio que crea la petición GET para obtener las oficinas y realizar la transacción con el token almacenado.
   * @returns un observable para manejar la petición GET con la cabecera del token almacenado y la url asociada en la api rest.
   */
  getOficinas(): Observable<Oficinas[]> {
    return this.http.get<Oficinas[]>(this.URL_API,{headers: this.headersMyToken});
  }
  
  /**
   * Método del servicio que envia los datos de la oficina por petición PUT para la modificación y realiza la transacción con el token almacenado.
   * @param oficinas oficinas
   * @returns un observable para manejar la petición PUT con la cabecera del token almacenado y la url asociada en la api rest
   */
  putOficina(oficinas: Oficinas): Observable<any> {
    return this.http.put(this.URL_API + `/${oficinas.id}`, oficinas , {headers: this.headersMyToken})
   
  }
  
  /**
   * Método del servicio que envia los datos de la oficina por petición POST para el alta y realiza la transacción con el token almacenado.
   * @param oficinas oficinas
   * @returns un observable para manejar la petición POST con la cabecera del token almacenado y la url asociada en la api rest
   */
  postOficina(oficinas: Oficinas): Observable<any> {
    return this.http.post<Oficinas>(
      this.URL_API,
      oficinas,
      {headers: this.headersMyToken}
    )
  }

  /**
   * Método del servicio que envía los datos de la oficina por petición DELETE para el borrado y realiza la transacción con el token almacenado.
   * @param _id id de la oficina
   * @returns un observable para manejar la petición DELETE con la cabecera del token almacenado y la url asociada en la api rest
   */
  deleteOficina(_id: string) : Observable<any>{
    return this.http.delete(this.URL_API + `/${_id}` , {headers: this.headersMyToken})
   
  }
}
