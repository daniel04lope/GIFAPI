import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsServiceService } from '../../Service/gifs.service.service';
@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>

  //Utilizamos el constructor para inyectar el servicio
  constructor( private gifsService: GifsServiceService) { }



  searchTag(){
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag)

    this.tagInput.nativeElement.value= ''; //Esto es para limpiar el input
  }

}
