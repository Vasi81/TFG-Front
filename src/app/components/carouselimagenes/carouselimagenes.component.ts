import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { Profile } from 'src/app/models/profile';

/**
 * CarouselimagenesComponent
 */
@Component({
  selector: 'app-carouselimagenes',
  templateUrl: './carouselimagenes.component.html',
  styleUrls: ['./carouselimagenes.component.css'],
})
export class CarouselimagenesComponent implements OnInit {
  /**
   * atributo que hace referencia al array de perfiles
   */
  profiles: Profile[] = [];
  /**
   * atributo que hace referencia al id de la oficina
   */
  idOficina: string = '';

  /**
   * Constructor para instanciar la clase.
   * @param profilesService servicio asociado al componente
   * @param route ruta asociada al componente
   */
  constructor(
    public profilesService: ProfileService,
    public route: ActivatedRoute
  ) {}

  /**
   * Método que inicializa los valores que se van a mostrar en el HTML una vez que el componente haya sido inicializado.
   * Se ejecuta después del constructor, es decir, después de que haya sido instanciada la clase.
   *
   */
  ngOnInit() {
    this.idOficina = this.route.snapshot.params['id'];
    this.getProfilesByOficinaId(this.idOficina);
  }

  /**
   * Método que obtiene los perfiles de oficina (alquiler o coworking).
   */
  getProfilesByOficinaId(oficinaId: string) {
    this.profilesService.getProfilesByOficinaId(oficinaId).subscribe((res) => {
      this.profilesService.profiles = res;
    });
  }
}
