import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent implements OnInit {
  data: any;

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

  private getJsonData(): Observable<any> {
    return this.http.get<any>('assets/data/students.json');
  }
}
