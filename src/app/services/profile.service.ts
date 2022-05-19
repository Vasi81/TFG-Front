import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Profile } from "../models/profile";
import { Subject } from "rxjs";
import { environment } from "../../environments/environment";
import {  Observable, throwError } from 'rxjs';

/**
 * Servicio ProfileService
 */
@Injectable({
  providedIn: "root",
})

export class ProfileService {
  /**
   * atributo que hace referencia al array de perfiles
   */
  profiles: Profile[] = [];
  /**
   * atributo que hace referencia al array de imagenes
   */
  private profiles$ = new Subject<Profile[]>();
  /**
   * atributo que hace referencia a la ruta asociada en la api rest
   */
  readonly URL_API = environment.pathRoot+"/profiles";
  
  /**
   *  Método constructor para instanciar la clase del servicio y poder realizar las peticiones HTTP.
   * @param http tipo de comunicación o protocolo. Recibe por parámetro el cliente HttpClient
   */
  constructor(private http: HttpClient) {}
  
  /**
   * Objeto de la clase HttpHeaders para la configuración de las cabeceras.
   */
  headers = new HttpHeaders()
  .set('content-type', 'application/json; charset=utf-8')
  .set('Access-Control-Allow-Origin', '*')
  .set('Authorization',environment.token);


  /**
   * Objeto de la clase HttpHeaders para la configuración del token.
   */
  headersMyToken = new HttpHeaders()
  .set('Authorization',"Barear "+sessionStorage.getItem("tokenSession"));

  /**
   *Método del servicio que crea la petición GET para obtener los perfiles según el id de la oficina pasado como parámetro.
   * @param oficinaId id de la oficina
   * @returns un observable para manejar la petición GET con las cabeceras y la url asociada en la api rest
   */
  getProfilesByOficinaId(oficinaId: string): Observable<Profile[]>{

    return this.http.get<Profile[]>(this.URL_API+ `/${oficinaId}` ,{headers: this.headers});
  }

  //Transacciones con el token almacenado.
  /**
   * Método del servicio que crea la petición GET para obtener los perfiles y realizar la transacción con el token almacenado.
   * @returns un observable para manejar la petición GET con la cabecera del token almacenado y la url asociada en la api rest.
   */
  getProfiles(): Observable<Profile[]>{
    return this.http.get<Profile[]>(this.URL_API,{headers: this.headersMyToken});
  }
  
/**
 * Método del servicio que envía los datos del perfil por petición DELETE para el borrado y realiza la transacción con el token almacenado.
 * @param _id id del perfil
 * @returns un observable para manejar la petición DELETE con la cabecera del token almacenado y la url asociada en la api rest
 */
  deleteProfiles(_id: string) : Observable<any>{
    return this.http.delete(this.URL_API + `/${_id}` , {headers: this.headersMyToken})
   
  }
  deleteProfilesByOficina(_id: string) : Observable<any>{
    return this.http.delete(this.URL_API +'/profilebyoficina' + `/${_id}` , {headers: this.headersMyToken})
   
  }
  /**
   * Método del servicio que envia los datos del perfil por petición POST y realiza la transacción con el token almacenado.
   * @param oficinaId id de la oficina
   * @param name el nombre de la oficina
   * @param principal el nombre de la imagen principal
   * @param image el archivo de la imagen
   */
  addProfile(oficinaId: string, name: string,principal: string, image: File): void {
    const profileData = new FormData();
    profileData.append("oficinaId", oficinaId);
    profileData.append("name", name);
    profileData.append("imagePrincipal", principal);
    profileData.append("image", image, name);

    alert(oficinaId);
    alert(name);

    this.http
      .post<{ profile: Profile }>(this.URL_API , profileData ,{headers: this.headersMyToken})
      .subscribe((profileData) => {
        const profile: Profile = {
          _id: profileData.profile._id,
          oficinaId: oficinaId,
          name: name,
          imagePrincipal: principal,
          imagePath: profileData.profile.imagePath,
          extPath: profileData.profile.extPath,

        };
        this.profiles.push(profile);
        this.profiles$.next(this.profiles);
      });
  }
}
