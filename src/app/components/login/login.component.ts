import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import {
  NgForm,
  FormsModule,
  FormGroup,
  FormBuilder,
  FormControl,
} from '@angular/forms';
import { NgModule } from '@angular/core';
import { Employee } from '../../models/employee';
import { Router } from '@angular/router';

/**
 * LoginComponent
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [EmployeeService],
})
export class LoginComponent implements OnInit {
  /**
   * Constructor para instanciar la clase.
   * @param employeeService servicio asociado a la clase
   * @param router ruta asociada a la clase
   * @param formBuilder api auxiliar para crear el formulario
   */
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}
  
  /**
   * Objeto de la clase FormGroup
   */
  registerForm = new FormGroup({
    usuario: new FormControl(null),
    pwd: new FormControl(null),
  });
  
  /**
   * atributo que hace referencia al envío.
   */
  submitted = false;
  
  /**
   * Método para obtener el formulario de registro
   * @returns devuelve el formulario de registro
   */
  get form() {
    return this.registerForm.controls;
  }

  /**
   * Método que inicializa los valores que se van a mostrar en el HTML una vez que el componente haya sido inicializado.
   * Se ejecuta después del constructor, es decir, después de que haya sido instanciada la clase.
   *
   */
  ngOnInit() {}

  /**
   * Método para el login del usuario.
   * @returns anula el formulario del login si los datos del usuario son erróneos. En caso contrario da acceso al usuario.
   */
  loginEmployee() {
    if (this.registerForm.invalid) {
      return;
    }

    this.employeeService
      .loginEmployee(JSON.stringify(this.registerForm.value))
      .subscribe({
        next: (res) => {
          let modal = document.getElementById('login') as HTMLElement;
          let modalMantenimiento = document.getElementById(
            'mantenimiento'
          ) as HTMLElement;
          this.employeeService.token = res.toString();
          sessionStorage.setItem('tokenSession', res.token.toString());
          sessionStorage.setItem('role', res.data.role);
          if (res.data.role == 'Administrador') {
            this.router.navigateByUrl('/employee');
          } else {
            this.router.navigateByUrl('/oficina');
          }
          modal.style.display = 'none';
          modalMantenimiento.style.display = 'inline';
        },
        error: (err) => {
          let alertError = document.getElementById('alertError') as HTMLElement;
          alertError.style.display = 'block';
        },
      });
  }

  /**
   * Método para resetear el formulario.
   */
  onReset() {
    let alertError = document.getElementById('alertError') as HTMLElement;
    alertError.style.display = 'none';
    this.submitted = false;
    this.registerForm.reset();
  }
}
