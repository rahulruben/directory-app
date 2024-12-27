import { Component } from '@angular/core';
import { TreeContainerComponent } from './components/tree-container/tree-container.component';
import '@fontsource/roboto'; // Defaults to weight 400
import '@fontsource/roboto/400.css'; // Specify weight

@Component({
  selector: 'app-root',
  imports: [TreeContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
