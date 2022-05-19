import { Component, OnInit } from '@angular/core';
import { EmailcontactService } from "./services/emailcontact.service";
import { Emailcontact } from "./models/emailcontact";
import { Router } from '@angular/router';
import { FormGroup, FormControl } from "@angular/forms";

/**
 * AppComponent
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  /**
   * atributo que hace referencia al usuario registrado
   */
  usuarioRegistrado: string | null ='';

  /**
   * Objeto de la clase EmailContact
   */
  emailcontact=new Emailcontact();

  /**
   * Constructor para instanciar la clase
   * @param emailcontactService servicio asociado al componente
   * @param router ruta asociada al componente
   */
  constructor(public emailcontactService: EmailcontactService, private router: Router) {}

  /**
   * atributo que hace referencia al titulo
   */
  title = 'EdixFrontend';
  
  /**
   * Objeto de la clase FormGroup.
   */
  form = new FormGroup({

    nombre: new FormControl(null),
    email: new FormControl(null),
    telefono: new FormControl(null),
    empresa: new FormControl(null),
    provincia: new FormControl(null),
    modalidad: new FormControl(null),
    puestos: new FormControl(null),
    message: new FormControl(null),


  });
  
  /**
   * Método que inicializa los valores que se van a mostrar en el HTML una vez que el componente haya sido inicializado.
   * Se ejecuta después del constructor, es decir, después de que haya sido instanciada la clase.
   */
  ngOnInit() {
    let modal = document.getElementById("login") as HTMLElement;
    let modalMantenimiento = document.getElementById("mantenimiento") as HTMLElement;
    modalMantenimiento.style.display = "none";
    this.usuarioRegistrado=sessionStorage.getItem("tokenSession");
    if(this.usuarioRegistrado){
        modal.style.display = "none";
        modalMantenimiento.style.display = "inline";
    }
  }

  /**
   * Método para obtener el acceso al registro de usuarios.
   */
  public signUp(){
    let modal = document.getElementById("login") as HTMLElement;
    let modalMantenimiento = document.getElementById("mantenimiento") as HTMLElement;
    sessionStorage.removeItem("tokenSession");
    sessionStorage.clear();
    modal.style.display = "inline";
    modalMantenimiento.style.display = "none";
    this.router.navigateByUrl('/');
  }
  
  /**
   * Método para obtener el formulario de contacto genérico.
   */
  public formularioContacto(){

    let modal = document.getElementById("myModal") as HTMLElement;
    modal.style.display = "block";
   
  }
  
  /**
   * Método para ocultar el formulario de contacto genérico.
   */
  public ocultarformularioContacto(){
   let  modal = document.getElementById("myModal") as HTMLElement;
    modal.style.display = "none";
    let  formulario = document.getElementById("formulario") as HTMLFormElement;
    formulario.reset();

  }
  
  /**
   * Método para añadir los campos modalidad, puestos y provincia al formulario genérico y enviar al correo asociado.
   */
  addFormularioContacto() {
    
    this.emailcontact=this.form.value;

    var selectModalidad = (document.getElementById("modalidad")) as HTMLSelectElement;
    var selectPuestos = (document.getElementById("puestos")) as HTMLSelectElement;
    var selectProvincia = (document.getElementById("provincia")) as HTMLSelectElement;

    this.emailcontact.modalidad=selectModalidad.value;
    this.emailcontact.puestos=selectPuestos.value;
    this.emailcontact.provincia=selectProvincia.value;

    let  nombre = document.getElementById("nombre") as HTMLInputElement;
    let  email = document.getElementById("email") as HTMLInputElement;
    let  mensaje = document.getElementById("mensaje") as HTMLInputElement;
    let  checkaceptar = document.getElementById("acceptance") as HTMLInputElement;
    
    /*
    alert(nombre.value); //null
    alert(email.value); //null
    alert(checkaceptar.checked); //false
    alert(mensaje.value); //null
    alert(selectModalidad.value); //-1
    alert(selectProvincia.value); //-1
    */
    //validamos los campos obligatorios.
    if (nombre.value!="" && email.value!="" && checkaceptar.checked!=false && mensaje.value!="" &&selectModalidad.value!="-1" && selectProvincia.value!="-1"){
        this.emailcontactService.postEmailContact(this.emailcontact).subscribe((res) => {
          this.ocultarformularioContacto();
          this.form.reset();
        });

    }
  }
}
