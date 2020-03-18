import { Component, OnInit, Output, EventEmitter, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() openMenu: EventEmitter<any> = new EventEmitter();
  @HostBinding('class') componentCssClass;

  
  constructor(public overlayContainer: OverlayContainer) { }

  onSetTheme(theme) {
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
  }
 
  ngOnInit(): void {
  }

  toggleMenu(){
    this.openMenu.emit();
  }

}
