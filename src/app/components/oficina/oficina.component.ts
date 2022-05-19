import { Component, OnInit } from '@angular/core';
import { OficinasService } from '../../services/oficinas.service';
import { ProfileService } from 'src/app/services/profile.service';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Oficinas } from '../../models/oficinas';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Router } from '@angular/router';

/**
 * OficinaComponent
 */
@Component({
  selector: 'app-oficina',
  templateUrl: './oficina.component.html',
  styleUrls: ['./oficina.component.css'],
})
export class OficinaComponent implements OnInit {
  /**
   * Constructor para instanciar la clase.
   * @param oficinasService servicio asociado al componente
   * @param router ruta asociada al componente
   */
  constructor(
    public oficinasService: OficinasService,
    public profilesService: ProfileService,
    private router: Router
  ) {}

  /**
   * Objeto de la clase Oficinas
   */
  oficina = new Oficinas();

  /**
   * Método que inicializa los valores que se van a mostrar en el HTML una vez que el componente haya sido inicializado.
   * Se ejecuta después del constructor, es decir, después de que haya sido instanciada la clase.
   *
   */
  ngOnInit() {
    let btnEmployee = document.getElementById('btnEmployee') as HTMLElement;
    let btnOficina = document.getElementById('btnOficina') as HTMLElement;

    if (sessionStorage.getItem('role')) {
      if (sessionStorage.getItem('role') != 'Administrador') {
        btnEmployee.style.display = 'none';
        btnOficina.style.display = 'none';
      }
    } else {
      this.router.navigate(['/home']);
    }
    this.getOficinas();
  }

  /**
   * Método para dar de alta o modificar una oficina.
   * @param form formulario
   */
  addOficina(form: NgForm) {
    this.oficina = form.value;

    if (form.value._id) {
      this.oficinasService.putOficina(this.oficina).subscribe((res) => {
        this.resetForm(form);
        this.getOficinas();
      });
    } else {
      this.oficinasService.postOficina(this.oficina).subscribe((res) => {
        this.getOficinas();
        this.resetForm(form);
      });
    }
  }

  /**
   * Método para obtener todas las oficinas.
   */
  getOficinas() {
    this.oficinasService.getOficinas().subscribe((res) => {
      this.oficinasService.oficinas = res;
    });
  }

  /**
   * Método para dar de alta una oficina.
   * @param oficina  oficina
   */
  postOficinasByoptions(oficina: Oficinas) {
    this.oficinasService.postOficinasByoptions(oficina).subscribe((res) => {
      this.oficinasService.oficinas = res;
    });
  }

  /**
   * Método para obtener la oficina cuyo id se pasa como parámetro
   */
  getOficinaByid(_id: string) {
    this.oficinasService.getOficinaByid(_id).subscribe((res) => {
      this.oficinasService.nuevoOficina = res;
    });
  }

  /**
   * Método para modificar una oficina.
   * @param oficina oficina
   */
  editOficina(oficina: Oficinas) {
    this.router.navigate(['/oficinadetails', oficina.id]);
  }

  /**
   * Metodo para borrar la oficina cuyo id se pasa como parámetro.
   * @param _id el id de la oficina
   */
  deleteOficina(_id: string) {
    if (confirm('Está seguro que desea eliminarla?')) {
      this.oficinasService.deleteOficina(_id).subscribe((res) => {
        //Remove profiles.
        this.profilesService.deleteProfilesByOficina(_id).subscribe((res) => {
          this.getOficinas();
        });
        //

      });
    }
  }

  /**
   * Método para resetear el formulario.
   * @param form formulario
   */
  resetForm(form: NgForm) {
    if (form) {
      form.reset();
      this.oficinasService.selectedOficinas = new Oficinas();
    }
  }
}
