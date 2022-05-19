import { Component, OnInit } from '@angular/core';
import { EmailcontactService } from '../../services/emailcontact.service';
import { Emailcontact } from '../../models/emailcontact';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

/**
 * FormularioComponent
 */
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  /**
   * atributo que hace referencia al usuario registrado
   */
  usuarioRegistrado: string | null = '';

  /**
   * atributo que hace referencia al e-mail de contacto
   */
  emailcontact = new Emailcontact();

  /**
   * Constructor para instanciar la clase.
   * @param emailcontactService servicio asociado al componente
   * @param router ruta asociada al componente
   */
  constructor(
    public emailcontactService: EmailcontactService,
    private router: Router
  ) {}

  /**
   * atributo que hace referencia al titulo
   */
  title = 'EdixFrontend';
  
  /**
   * /**
   * Objeto de la clase FormGroup. El constructor de la clase contiene objetos de la clase FormControl
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
  ngOnInit() {}

  /**
   * Método para obtener el formulario de contacto.
   */
  addFormularioContacto() {
    this.emailcontact = this.form.value;
    var selectPuestos = document.getElementById('puestos') as HTMLSelectElement;
    this.emailcontact.puestos = selectPuestos.value;
    this.emailcontactService
      .postEmailContact(this.emailcontact)
      .subscribe((res) => {
        this.form.reset();
      });
  }
}
