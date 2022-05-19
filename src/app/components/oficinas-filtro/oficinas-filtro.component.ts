import { Component, OnInit } from '@angular/core';
import { OficinasService } from '../../services/oficinas.service';
import { NgForm } from '@angular/forms';
import { Oficinas } from '../../models/oficinas';
import { ActivatedRoute } from '@angular/router';

/**
 * OficinasFiltroComponent
 */
@Component({
  selector: 'app-oficinas-filtro',
  templateUrl: './oficinas-filtro.component.html',
  styleUrls: ['./oficinas-filtro.component.css'],
})
export class OficinasFiltroComponent implements OnInit {

  /**
   * tipo o modalidad de oficina
   */
  typeOficina: string = '';
  
  /**
   * Objeto de la clase Oficinas
   */
  oficina = new Oficinas();

  /**
   * Constructor para instanciar la clase
   * @param oficinasService servicio asociado al componente
   * @param route ruta asociada al componente
   */
  constructor(
    public oficinasService: OficinasService,
    public route: ActivatedRoute
  ) {}

  /**
   * Método que inicializa los valores que se van a mostrar en el HTML una vez que el componente haya sido inicializado.
   * Se ejecuta después del constructor, es decir, después de que haya sido instanciada la clase.
   *
   */
  ngOnInit() {
    this.typeOficina = this.route.snapshot.params['modality'];
  }

  /**
   * Método para obtener el formulario de filtro según la modalidad.
   * @param form formulario
   */
  postOficinasByoptions(form: NgForm) {
    this.oficina = form.value;
    this.oficina.modality = this.typeOficina;

    this.oficinasService
      .postOficinasByoptions(this.oficina)
      .subscribe((res) => {
        if (this.typeOficina == 'Alquiler') {
          var x = document.getElementById('Coworking') as HTMLElement;
          x.style.display = 'block';
          this.oficinasService.oficinasDestacadasAlquiler = res;
        } else {
          var x = document.getElementById('Alquiler') as HTMLElement;
          x.style.display = 'none';
          this.oficinasService.oficinasDestacadasCoworking = res;
        }
      });
  }
}
