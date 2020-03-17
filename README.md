# Typescript-with-react-hooks-and-context

# Course is absolutely free and it is only 3.5 hours: https://www.udemy.com/course/typescript-with-react-hooks-and-context/

## Tools and plugins used

### Plugins

    - https://code.visualstudio.com/
    - https://github.com/sdras/night-owl-vscode-theme
    - https://github.com/alefragnani/vscode-bookmarks
    - https://github.com/CoenraadS/Bracket-Pair-Colorizer-2
    - https://github.com/dsznajder/vscode-es7-javascript-react-snippets - 2:19 example -> 1.3 - rfc, cmmb, cl
    - https://github.com/tonsky/FiraCode
      - ctrl + shift + p -> settings.json - add -> "editor.fontFamily": "Fira Code",

"editor.fontLigatures": true, "editor.fontFamily": "FiraCode-Retina" - https://superuser.com/questions/1356517/use-a-font-in-vscode - https://github.com/wix/import-cost - https://github.com/prettier/prettier-vscode

### Shortcuts

    - ctrl + shift + p - open vs code plugin search
    - ctrl + shift + ` - toggle terminal
    - ctrl + shift + 5 - separate terminal
    - ctrl + shift + c - open terminal out of vs code
    - ctrl + shift + f - search in the whole code

## What is Typescript and why should you use it

### typing system in JS, less tests, autocomplete and popups with hints

#### Simple example

- let a: number = 1;
- let b: number = 2;

- const sumAandB = (a: number, b: number): number => {
  return a + b;
  }

### 12 basic types in Typescript - https://www.typescriptlang.org/docs/handbook/basic-types.html

- boolean
- number
- string
- array - [1, 2, 3]
- tuple - [number, string, number] - ex: let arr: [number, string, number] = [1, '3', 4];
- enum - Outcome {Win, Lose, Draw}
- any - Dynamic type (like normal js)
- void - a function that doesn't return
- null - something doesn't exist
- undefined - unassinged variable
- never - function that never returns
- object - non-primitive types

## Adding typescript to create-react-app

    -  create new project with npx - npx create-react-app my-app
    -  npm i typescript @types/node @types/react-dom
    -  rename App.js to App.tsx
    -  start your project -> npm start -> tsconfig.json in main root of the project is for all typescript configurations -> create one if  it's not generated

## Adding typescript to react with babel and webpack

    - mkdir react-ts-webpack -> cd react-ts-webpack
    - npm init -y
    - mkdir src -> cd src -> In src folder create
      -  index.tsx

- in main root of the project create files:
- .babelrc - babel is going to translate our typescript code to javascript code
- index.html - in vs code -> ! + tab - generate simple html5 file and it comes from emet plugin that comes with vs code
- next step install all dependencies for normal react app:
- npm i @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript webpack webpack-cli webpack-dev-server babel-loader react react-dom @types/react @types/react-dom
- now we can start our app: npm start - and new window in port 5000 should be opened

### useState with Typescript

- const [value, setValue] = useState<string>('') - where the string can be any of all basic types and any other type so called generics
- const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => { e.preventDefault() setValue('')} - how to handle form with React and Typescript
- type FormElem = React.FormEvent<HTMLFormElement> - creating an alias and the above example can be: const handleSubmit = (e: FormElem): void => { e.preventDefault() setValue('')}

### The difference between type and interface

1. type is reference to another type
2. interface create a new type, that has properties from particular type: ex => interface ITodo { text: string complete: boolean }, usage -> const [todos, setTodos] = useState<ITodo[]>([])
3. interface can be extended, types cannot: ex: -> interface ITodo2 extends ITodo { tags: string[] }, this interface ITodo2 will have all the properties of ITodo + the new one tags
4. addTodo function with interface ITodo ex: -> const newTodos: ITodo[] = [...todos, { text, complete: false }], where todos is an array of ITodos see point 2. usage of interface
