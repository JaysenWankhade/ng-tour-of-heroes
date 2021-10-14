import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.css'],
})
export class BottomNavComponent implements OnInit {
  show: boolean = false;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    this.compareRoute();
  }

  compareRoute(): void {
    this.location.onUrlChange((url, data) => {
      if (url == '/detail/14') {
        this.show = true;
      } else {
        this.show = false;
      }
    });
  }
}
