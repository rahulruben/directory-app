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
