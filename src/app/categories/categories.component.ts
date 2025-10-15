import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

interface Category {
  id: number;
  name: string;
}

@Component({
  selector: 'app-categories',
  standalone: false,
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{
  categories: Category[] = [];
  playerName = '';
  loading = false;
  error = '';
  searchTerm: string = '';

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.playerName = params['playerName'];
    });
    this.loadCategories();
  }

  selectCategory(cat: Category) {
    this.router.navigate(['/quiz', this.playerName, cat.id]);
  }

  loadCategories() {
    this.loading = true;
    this.error = '';
    this.http.get<Category[]>('http://localhost:3000/categories').subscribe({
      next: data => {
        this.categories = data || [];
        this.loading = false;
      },
      error: err => {
        console.error('Failed to load categories', err);
        this.error = 'Impossible de charger les catégories. Vérifie que le backend (json-server) est lancé sur http://localhost:3000';
        this.loading = false;
      }
    });
  }

  get filteredCategories(): Category[] {
    const term = this.searchTerm?.trim().toLowerCase();
    if (!term) return this.categories;
    return this.categories.filter(c => c.name.toLowerCase().includes(term));
  }
}
