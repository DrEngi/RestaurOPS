import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  
  @Input() id = '';
  @Input() image = '';
  @Input() name = '';
  @Input() price = -1;
  // @Input() quantity = 1;
  

  constructor() { }

  ngOnInit(): void {
  }

}
