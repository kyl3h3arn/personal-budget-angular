import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  // ✅ Import RouterModule

@Component({
  selector: 'pb-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],  // ✅ Add RouterModule here
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {}
