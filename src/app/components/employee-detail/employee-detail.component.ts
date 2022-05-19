import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from '../../models/employee';
import { ActivatedRoute, Router } from '@angular/router';

/**
 * EmployeeDetailComponent
 */
@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
})
export class EmployeeDetailComponent implements OnInit {

  /**
   * atributo que hace referencia al id del empleado
   */
  idEmployee: string = '';

  /**
   * Constructor para instanciar la clase
   * @param employeeService servicio asociado al componente
   * @param route ruta asociada al componente. Recibe al objeto ActivatedRoute.
   * @param router ruta asociada al componente. Recibe al objeto Router.
   */
  constructor(
    public employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  /**
   * Objeto de la clase Empleado
   */
  empleado = new Employee();

  /**
   * Método que inicializa los valores que se van a mostrar en el HTML una vez que el componente haya sido inicializado.
   * Se ejecuta después del constructor, es decir, después de que haya sido instanciada la clase.
   *
   */
  ngOnInit() {
    if (!sessionStorage.getItem('role')) {
      this.router.navigate(['/home']);
    }
    this.idEmployee = this.route.snapshot.params['id'];
    this.getEmployeeByid(this.idEmployee);
  }

  /**
   * Método para obtener el empleado cuyo id se pasa por parámetro.
   * @param id el id del empleado
   */
  getEmployeeByid(id: string) {
    this.employeeService.getEmployeeByid(id).subscribe((res) => {
      this.employeeService.nuevoEmp = res;
    });
  }

  /**
   * Método del componente para dar de alta un empleado nuevo o modificar uno existente a través de un formulario.
   * Antes de realizar la acción de alta o modificación muestra un aviso de confirmación.
   * @param form formulario
   */
  addEmployee(form: NgForm) {
    this.empleado = form.value;

    var selectRole = document.getElementById('role') as HTMLSelectElement;
    this.empleado.role = selectRole.value;

    if (form.value.id) {
      this.empleado.id = form.value.id;
      this.empleado.nombre = form.value.nombre;
      this.empleado.role = form.value.role;
      this.empleado.email = form.value.email;

      this.employeeService.putEmployee(this.empleado).subscribe((res) => {
        let tituloAviso = 'Modificación Comercial';
        let mensajeAviso =
          'Comerical ' + this.empleado.nombre + ' modificada correctamente.';

        this.mostrarAviso(tituloAviso, mensajeAviso);
      });
    } else {
      this.empleado.nombre = form.value.nombre;
      this.empleado.usuario = form.value.usuario;
      this.empleado.pwd = form.value.pwd;
      this.empleado.role = form.value.role;
      this.empleado.email = form.value.email;

      this.employeeService.postEmployee(this.empleado).subscribe((res) => {
        //this.employeeService.postEmployee(JSON.stringify(form.value)).subscribe((res) => {
        let tituloAviso = 'Creación de Comercial';
        let mensajeAviso =
          'Comerical ' + this.empleado.nombre + ' creado correctamente.';
        this.mostrarAviso(tituloAviso, mensajeAviso);
      });
    }
  }

  /**
   * Método que muestra un aviso parametrizable.
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
   * Método para ocultar el aviso.
   */
  public ocultarAviso() {
    let modal = document.getElementById('modalAviso') as HTMLElement;
    modal.style.display = 'none';
  }

  /**
   * Método que obtiene los datos de todos los empleados usando el servicio employeeService dentro del componente.
   */
  getEmployees() {
    this.employeeService.getEmployees().subscribe((res) => {
      this.employeeService.employees = res;
    });
  }

  /**
   * Método para dar de alta un empleado.
   * @param nombre el nombre del empleado
   */
  postEmployeeByoptions(nombre: string) {
    this.employeeService.postEmployeeByoptions(nombre).subscribe((res) => {
      this.employeeService.employees = res;
    });
  }

  /**
   * Método para editar un empleado.
   * @param employee el empleado seleccionado
   */
  editEmployee(employee: Employee) {
    this.employeeService.selectedEmployee = employee;
  }

  /**
   * Método para borrar un empleado. Antes de ejecutar la acción de borrado muestra un aviso de confirmación.
   * @param _id el id del empleado
   * @param form formulario
   */
  deleteEmployee(_id: string, form: NgForm) {
    if (confirm('Está seguro que desea eliminarlo?')) {
      this.employeeService.deleteEmployee(_id).subscribe((res) => {
        this.getEmployees();
        this.resetForm(form);
      });
    }
  }

  /**
   * Método para resetear el formulario.
   * @param form formulario
   */
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.employeeService.selectedEmployee = new Employee();
    }
  }
}
