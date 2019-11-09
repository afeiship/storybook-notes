# get-started

1. Add dependencies
   1. @storybook/react
   ```shell
   npm install @storybook/react --save-dev
   ```
   2.Add react, react-dom, @babel/core, and babel-loader
   ```shell
    npm install react react-dom --save
    npm install babel-loader @babel/core --save-dev 
   ```
2. Add an npm script
   ```json
    {
      "scripts": {
        "storybook": "start-storybook"
      }
    }
   ```
3. Create the config file
   1. To do that, create a file at .storybook/config.js with the following content:
   ```js
    import { configure } from '@storybook/react';
    configure(require.context('../src', true, /\.stories\.js$/), module);
   ```
4. Write your stories
   ```js
    import React from 'react';
    import { Button } from '@storybook/react/demo';
    export default { title: 'Button' };
    export const withText = () => <Button>Hello Button</Button>;
    export const withEmoji = () => (
      <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
    );
   ```

   ~~~
   results:
    Button
    ├── With Text
    └── With Emoji
   ~~~
5. Run it
   ```shell
   npm run storybook
   ```

## require.context
- https://www.jianshu.com/p/c894ea00dfec
