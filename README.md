# PRP Assignment 5
Demo: https://nickchen120235.github.io/prp-5

## Goal
> In this assignment, you are required to design and implement an online interactive visualization for a chosen dataset. This Assignment is an enhanced version of Assignment 4. But the data ranges from 1990 to 2015.

## Used Library
- [TypeScript](https://www.typescriptlang.org/) [React](https://reactjs.org/)
- [Material-UI](https://material-ui.com/)
- [Victory](https://formidable.com/open-source/victory/)
- [React Router](https://reactrouter.com/)

## File Structure
Source code are under `./src` folder
- `App.tsx`: Layout and routing
- `/components`: Graphs and dialogs
- `/pages`: Pages
- `/utils`: Data and tools
  - `country.tsx`: A map between country code and country name.
  - `data.tsx`: The original data.
  - `series.tsx`: A map between series code and series name.
  - `styles.tsx`: Provide styling using toolkit from Material-UI
  - `utils.tsx`: Helper functions

## Developing
- Clone this project: <code>git clone https://github.com/nickchen120235/prp-5.git</code>
- Install required libraries: <code>npm install</code>
- Run the development server: <code>npm start</code> then visit http://localhost:3000
- Create production build: <code>npm run build</code>