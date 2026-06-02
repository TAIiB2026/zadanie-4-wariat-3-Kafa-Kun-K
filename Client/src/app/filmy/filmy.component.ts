import { Component, inject } from '@angular/core';
import { GET_DATA_TOKEN } from '../tokens/get-data.token';
import { Observable } from 'rxjs';
import { FilmClass } from '../classes/film.class';

@Component({
  selector: 'taiib2-filmy',
  standalone: false,
  templateUrl: './filmy.component.html',
  styles: ``
})
export class FilmyComponent {
  private readonly service = inject(GET_DATA_TOKEN);
  public data$!: Observable<FilmClass[]>;

  ngOnInit() {
    this.zaladujDane();
  }

  zaladujDane() {
    this.data$ = this.service.Get();
  }

  usunRekord(id: number) {
    this.service.Delete(id).subscribe(() => {
      this.zaladujDane(); 
    });
  }
}
