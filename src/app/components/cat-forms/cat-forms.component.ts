import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { ICategorie } from 'src/app/models/categorie';
import { IBreed } from 'src/app/models/breed';

import { CatCategories } from 'src/app/data/catCategories';
import { CatBreeds } from 'src/app/data/catBreeds';

@Component({
  selector: 'app-cat-forms',
  templateUrl: './cat-forms.component.html',
  styleUrls: ['./cat-forms.component.scss']
})
export class CatFormsComponent implements OnInit {

  hideElement = false;

  cat = {
    breed: '',
    categorie: null
  };

  categories: ICategorie[] = CatCategories;

  breeds: IBreed[] = CatBreeds;

  toggleOptions() {
    const options = document.querySelector('.options');
    const p = document.querySelector('p');
    const btn = document.querySelector('button');

    // console.log(form);
    this.hideElement = !this.hideElement;
    if (this.hideElement) {
      p.textContent = 'Menos Opções';
      btn.textContent = 'Specific Cat 🐈';
    } else {
      p.textContent = 'Mais Opções';
      btn.textContent = 'Random Cat ❔';
    }
  }

  constructor(private http: HttpClient) { }

  getCat(breed, categorie) {
    const figure = document.querySelector('figure');
    const img = document.querySelector('img');

    if (categorie == null) { categorie = ''; }

    const params = new HttpParams()
      .set('breed_id', breed)
      .set('category_ids', categorie.toString());

    // console.log(breed, categorie.toString());

    const catJson$ = this.http.get('https://api.thecatapi.com/v1/images/search', { params });

    catJson$.subscribe({
      next: (value) => {
        img.src = (value[0].url);
        // console.log(value);
      },
      complete: () => figure.style.display = 'block'
    });
  }

  ngOnInit(): void {
  }
}
