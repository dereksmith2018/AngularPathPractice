import { Component } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent {
  constructor(private router: Router) { }
  
  albums: Album[] = [
    new Album("Pulse", "Pink Floyd",
       "A live  album by the English progressive rock band originally released in 1995, on the label EMI in the United Kingdom.", 1),
   new Album("Funhouse", "The Stooges",
       "The second  album from the American rock band, released in 1970 by Elektra Records.", 2),
   new Album("Twilight of the Thunder God", "Amon Amarth", "Seventh album by the Swedish band, released in 2008, based on Thor's battle with the serpent Jörmungandr.", 2)
  ];


  
  goToDeatailPage(clickedAlbum: Album){
    this.router.navigate(['album', clickedAlbum.id])
  };
}
