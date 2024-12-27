import { Component, Input } from '@angular/core';
import { TreeNode } from '../../interfaces/tree-node.interface';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrl: './tree-node.component.scss',
})
export class TreeNodeComponent {
  @Input() node!: TreeNode;

  onExpandCollapseAction(): void {
    this.node.isExpanded = !this.node.isExpanded;
  }
}
