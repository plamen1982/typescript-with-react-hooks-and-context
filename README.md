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

  "editor.fontLigatures": true, "editor.fontFamily": "FiraCode-Retina"
    - https://superuser.com/questions/1356517/use-a-font-in-vscode
    - https://github.com/wix/import-cost
    - https://github.com/prettier/prettier-vscode
  ### Shortcuts
    - ctrl + shift + p - open vs code plugin search
    - ctrl + shift + ` - toggle terminal 
    - ctrl + shift + 5 - separate terminal
    - ctrl + shift + c - open terminal out of vs code
    - ctrl + shift + f - search in the whole code

## What is Typescript and why should you use it 
###  typing system in JS, less tests, autocomplete and popups with hints
#### Simple example
  -  let a: number = 1;
  -  let b: number = 2;

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
