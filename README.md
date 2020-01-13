# Sparkle
A repository for Sparkle, Oslo Prides React component library.

## How to use

### Install
`npm install @oslopride/sparkle`


### Use
```jsx
import { Button } from '@oslopride/sparkle';

const YourCoolComponent = () => <Button>This is a button!</Button>
```

## Libraries
Sparkle's main setup to create components revolves around [styled-components](https://www.styled-components.com/) and [Styled System](https://styled-system.com/). Styled System is used to extend every component with utility props that uses values set in the theme file(s). This makes it possible to have a defined list of spacing values that can be consistently used across the components, all centralized in one place. See the [Styled System API](https://styled-system.com/api) for example usage of the various utlity props.

## CI/CD
There is an automated Github Action workflow set up that will do checks for any pull request. It uses [Semantic Release](https://semantic-release.gitbook.io/semantic-release/) to do automatic semantic versioning of releases. After a successful merge, the workflow will create and release a new NPM package in the Github registry.

## Contributing
1. `git clone git@github.com:oslopride/sparkle.git && cd sparkle`
2. `yarn`
3. Create a new branch. We are not using any fancy feature branches or the likes, so name them whatever makes sense. Fixing a problem with the Button component? `git checkout -b fix-button` will probably suffice!
4. Just run `yarn run plop` , write the name of you component and you will get the files you need. Now do your work!
5. Do your best attempt to adhere to the commit guidelines by using the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) structure for your commit messages. If you never used it before it might be a bit confusing, but don't worry, it's pretty easy to get used to!
We use semantic versioning for our library, which means a version like `2.4.1` means `2` is the MAJOR version, `4` is the MINOR version, and `1` is the PATCH version. When adding a new **feature**, the MINOR version will be increased. This is the most common version increase. **Fixing** something will increase the PATCH version. A MAJOR version should not occur very often, and is mostly aimed at when we make any breaking changes to our public API, e.g. we totally change how a component works, the props it takes, or something similar.
 So, how does this work in practice? It's as simple as when you create a new **feature**, make your commit message like this example: `feat(Button): add cool prop`. **Fixing** something: `fix(Button): make cool prop optional`.
6. `yarn test` to make sure you didn't break any tests.
7. Push your branch and do a pull request!

Confused about any step, intimidated or not sure how to do something? Just ask your questions to anyone on our Slack channel #designsystem, or send a private message to Roger, Eullin or Siddise. We are all pretty nice and helpful, promise! 🧙‍♀️
