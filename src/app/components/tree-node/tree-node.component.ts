import { Component, Input } from '@angular/core';
import { TreeNode } from '../../interfaces/tree-node.interface';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFolder, faFolderOpen, faFileLines, faCirclePlus, faCircleMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tree-node',
  imports: [FontAwesomeModule],
  templateUrl: './tree-node.component.html',
  styleUrl: './tree-node.component.scss',
})
export class TreeNodeComponent {
  @Input() node!: TreeNode;
  faFolder = faFolder;
  faFolderOpen = faFolderOpen;
  faFileLines = faFileLines;
  faCirclePlus = faCirclePlus;
  faCircleMinus = faCircleMinus

  onExpandCollapseAction(): void {
    this.node.isExpanded = !this.node.isExpanded;
  }
}
