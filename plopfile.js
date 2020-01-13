'use strict';

export default function(plop) {
  plop.setGenerator('create sparkle component', {
    description: 'Plopfile for scaffolding a new component',
    prompts: [
      {
        type: 'input',
        name: 'component',
        message: 'Name of the new component: ',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{component}}/{{component}}.stories.mdx',
      },
      {
        type: 'add',
        path: 'src/components/{{component}}/{{component}}.test.tsx',
      },
      {
        type: 'add',
        path: 'src/components/{{component}}/index.tsx',
      },
    ],
  });
}
