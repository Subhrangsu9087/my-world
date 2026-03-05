import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  theme: 'dark' | 'light' = 'dark';

  constructor() {
    const saved = localStorage.getItem('theme') as 'dark' | 'light' | null;

    if (saved) {
      this.theme = saved;
      document.documentElement.setAttribute('data-theme', saved);
    }
  }

  toggleTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', this.theme);
    localStorage.setItem('theme', this.theme);
  }
}
