import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { Profile } from 'src/app/models/profile';

/**
 * AllProfilesComponent
 */
@Component({
  selector: 'app-all-profiles',
  templateUrl: './all-profiles.component.html',
  styleUrls: ['./all-profiles.component.css'],
})
export class AllProfilesComponent implements OnInit {
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
   * @param route  ruta asociada al componente
   */
  constructor(
    public profilesService: ProfileService,
    private route: ActivatedRoute
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
   * Método para obtener los perfiles de oficina (alquiler o coworking).
   */
  getProfiles() {
    this.profilesService.getProfiles().subscribe((res) => {
      this.profilesService.profiles = res;
    });
  }

  /**
   * Método para obtener el perfil de oficina cuyo id se ha pasado como parámetro.
   * @param oficinaId id de la oficina
   */
  getProfilesByOficinaId(oficinaId: string) {
    this.profilesService.getProfilesByOficinaId(oficinaId).subscribe((res) => {
      this.profilesService.profiles = res;
    });
  }

  /**
   * Método para borrar el perfil de la oficina cuyo id se ha pasado como parámetro.
   * Antes de realizar el borrado el metodo muestra el mensaje "Esta seguro que desea eliminarlo?
   * @param _id id de la oficina
   */
  deleteProfiles(_id: string) {
    if (confirm('Está seguro que desea eliminarlo?')) {
      this.profilesService.deleteProfiles(_id).subscribe((res) => {
        this.getProfilesByOficinaId(this.idOficina);
      });
    }
  }
}
