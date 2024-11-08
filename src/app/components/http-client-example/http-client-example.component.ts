import { Component, inject } from '@angular/core';
import { JokesService } from '../../shared/services/jokes.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-http-client-example',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './http-client-example.component.html',
  styleUrl: './http-client-example.component.css'
})
export class HttpClientExampleComponent {
  jokesService = inject(JokesService)
  dad_joke: string = ''
  chuck_norris_joke: string = ''
  //constructor(public jokesService: JokesService) {}

  ngOnInit() {
    // this.jokesService.getDadJokes().subscribe((data) => {
    //   console.log("DAD JOKE: ", data.joke)
    //   this.dad_joke = data.joke
    // })

    // this.jokesService.getChuckNorrisJoke().subscribe((data) => {
    //   console.log("CHUCK NORRIS JOKE: ", data.value)
    //   this.chuck_norris_joke = data.value
    // })
    this.refreshDadJoke();
    this.refreshChuckNorrisJoke();
  }

  refreshDadJoke() {
    this.jokesService.getDadJokes().subscribe((data) => {
      this.dad_joke = data.joke;
    })
  }

  refreshChuckNorrisJoke() {
    this.jokesService.getChuckNorrisJoke().subscribe((data) => {
      this.chuck_norris_joke = data.value;
    })
  }
}
