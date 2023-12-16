import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,  MatTabsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
