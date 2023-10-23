import { Component } from '@angular/core';
import { MENU } from 'src/app/constants';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  public teste = [1, 2, 3];
  public menu = MENU;
}
