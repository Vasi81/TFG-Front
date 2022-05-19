import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from '../../models/employee';
import { Router } from '@angular/router';

/**
 * EmployeeComponent
 */
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService],
})
export class EmployeeComponent implements OnInit {
  /**
   * Constructor para instanciar la clase.
   * @param employeeService servicio asociado al componente
   * @param router  ruta asociada al componente
   */
  constructor(
    public employeeService: EmployeeService,
    private router: Router
  ) {}
  /**
   * Objeto de la clase Employee.
   */
  employee = new Employee();

  /**
   * Método que inicializa los valores que se van a mostrar en el HTML una vez que el componente haya sido inicializado.
   * Se ejecuta después del constructor, es decir, después de que haya sido instanciada la clase.
   *
   */
  ngOnInit() {
    if (!sessionStorage.getItem('role')) {
      this.router.navigate(['/home']);
    }
    this.getEmployees();
  }

  /**
   * Método que muestra los datos de todos los empleados usando el servicio employeeService dentro del componente.
   */
  getEmployees() {
    this.employeeService.getEmployees().subscribe((res) => {
      this.employeeService.employees = res;
    });
  }

  /**
   * Método para modificar un empleado.
   * @param employee el empleado seleccionado
   */
  editEmployee(employee: Employee) {
    this.router.navigate(['/employeedetails', employee.id]);
  }

  /**
   * Método para borrar un empleado.
   * @param _id el id del empleado
   */
  deleteEmployee(_id: string) {
    if (confirm('Está seguro que desea eliminarlo?')) {
      this.employeeService.deleteEmployee(_id).subscribe((res) => {
        this.getEmployees();
        //this.resetForm(form);
      });
    }
  }

  /**
   * Método para resetear el formulario
   * @param form formulario
   */
  resetForm(form: NgForm) {
    if (form) {
      form.reset();
      this.employeeService.selectedEmployee = new Employee();
    }
  }
}
