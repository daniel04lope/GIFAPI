import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { GifsModule } from '../gifs.module';
import { Gif } from '../interfaces/gifs.interface';
import { SearchResponse } from '../interfaces/gifs.interface';

@Injectable({providedIn: 'root'})


export class GifsServiceService {
  public gifList: Gif[] = [];
  private _tagsHistory: string[] = [];
  private apiKey:     string = 'ka8VzXLfP6Hp6aYPyOPuO68nD0358mSk';
  private serviceURL: string = 'https://api.giphy.com/v1/gifs';
  private styles: { [key: string]: string } = {};

  constructor(private http:HttpClient ) { }
  
  get tagsHistory(){

  
    return [...this._tagsHistory];
  }

  private organizerHistory(tag: string){
    tag = tag.toLowerCase();
   
    if(this._tagsHistory.includes(tag)){
   
   
     this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag)
    }
   
    this._tagsHistory.unshift( tag );
    this._tagsHistory = this.tagsHistory.splice(0,10);
    this.saveLocalStorage();
   }

   private saveLocalStorage():void{

    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }


  public searchTag( tag: string):void {

    if ( tag.length === 0) return;
  
    this.organizerHistory(tag);
  
    const params = new HttpParams()
      .set('api_key', this.apiKey )
      .set('limit', '10')
      .set('q', tag)
  
    this.http.get<SearchResponse>(`${ this.serviceURL}/search`, { params })
      .subscribe( resp => {
  
        this.gifList = resp.data;
        console.log({gifs: this.gifList});
      })
  
  
  
    //'api.giphy.com/v1/gifs/search?q=valorant&limit=10')
  
  
    }
    setStyle(selector: string, property: string, value: string): void {
      const element = document.querySelector(selector);
      if (element) {
        (element as HTMLElement).style.setProperty(property, value);
      }
    }

}


