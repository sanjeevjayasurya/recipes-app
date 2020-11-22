## **Creating a React app:**
- ### Creating the project
   - Run `npm init -y` to create package.json and add all defaults
   - Install react , react-dom and serve
   - Organize files into a particular structure
- ### Break components into modules
    - Create a separate index.js to render the final UI
    - Break the code into its own components ( For example: Ingredients, Recipes, Instrcutions etc)
    - Add hardcoded data in recipes.json folder
- ### Create the webpack build
    - Run   
    `npm install --save-dev webpack webpack-cli`
    - Setup webpack.config.js
    - Install necessary babel dependenices   
    `npm install babel-loader @babel/core --save-dev`
    - Install babel presets   
    `npm install @babel/preset-env @babel/preset-react --save-dev`
    - Place index.html in dist