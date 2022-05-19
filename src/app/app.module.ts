import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { LoginComponent } from './components/login/login.component';
import { OficinasComponent } from './components/oficinas/oficinas.component';
import { OficinaComponent } from './components/oficina/oficina.component';
import { OficinasModalityComponent } from './components/oficinas-modality/oficinas-modality.component';
import { OficinaDetailComponent } from './components/oficina-detail/oficina-detail.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { OficinasFiltroComponent } from './components/oficinas-filtro/oficinas-filtro.component';
import { AllProfilesComponent } from './components/all-profiles/all-profiles.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { CreateProfileSecundaryComponent } from './components/create-profile-secundary/create-profile-secundary.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ServiciosoficinasComponent } from './components/serviciosoficinas/serviciosoficinas.component';
import { CarouselimagenesComponent } from './components/carouselimagenes/carouselimagenes.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormularioComponent } from './components/formulario/formulario.component';
import { AgmCoreModule } from '@agm/core';
import { GooglemapsComponent } from './components/googlemaps/googlemaps.component';
import { OficinasBusquedaComponent } from './components/oficinas-busqueda/oficinas-busqueda.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    LoginComponent,
    OficinasComponent,
    OficinaComponent,
    OficinasModalityComponent,
    OficinaDetailComponent,
    EmployeeDetailComponent,
    OficinasFiltroComponent,
    AllProfilesComponent,
    CreateProfileComponent,
    CreateProfileSecundaryComponent,
    ServiciosoficinasComponent,
    CarouselimagenesComponent,
    FormularioComponent,
    GooglemapsComponent,
    OficinasBusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GoogleMapsModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyB1d_zDf-iMYKvBJmM1fYt2N1z7nIzeRWI'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
