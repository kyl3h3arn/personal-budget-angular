import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]); // Holds cached data

  constructor(private http: HttpClient) {}

  fetchData(): void {
    // ✅ Ensures API call is only made when the data is empty
    if (this.data$.value.length === 0) {
      console.log("Fetching data from backend...");
      this.http.get<any[]>('/budget')  // Adjust URL as needed
        .subscribe(response => {
          this.data$.next(response); // Store fetched data
        });
    } else {
      console.log("Data already loaded, no API call needed.");
    }
  }

  getData(): Observable<any[]> {
    return this.data$.asObservable(); // Return the data as an observable
  }
}
