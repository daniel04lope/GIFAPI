import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { CardListComponent } from './Componentes/card-list/card-list.component';
import { SearchBoxComponent } from './Componentes/search-box/search-box.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [ 
  CardListComponent,
  SearchBoxComponent,
   HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardListComponent,
    SearchBoxComponent,
    HomeComponent
  ]
})
export class GifsModule { }
