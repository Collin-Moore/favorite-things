import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Favorite Things';
  favoriteColor = 'gray';
  favoriteNumber = 0;

  setColor(selectedColor: string): void {
    this.favoriteColor = selectedColor;
  }

  updateColor(): void {
    console.log('You selected update');
  }

  setNumber(action: string): void {
    if (action === '+') {
      this.favoriteNumber += 1;
    } else if (action === '-') {
      this.favoriteNumber -= 1;
    } else if (action === '0') {
      this.favoriteNumber = 0;
    }
  }
}

