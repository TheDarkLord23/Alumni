import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  private isDropdownOpen = false;

  constructor(private renderer: Renderer2, private router: Router) {}

  ngOnInit() {
    const btnNavEl = document.querySelector(
      '.btn-mobile-nav'
    ) as HTMLButtonElement;
    const headerEl = document.querySelector('.header') as HTMLElement;

    // Initialize with the dropdown closed
    this.renderer.removeClass(headerEl, 'nav-open');

    btnNavEl.addEventListener('click', () => {
      this.isDropdownOpen = !this.isDropdownOpen;
      if (this.isDropdownOpen) {
        headerEl.classList.add('nav-open');
      } else {
        headerEl.classList.remove('nav-open');
      }
    });

    // Close dropdown and navigate when a link is clicked
    const dropdownLinks = document.querySelectorAll('.main-nav-list a');
    dropdownLinks.forEach((link) => {
      link.addEventListener('click', () => {
        this.isDropdownOpen = false;
        headerEl.classList.remove('nav-open');
        // Get the routerLink attribute from the clicked link
        const routerLink = link.getAttribute('routerLink');
        // Navigate to the specified route
        if (routerLink) {
          this.router.navigateByUrl(routerLink);
        }
      });
    });
  }
}
