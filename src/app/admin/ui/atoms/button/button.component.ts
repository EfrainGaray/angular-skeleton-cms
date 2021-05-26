import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() inner: string = 'Sin titulo';
  @Input() type: string = 'button';
  @Input() route: string[] = [''];
  @Input() classes: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

}
