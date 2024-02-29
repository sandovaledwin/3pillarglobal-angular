import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
  providers: [
    DataService
  ]
})
export class ProductsListComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService
      .getProductsByCategory()
      .pipe(take(1))
      .subscribe({
        next: (data) => console.log(data)
      });
  }
}
