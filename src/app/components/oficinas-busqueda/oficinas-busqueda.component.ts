import { Component, OnInit } from "@angular/core";
import { OficinasService } from "../../services/oficinas.service";
import { NgForm } from "@angular/forms";
import { Oficinas } from "../../models/oficinas";



@Component({
  selector: 'app-oficinas-busqueda',
  templateUrl: './oficinas-busqueda.component.html',
  styleUrls: ['./oficinas-busqueda.component.css']
})
export class OficinasBusquedaComponent implements OnInit {
  oficina=new Oficinas();
  constructor(public oficinasService: OficinasService) { }

  ngOnInit(): void {
  }

  postOficinasByoptions(form: NgForm) {

    this.oficina=form.value;


    this.oficinasService.postOficinasByoptions(this.oficina).subscribe((res) => {
      this.oficinasService.oficinas = res;

    });
  }

}
