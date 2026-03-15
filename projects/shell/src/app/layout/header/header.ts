import { Component, effect, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  theme = signal<'dark' | 'light'>('dark');

  constructor() {
    const saved = localStorage.getItem('theme') as 'dark' | 'light' | null;

    if (saved) {
      this.theme.set(saved);
    }

    effect(() => {
      const currentTheme = this.theme();
      document.documentElement.setAttribute('data-theme', currentTheme);
      localStorage.setItem('theme', currentTheme);
    });
  }

  toggleTheme() {
    this.theme.update((t) => (t === 'dark' ? 'light' : 'dark'));
  }
}
