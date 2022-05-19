import { Component, OnInit } from '@angular/core';
import { OficinasService } from '../../services/oficinas.service';
import { Oficinas } from '../../models/oficinas';
import { ActivatedRoute } from '@angular/router';
import { EmailcontactService } from '../../services/emailcontact.service';
import { Emailcontact } from '../../models/emailcontact';
import { FormGroup, FormControl } from '@angular/forms';

/**
 * OficinasComponent
 */
@Component({
  selector: 'app-oficinas',
  templateUrl: './oficinas.component.html',
  styleUrls: ['./oficinas.component.css'],
  providers: [OficinasService],
})
export class OficinasComponent implements OnInit {

  /**
   * atributo que hace referencia al id de la oficina
   */
  idOficina: string = '';
  modalidad: string = '';

  // Prueba Google Maps
  /**
   * @ignore
   */
  title = 'gmaps';
  /**
   * @ignore
   */
  lat = 40.397967334367756;
  /**
   * @ignore
   */
  lng = -3.6060971307418024;
  /**
   * @ignore
   */
  zoom = 17;
  /**
   * @ignore
   */
  label = {
    color: '#ee4646',
    fontFamily: '',
    fontSize: '10px',
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    text: 'texto por defecto',
  };
  
  /**
   * Objeto de la clase EmailContact.
   */
  emailcontact = new Emailcontact();
  
  /**
   * Objeto de la clase FormGroup y el constructor del mismo. El constructor contiene objetos de la clase FormControl.
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
   * Constructor para instanciar la clase.
   * @param oficinasService servicio asociado al componente
   * @param emailcontactService servicio asociado al componente
   * @param route ruta asociada al componente. Recibe al objeto Activatedroute
   */
  constructor(
    public oficinasService: OficinasService,
    public emailcontactService: EmailcontactService,
    private route: ActivatedRoute
  ) {}

  /**
   * Método que inicializa los valores que se van a mostrar en el HTML una vez que el componente haya sido inicializado.
   * Se ejecuta después del constructor, es decir, después de que haya sido instanciada la clase.
   *
   */
  ngOnInit() {
    this.idOficina = this.route.snapshot.params['id'];
    //this.getOficinas();
    //this.postEmployeeByoptions("")
    //this.getOficinaByid(this.idOficina);
    this.getOficinaByid(this.idOficina);
  }

  /**
   * Método para obtener los datos de todas las oficinas.
   */
  getOficinas() {
    this.oficinasService.getOficinas().subscribe((res) => {
      this.oficinasService.oficinas = res;
    });
  }

  /**
   * Método para dar de alta.
   * @param oficina oficina
   */
  postOficinasByoptions(oficina: Oficinas) {
    this.oficinasService.postOficinasByoptions(oficina).subscribe((res) => {
      this.oficinasService.oficinas = res;
    });
  }

  /**
   * Método para obtener los datos de la oficina cuyo id se pasa como parámetro
   * @param _id el id de la oficina
   */
  getOficinaByid(_id: string) {
    let poslon: number;
    let poslat: number;
    let zoom: number;
    this.oficinasService.getOficinaByid(_id).subscribe((res) => {
      this.oficinasService.nuevoOficina = res;
      this.modalidad= res.modality;
      (this.lat = +this.oficinasService.nuevoOficina.latitude),
        (this.lng = +this.oficinasService.nuevoOficina.longitude);

      this.label = {
        color: 'orange',
        text: this.oficinasService.nuevoOficina.title,
        fontFamily: '',
        fontSize: '20px',
        fontWeight: 'bold',
        letterSpacing: '0.5px',
      };
      this.title = this.oficinasService.nuevoOficina.title;
    });
  }

  /**
   * Método para mostrar el formulario de contacto genérico.
   */
  public formularioContacto() {
    let modal = document.getElementById('myModal') as HTMLElement;
    modal.style.display = 'block';
  }
  /**
   * Método para ocultar el formulario de contacto.
   */
  public ocultarformularioContacto() {
    let modal = document.getElementById('myModal') as HTMLElement;
    modal.style.display = 'none';
    let formulario = document.getElementById('formulario') as HTMLFormElement;
    formulario.reset();
  }
  /**
   * Método para mostrar el formulario de contacto especifico para la oficina seleccionada y enviar al email asignado.
   */
  addFormularioContacto() {
    this.emailcontact = this.form.value;
    var selectPuestos = document.getElementById('puestos') as HTMLSelectElement;

    let  nombre = document.getElementById("nombre") as HTMLInputElement;
    let  email = document.getElementById("email") as HTMLInputElement;
    let  mensaje = document.getElementById("mensaje") as HTMLInputElement;
    let  checkaceptar = document.getElementById("acceptance") as HTMLInputElement;


    this.emailcontact.oficina = this.idOficina;
    this.emailcontact.puestos = selectPuestos.value;
    this.emailcontact.modalidad=this.modalidad
    this.emailcontact.comercial = this.oficinasService.nuevoOficina.comercial;
    
      //validamos los campos obligatorios.
      if (nombre.value!="" && email.value!="" && checkaceptar.checked!=false && mensaje.value!=""){
        this.emailcontactService.postEmailContact(this.emailcontact).subscribe((res) => {
          this.ocultarformularioContacto();
          this.form.reset();
        });

    }


  }
}
