import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.css'],
})
export class BottomNavComponent implements OnInit {
  show: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.location.subscribe((val) => {
      this.compareRoute();
    });
    this.router.events.subscribe((event) => {
      this.compareRoute();
    });
  }

  compareRoute(): void {
    /*this.location.onUrlChange((url, data) => {
      if (url == '/detail/14') {
        this.show = true;
      } else {
        this.show = false;
      }
    });*/
    console.log(this.location.path());

    if (
      this.location.path().includes('/detail') ||
      this.location.path().includes('/about')
    ) {
      this.show = true;
    } else {
      this.show = false;
    }
    /*if (
      this.location.isCurrentPathEqualTo('/detail/14') ||
      this.location.isCurrentPathEqualTo('/detail/15')
    ) {
      this.show = true;
    } else {
      this.show = false;
    }*/
  }
}
