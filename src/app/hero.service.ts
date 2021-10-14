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

  getHeroes(): Observable<Hero[]> {
    //Reading from local file
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;

    //Reading from server
    //return this.httpClient.get<Hero[]>('http://localhost:3000/heroes');
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((h) => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
