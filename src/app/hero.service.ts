import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero.model';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(
    private messageService: MessageService,
    private httpClient: HttpClient
  ) {}

  private heroesUrl = 'api/heroes'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getHeroes(): Observable<Hero[]> {
    //Reading from local file
    //const heroes = of(HEROES);

    //Reading from in memonery web api
    const heroes = this.httpClient.get<Hero[]>(this.heroesUrl);
    this.log('HeroService: fetched heroes');
    return heroes;

    //Reading from express server
    //return this.httpClient.get<Hero[]>('http://localhost:3000/heroes');
  }

  getHero(id: number): Observable<Hero> {
    //Reading from local file
    //const hero = HEROES.find((h) => h.id === id)!;
    //this.log(`fetched hero id=${id}`);
    //return of(hero);

    //api/heroesUrl/id
    //Reading from in memonery web api
    const url = `${this.heroesUrl}/${id}`;
    return this.httpClient.get<Hero>(url);
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.httpClient.post<Hero>(this.heroesUrl, hero, this.httpOptions);
  }

  //added a new comment just to test branching
}
