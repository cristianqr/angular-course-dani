import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-group-box',
  templateUrl: './group-box.component.html',
  styleUrls: ['./group-box.component.scss']
})
export class GroupBoxComponent implements OnInit {
  @Input() header: string;
  constructor() { }

  ngOnInit() {
  }

}
