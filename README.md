# Tree View Component

This project demonstrates a Tree View Component implemented in Angular. It allows hierarchical data to be displayed with expandable and collapsible nodes.

## Features

- **Dynamic Tree Rendering:** The component recursively renders nodes based on the folder structure.
- **Expandable/Collapsible Nodes:** Nodes with children can be expanded or collapsed using a button.
- **Reusability:** The `TreeNodeComponent` is designed to be reusable for recursive tree rendering.

## Project Structure

```plaintext
src/
├── app/
│   ├── tree-container/
│   │   ├── tree-container.component.ts
│   │   ├── tree-container.component.html
│   │   ├── tree-container.component.scss
│   ├── tree-node/
│   │   ├── tree-node.component.ts
│   │   ├── tree-node.component.html
│   │   ├── tree-node.component.scss
├── interfaces/
│   ├── tree-node.interface.ts
├── mocks/
│   ├── mocks.ts
```

## Components

### `TreeContainerComponent`

The main container that holds the root level of the tree.

#### Properties:
- `folders`: An array of `TreeNode` objects representing the root folders.

#### Template:
```html
<div class="tree-container">
  @for(node of folders; track node.name) {
  <app-tree-node [node]="node"></app-tree-node>
  }
</div>
```

### `TreeNodeComponent`

A recursive component that represents a single tree node.

#### Inputs:
- `node`: The `TreeNode` object for the current node.

#### Methods:
- `onExpandCollapseAction()`: Toggles the `isExpanded` property of the node.

#### Template:
```html
<div class="tree-node">
  {{ node.name }}
  @if (node.children.length) {
  <button class="expandable-action-btn" (click)="onExpandCollapseAction()">
    {{ node.isExpanded ? "[-]" : "[+]"}}
  </button>
  } @if(node.isExpanded) {
  <div class="tree-children">
    @for (child of node.children; track child.name) {
    <app-tree-node [node]="child"></app-tree-node>
    }
  </div>
  }
</div>
```

## Interface

### `TreeNode`

Defines the structure of a node in the tree.

#### Properties:
- `name: string`: The name of the node.
- `children: TreeNode[]`: The child nodes.
- `isExpanded: boolean`: Whether the node is expanded.

```typescript
export interface TreeNode {
  name: string;
  children: TreeNode[];
  isExpanded: boolean;
}
```

## Mock Data

A sample folder structure is provided for demonstration.

```typescript
export const MOCK_FOLDER_STRUCTURE = [
  {
    name: 'Company Structure',
    children: [
      {
        name: 'Engineering Department',
        children: [
          {
            name: 'Frontend Team',
            children: [],
            isExpanded: false,
          },
          {
            name: 'Backend Team',
            children: [],
            isExpanded: true,
          },
        ],
        isExpanded: true,
      },
      {
        name: 'Marketing Department',
        children: [],
        isExpanded: false,
      },
    ],
    isExpanded: true,
  },
  {
    name: 'Project Management',
    children: [
      {
        name: 'Agile Team',
        children: [],
        isExpanded: false,
      },
    ],
    isExpanded: false,
  },
];
```

## Usage

### Importing Components

Ensure the components are declared in the `AppModule` or any other module.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TreeContainerComponent } from './tree-container/tree-container.component';
import { TreeNodeComponent } from './tree-node/tree-node.component';

@NgModule({
  declarations: [TreeContainerComponent, TreeNodeComponent],
  imports: [BrowserModule],
  bootstrap: [TreeContainerComponent],
})
export class AppModule {}
```

### Adding the Component

Use the `app-tree-container` selector in your main template to render the tree.

```html
<app-tree-container></app-tree-container>
```

## Styling

The `tree-container` and `tree-node` classes are available for custom styling. Add CSS rules in the corresponding `.scss` files.

## Running the Application

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the application:
   ```bash
   npm start
   ```
4. Open the browser at `http://localhost:4200` to view the tree view.

## License

This project is licensed under the MIT License.
