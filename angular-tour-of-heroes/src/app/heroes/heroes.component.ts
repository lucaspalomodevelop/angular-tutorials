import { Component } from '@angular/core';
import { Hero } from '../hero';
// import { UpperCasePipe } from '@angular/common';
import { HEROES } from '../mock-heroes';

import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';

import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, UpperCasePipe, HeroDetailComponent],
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
