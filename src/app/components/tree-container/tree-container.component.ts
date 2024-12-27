import { Component } from '@angular/core';
import { TreeNodeComponent } from '../tree-node/tree-node.component';
import { TreeNode } from '../../interfaces/tree-node.interface';
import { NgFor } from '@angular/common';
import { MOCK_FOLDER_STRUCTURE } from '../../mocks/mocks';

@Component({
  selector: 'app-tree-container',
  imports: [TreeNodeComponent, NgFor],
  templateUrl: './tree-container.component.html',
  styleUrl: './tree-container.component.scss',
})
export class TreeContainerComponent {
  folders: TreeNode[] = MOCK_FOLDER_STRUCTURE;
}
