import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-container-call',
  templateUrl: './container-call.component.html',
  styleUrls: ['./container-call.component.scss']
})
export class ContainerCallComponent implements OnInit {
  @Input() innerH1 = '';
  @Input() innerP = '';
  constructor() { }

  ngOnInit(): void {
  }

}
