import { Component, OnInit } from '@angular/core';
import { OficinasService } from '../../services/oficinas.service';
import { NgForm } from '@angular/forms';
import { Oficinas } from '../../models/oficinas';
import { ActivatedRoute } from '@angular/router';

/**
 * OficinasModalityComponent
 */
@Component({
  selector: 'app-oficinas-modality',
  templateUrl: './oficinas-modality.component.html',
  styleUrls: ['./oficinas-modality.component.css'],
  providers: [OficinasService],
})
export class OficinasModalityComponent implements OnInit {
  /**
   * atributo que hace referencia al tipo o modalidad de oficina
   */
  typeOficina: string = '';

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

    this.getOficinaByModality(this.typeOficina);
  }

  /**
   * Método para obtener las oficinas cuya modalidad se pasa como parámetro.
   * @param typeOficina modalidad de oficina (alquiler o coworking)
   */
  getOficinaByModality(typeOficina: string) {
    this.oficinasService.getOficinaByModality(typeOficina).subscribe((res) => {
      if (typeOficina == 'Alquiler') {
        var x = document.getElementById('Coworking') as HTMLElement;
        x.style.display = 'none';
        this.oficinasService.oficinasDestacadasAlquiler = res;
      } else {
        var x = document.getElementById('Alquiler') as HTMLElement;
        x.style.display = 'none';
        this.oficinasService.oficinasDestacadasCoworking = res;
      }
    });
  }

  /**
   * Método para dar de alta una oficina.
   * @param oficina oficina
   */
  postOficinasByoptions(oficina: Oficinas) {
    this.oficinasService.postOficinasByoptions(oficina).subscribe((res) => {
      this.oficinasService.oficinas = res;
    });
  }

  /**
   * Método para obtener la oficina cuyo id se pasa como parámetro.
   * @param _id el id de la oficina
   */
  getOficinaByid(_id: string) {
    this.oficinasService.getOficinaByid(_id).subscribe((res) => {
      this.oficinasService.nuevoOficina = res;
    });
  }
}
