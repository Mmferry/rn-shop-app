# React native Shop app
React native (Ios - Android)
## Get Started

1. **Install [Node @latest](https://nodejs.org)** or newer. Need to run multiple versions of Node? Use [nvm](https://github.com/creationix/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows)
2. **Navigate to this project's root directory on the command line.**
3. **Install Node Packages.** - `npm install`
4. Having issues? See below.

## Having Issues? Try these things first:

1. Run `npm install` - If you forget to do this, you'll get an error when you try to start the app later.
2. Don't run the project from a symbolic link. It will cause issues with file watches.
3. Delete any .eslintrc in your user directory and disable any ESLint plugin / custom rules within your editor since these will conflict with the ESLint rules defined in the course.
4. On Windows? Open your console as an administrator. This will assure the console has the necessary rights to perform installs.
5. Ensure you do not have NODE_ENV=production in your env variables as it will not install the devDependencies. To check run this on the command line: `set NODE_ENV`. If it comes back as production, you need to clear this env variable.
6. Nothing above work? Delete your node_modules folder and re-run npm install.

### Production Dependencies

| **Dependency**   | **Use**                                              |
| ---------------- | ---------------------------------------------------- |
| react            | React library                                        |
| react-native     | React mobile library                                 |
| react-redux      | Connects React components to Redux                   |
| react-router-dom | React library for routing                            |
| redux            | Library for unidirectional data flows                |
| expo             | Library for unidirectional data flows                |
| moment           | convert date object                                  |
| @react-navigation| Library for naviagtion(drawer - native - stack)      |


### Development Dependencies

| **Dependency**                  | **Use**                                                          |
| ------------------------------- | ---------------------------------------------------------------- |
| @babel/core                     | Transpiles modern JavaScript so it runs cross-browser            |
| babel-preset-expo               |                                                                  |
| redux-devtools-extensiono       |                                                                  |


Demo from app

![alt text](https://github.com/Mmferry/rn-meals-app/blob/master/assets/Screen%20Recording%201441-09-24%20at%201.38.28%20PM.gif)
