import { Component, Renderer2, ElementRef, AfterViewInit, NgZone } from '@angular/core';
declare var Isotope: any; // Declare Isotope

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements AfterViewInit {

  constructor(private ngZone: NgZone, private renderer: Renderer2, private el: ElementRef) { }

  ngAfterViewInit(): void {

    // Programmatically click the "Show All" tab
    // Programmatically click the "Show All" tab
    setTimeout(() => {
      const showAllTab = this.el.nativeElement.querySelector('.showAll');
      if (showAllTab) {
        showAllTab.click();
      } else {
        console.error('Show All tab not found');
      }
    }, 200);


    // Your JavaScript code
    const elem = document.querySelector('.event_box') as HTMLElement;
    const filtersElem = document.querySelector('.event_filter') as HTMLElement;

    if (elem) {
      const rdn_events_list = new Isotope(elem, {
        itemSelector: '.event_outer',
        layoutMode: 'masonry'
      });


      // Set the initial filter to '*'
      rdn_events_list.arrange({ filter: '*' });

      if (filtersElem) {

        filtersElem.addEventListener('click', (event) => {
          if (!(event.target as HTMLElement).matches('a')) {
            return;
          }

          const filterValue = (event.target as HTMLElement).getAttribute('data-filter');
          rdn_events_list.arrange({
            filter: filterValue
          });

          const activeFilter = filtersElem.querySelector('.is_active');
          if (activeFilter) {
            activeFilter.classList.remove('is_active');
          }

          (event.target as HTMLElement).classList.add('is_active');
          event.preventDefault();
        });
      }
    }
  }

}
