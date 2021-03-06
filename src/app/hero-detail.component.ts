import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'hero-detail',
    template: `
        <div *ngIf="hero">
            <h2>{{hero.name}}</h2>
            <div>
                <label>id: </label>{{hero.id}}
            </div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="hero.name" placeholder="name"/>
            </div>
        </div>
    `,
  // templateUrl: './app.component.html',
    //styleUrls: ['./app.component.css']
})

export class HeroDetailComponent {
    @Input() hero: Hero;
}


