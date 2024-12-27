import { Component } from '@angular/core';
import { TreeContainerComponent } from './components/tree-container/tree-container.component';

@Component({
  selector: 'app-root',
  imports: [TreeContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
