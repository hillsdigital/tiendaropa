import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activateAnimations();
      }
    });
  }

  activateAnimations() {
    const navLinks = document.querySelectorAll('.nav-links li');
    navLinks.forEach((link, index) => {
      setTimeout(() => {
        link.classList.add('active');
      }, index * 100);
    });
  }
}
