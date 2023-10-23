import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MenuModule } from 'primeng/menu';
@NgModule({
  declarations: [NavBarComponent],
  imports: [SharedModule, MenuModule],
  exports: [NavBarComponent],
})
export class NavBarModule {}
