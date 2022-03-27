import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  
  @Input() image = '';
  @Input() name = '';
  @Input() price = -1;
  

  constructor() { }

  ngOnInit(): void {
  }

}
