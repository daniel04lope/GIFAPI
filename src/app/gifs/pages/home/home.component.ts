import { Component } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';
import { GifsServiceService } from '../../Service/gifs.service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor( private gifsService: GifsServiceService){
  }
    
    get gifs(): Gif[] {

      return this.gifsService.gifList;
    }

}

