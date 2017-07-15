import { Component, OnInit } from '@angular/core';
import { HeroDetailComponent } from './hero-detail.component';
import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
    selector: 'app-root',
    template: `
        <h1>My Heroes</h1>
        <hero-detail [hero]="selectedHero"></hero-detail>
        <ul class="heroes">
            <li *ngFor="let hero of heroes"
                (click)="onSelect(hero)"
                [class.selected]="hero === selectedHero"
                >
            <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
        </ul>
    `,
  // templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [HeroService]
})

export class AppComponent implements OnInit {
    title = 'Tour of Heroes';
    selectedHero: Hero;
    heroes: Hero[];
    constructor(private heroService: HeroService) {}
    getHeroes(): void {
        this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    };
    ngOnInit(): void { // like React's onComponentMount
        this.getHeroes();
    };
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    };
}


