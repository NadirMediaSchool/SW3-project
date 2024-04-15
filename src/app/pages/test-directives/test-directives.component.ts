import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-directives',
  templateUrl: './test-directives.component.html',
  styleUrl: './test-directives.component.css'
})
export class TestDirectivesComponent implements OnInit {
  data: any;

  showImage1: boolean = false;
  showImage2: boolean = false;

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.getJsonData().subscribe({
      next: (result) => {
        this.data = result;
        console.log('Données chargées', this.data);
      },
      error: (error) => {
        console.error('Erreur lors du chargement des données', error);
      }
    });
  }
  colors = ['red', 'blue', 'green', 'yellow', 'purple']; // Liste des couleurs
  backgroundColor = 'white'; // Couleur de fond initiale

  changeColor(color: string) {
    this.backgroundColor = color; // Change la couleur de fond
  }

  private getJsonData(): Observable<any> {
    return this.http.get<any>('assets/data/radiohead.json');
  }

  displayImage(imageNumber: number): void {
    this.showImage1 = imageNumber === 1;
    this.showImage2 = imageNumber === 2;
  }
}
