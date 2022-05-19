import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Employee } from "../models/employee";
import {  Observable, throwError } from 'rxjs';
import { environment } from "../../environments/environment";

/**
 * Servicio EmployeeService
 */
@Injectable({
  providedIn: "root",
})
export class EmployeeService  {
  /**
   * atributo que hace referencia al empleado
   */
  selectedEmployee: Employee;

  /**
   * atributo que hace referencia al array de empleados
   */
  employees: Employee[]=[];

  /**
   * atributo que hace referencia a nuevo empleado
   */
  nuevoEmp: Employee ;

  /**
   * atributo que hace referencia al token
   */
  token: String='';


  /**
   * atributo que hace referencia a la ruta asociada en la api rest
   */
  readonly URL_API = environment.pathRoot+"/comerciales";
  
  /**
   * Método constructor para instanciar la clase del servicio y poder realizar las peticiones HTTP.
   * @param http tipo de comunicación o protocolo. Recibe por parámetro el cliente HttpClient
   */
  constructor(private http: HttpClient) {
    this.selectedEmployee = new Employee();
    this.nuevoEmp=new Employee();
  }
  
  /**
   * Objeto de la clase HttpHeaders para la configuración de las cabeceras.
   */
    headers = new HttpHeaders()
    .set('content-type', 'application/json; charset=utf-8')
    .set('Access-Control-Allow-Origin', '*')
    .set('Authorization',"Barear "+sessionStorage.getItem("tokenSession"));
  
    /**
     * Método del servicio que envia los datos del empleado por petición POST para el alta.
     * @param employee empleado
     * @returns un observable para manejar la petición POST con las cabeceras para el alta del empleado y la url asociada en la api rest
     */
  postEmployee(employee: Employee): Observable<any> {
    return this.http.post<Employee>(
      this.URL_API,
      employee,
      {headers: this.headers}
    )

  }
  
  /**
   * Método del servicio que crea la petición GET para obtener los datos de los empleados.
   * @returns un observable para manejar la petición GET con las cabeceras para obtener los datos y la url asociada en la api rest
   */
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.URL_API,{headers: this.headers});
  }
  
  /**
   * Método del servicio que envia los datos del empleado por petición POST.
   * @param nombre nombre del empleado
   * @returns un observable para manejar la petición POST con las cabeceras y la url asociada en la api rest
   */
  postEmployeeByoptions(nombre: String): Observable<Employee[]>{ 
    return this.http.post<Employee[]>(this.URL_API+'/comercialByoptions',nombre,{headers: this.headers});
  }
  
  /**
   * Método del servicio que crea la petición GET para obtener los datos del empleado cuyo id se pasa como parámetro.
   * @param _id id del empleado
   * @returns un observable para manejar la petición GET con las cabeceras y la url asociada en la api rest
   */
  getEmployeeByid(_id: String): Observable<Employee>{ 
    return this.http.get<Employee>(this.URL_API + `/${_id}` ,{headers: this.headers});
  }
  
  /**
   * Método del servicio que envia los datos del empleado por petición PUT para realizar una modificación.
   * @param employee empleado
   * @returns un observable para manejar la petición PUT con las cabeceras para la modificación del empleado y la url asociada en la api rest
   */
  putEmployee(employee: Employee): Observable<any> {

    return this.http.put(this.URL_API + `/${employee.id}`, employee , {headers: this.headers})
   
  }
  
  /**
   * Método del servicio que envía los datos por petición DELETE para realizar un borrado del empleado cuyo id se ha pasado como parámetro
   * @param _id id del empleado
   * @returns un observable para manejar la petición DELETE con las cabeceras para el borrado del empleado y la url asociada en la api rest
   */
  deleteEmployee(_id: string) : Observable<any>{
    return this.http.delete(this.URL_API + `/${_id}` , {headers: this.headers})
   
  }
  
  /**
   * Método del servicio para el acceso a un empleado
   * @param employee empleado
   * @returns un observable para manejar la petición del acceso con las cabeceras y la url asociada en la api rest
   */
  loginEmployee(employee: any): Observable<any> {
    return this.http.post(
      this.URL_API+ '/login',
      employee,
      {headers: this.headers}
    )
  }

 

}
