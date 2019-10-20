# How to contribute

Clone the repo

```bash
git clone https://github.com/lightning-buzz/launchpad.git
```

Install the dependencies

```bash
npm i
```

move into the launchpad folder and launch VS Code

```bash
cd launchpad/
code .
```

To start the development server running:

```bash
npm start
```

It will start angular dev server. Simply navigate to [localhost:4200](localhost:4200) to see the project and start tweaking it! The app will automatically reload if you change any of the source files.

## Conventions

### Branching

Working on a feature **require** that you create a new branch and commit only to that branch using the following code:

```bash
git branch new-branch
git checkout new-branch
```

### Commits

Commits should only be done using **npm run commit** to ensure the best commit quality possible.

## Pushing your branch online

You should then push your changes to the corresponding branch on Github using:

```bash
git push --set-upstream origin new-branch
```

## Creating a PR

Once the functionnality is either **ready** to be deployed or **you need peer review**, you should create a PR on Github. This goes through the graphical interface:

1. Online, navigate to the repository [https://github.com/lightning-buzz/launchpad](https://github.com/lightning-buzz/launchpad)
2. Go to the "Pull requests" tab
3. Hit the "New pull request" green button
4. Select the branch you want to merge in the master branch and create the PR, we will review and eventually approve it !

## Angular specifics

### Generating new components

To use the angular CLI without having to install it globally, simply type `npx` before any command:

```bash
npx ng generate component path/to/component-name
```

You can also use:

```bash
npx ng generate [directive|pipe|service|class|guard|interface|enum|module]
```

### Building

Run

```bash
npx ng build
```

to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Testing

#### Running unit tests

Run

```bash
npx ng test
```

to execute the unit tests via [Karma](https://karma-runner.github.io).

#### Running end-to-end tests

Run

```bash
npx ng e2e
```

to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use

```bash
npx ng help
```

or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
