import { Component, OnInit } from '@angular/core';
import { Oficinas } from '../../models/oficinas';
import { ActivatedRoute, Router } from '@angular/router';
import { OficinasService } from '../../services/oficinas.service';
import { NgForm } from '@angular/forms';
import { EmployeeService } from "../../services/employee.service";
/**
 * OficinaDetailComponent
 */
@Component({
  selector: 'app-oficina-detail',
  templateUrl: './oficina-detail.component.html',
  styleUrls: ['./oficina-detail.component.css'],
})
export class OficinaDetailComponent implements OnInit {

  /**
   * atributo que hace referencia al id de la oficina
   */
  idOficina: string = '';

  /**
   * Constructor para instanciar la clase.
   * @param oficinasService servicio asociado al componente.
   * @param router ruta asociada al componente. Recibe al objeto ActivatedRoute.
   * @param route ruta asociada al componente. Recibe al objeto Router.
   */
  constructor(
    public oficinasService: OficinasService,
    public employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  /**
   * Objeto de la clase Oficinas.
   */
  oficina = new Oficinas();

  /**
   * Método que inicializa los valores que se van a mostrar en el HTML una vez que el componente haya sido inicializado.
   * Se ejecuta después del constructor, es decir, después de que haya sido instanciada la clase.
   *
   */
  ngOnInit() {
    if (!sessionStorage.getItem('role')) {
      this.router.navigate(['/home']);
    }
    this.idOficina = this.route.snapshot.params['id'];
    this.getOficinaByid(this.idOficina);
  }

  /**
   * Método para obtener la oficina cuyo id se ha pasado como parámetro.
   * @param id el id de la oficina
   */
  getOficinaByid(id: string) {
    this.oficinasService.getOficinaByid(id).subscribe((res) => {
      this.oficinasService.nuevoOficina = res;
      this.getEmployeeByid(res.comercial);
      this.getEmployees();
    });
  }

  getEmployeeByid(id: string) {
    this.employeeService.getEmployeeByid(id).subscribe((res) => {
      this.employeeService.nuevoEmp = res;
    });
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe((res) => {
      this.employeeService.employees = res;
    });
  }

  /**
   * Método para dar de alta o modificar una oficina.
   * Antes de realizar la acción de alta o modificación muestra un aviso de confirmación.
   * @param form formulario
   */
  addOficina(form: NgForm) {
    this.oficina = form.value;

    var selectmodality = document.getElementById(
      'modality'
    ) as HTMLSelectElement;
    var selectis_destacada = document.getElementById(
      'is_destacada'
    ) as HTMLSelectElement;
    var selectparking_publico = document.getElementById(
      'parking_publico'
    ) as HTMLSelectElement;
    var selectparking_privado = document.getElementById(
      'parking_privado'
    ) as HTMLSelectElement;
    var selectcomercial = (document.getElementById("comercial")) as HTMLSelectElement;

    this.oficina.modality = selectmodality.value;
    this.oficina.is_destacada = Boolean('');
    this.oficina.parking_public = Boolean('');
    this.oficina.parking_private = Boolean('');
    this.oficina.comercial=selectcomercial.value;

    if (selectis_destacada.value == 'Si') {
      this.oficina.is_destacada = Boolean('true');
    }
    if (selectparking_publico.value == 'Si') {
      this.oficina.parking_public = Boolean('true');
    }
    if (selectparking_privado.value == 'Si') {
      this.oficina.parking_private = Boolean('true');
    }

    if (form.value.id) {
      this.oficinasService.putOficina(this.oficina).subscribe((res) => {
        //this.oficinasService.nuevoOficina = res;
        let tituloAviso = 'Modificación de Oficina';
        let mensajeAviso =
          'Oficina ' + this.oficina.title + ' modificada correctamente.';

        this.mostrarAviso(tituloAviso, mensajeAviso);
      });
    } else {
      this.oficinasService.postOficina(this.oficina).subscribe((res) => {
        //this.oficinasService.nuevoOficina = res;
        let tituloAviso = 'Creación de Oficina';
        let mensajeAviso =
          'Oficina ' + this.oficina.title + ' creada correctamente.';
        this.mostrarAviso(tituloAviso, mensajeAviso);
      });
    }
  }

  /**
   *  Método que muestra un aviso parametrizable
   * @param titulo titulo del aviso
   * @param mensaje mensaje del aviso
   */
  public mostrarAviso(titulo: string, mensaje: string) {
    let tituloAviso = document.getElementById('titleAviso') as HTMLElement;
    let mensajeAviso = document.getElementById('mensajeAviso') as HTMLElement;
    tituloAviso.innerText = titulo;
    mensajeAviso.innerText = mensaje;
    let modal = document.getElementById('modalAviso') as HTMLElement;
    modal.style.display = 'block';
  }

  /**
   * Método para ocultar el aviso
   */
  public ocultarAviso() {
    let modal = document.getElementById('modalAviso') as HTMLElement;
    modal.style.display = 'none';
  }
}
