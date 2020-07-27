import { Observable } from 'rxjs';
import { CategoriesService } from './../../categories.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  categories$: Observable<Category[]>;

  constructor(private categoriesService: CategoriesService) {
    this.categories$ = this.categoriesService.getCategories()
    .snapshotChanges()
    .pipe(map(categories => categories.map(c => ({ key: c.key, ...c.payload.val() }))));
   }

}
