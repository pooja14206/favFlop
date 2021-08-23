import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'safe-navigation-operator';

  name: string = "Pooja";

  favFlop = {
    title: "3-idiots",
    relesedYear: 2009,
    rating: "5stars",
    imdbLink: 'www.viva.com',
    soundTrack: {
      spotifyLink: ""
    }
      
  }

  // event listener in bullon tag.
  onCheckout(event: any){
    console.log("checkout successfully", event.target);
  }

  // event listener in h2 tag
  titleHover(message: string){
    console.log(message + " the title");
  }
}