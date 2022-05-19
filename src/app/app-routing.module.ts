import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from './components/employee/employee.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { OficinasComponent } from './components/oficinas/oficinas.component';
import { OficinaComponent } from './components/oficina/oficina.component';
import { OficinasModalityComponent } from './components/oficinas-modality/oficinas-modality.component';
import { OficinaDetailComponent } from './components/oficina-detail/oficina-detail.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { ServiciosoficinasComponent } from './components/serviciosoficinas/serviciosoficinas.component';

const routes: Routes = [
  {
    path : '', //En este caso decimos el componente que mostraremos por defecto
    //component : HomeComponent
    component : HomeComponent
  },
  {
    path : 'login', //cuando definimos el 'path' no puede empezar por '/'
    component : LoginComponent
  },
  {
    path : 'serviciosoficinas', //cuando definimos el 'path' no puede empezar por '/'
    component : ServiciosoficinasComponent
  },
  {
    path : 'home', //cuando definimos el 'path' no puede empezar por '/'
    component : HomeComponent
  },
  //Oficina
  {
    path : 'oficina', //cuando definimos el 'path' no puede empezar por '/'
     component : OficinaComponent
  },
  //Oficina Detail
  {
    path : 'oficinadetails/:id', //cuando definimos el 'path' no puede empezar por '/'
     component : OficinaDetailComponent
  },
  {path : 'oficinas/:id', component : OficinasComponent},
  //Oficinas Alquiler/Coworking
  {path : 'oficinas/modality/:modality', component : OficinasModalityComponent},

  //Employee
  {path : 'employee', component : EmployeeComponent},
      //Employee Detail
  {
    path : 'employeedetails/:id', //cuando definimos el 'path' no puede empezar por '/'
     component : EmployeeDetailComponent
  },
  //aqui estamos pasando parametros en el pahtparam, eje: componente1/spiderman/marvel
  //{path : 'componente1/:nombre/:universo', component : Componente1Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
