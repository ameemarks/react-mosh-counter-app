# Course available [here](https://www.youtube.com/watch?v=Ke90Tje7VS0).

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### NOTES for my own use:

1h4min21 - `this` in component

```
class Counter extends Component {
    state = {
        count: 0
    }

    handleIncrement() {
        // this is undefined; no direct access to the state property
        console.log(this.state.count)
        // obj.method() -> when called as object method, this is the reference to the object
        // function() -> when called as standalone fn, this is the reference to the Window object / in strict mode: undefined
    }

    render() {
        return (
          <div>
            <button
                onClick={this.handleIncrement}    // PASS the reference to the method
            >
          </div>
        )
    }
}
```


1h5min40 - binding `this` by calling constructor of parent component: `super()`

```
class Counter extends Component {
    state = {
        count: 0
    }

    constructor() {
        // here there is access to this
        // first need to call the constructor of parent class with:
        super();
        console.log(this)   // access to the Counter object
        // set the value of this for the new instance of handleIncrement fn
        this.handleIncrement = this.handleIncrement.bind(this);
        // need to re-bind every method manually !!!
    }

    handleIncrement() {
        console.log("Increment Clicked", this);
    }

    render() {
        return (
          <div>
            <button
                onClick={this.handleIncrement}    // PASS the reference to the method
            >
          </div>
        )
    }
}
```

1h7min41 - binding `this` by converting the fn into ()=>{}

```
class Counter extends Component {
    state = {
        count: 0
    }

    handleIncrement = () => {
        // ()=>{} don't rebind this; they inherit it
        console.log("Increment Clicked", this);
    }

    render() {
        return (
          <div>
            <button
                onClick={this.handleIncrement}    // PASS the reference to the method
            >
          </div>
        )
    }
}
```

1h8min47 - do not modify the state DIRECTLY!

```
class Counter extends Component {
    state = {
        count: 0
    }

    handleIncrement = () => {
        // NOPE! the value is incremented, but react is not aware - no view update
        this.state.count++;
    }

    render() {
        return (
          <div>
            <button
                onClick={this.handleIncrement}    // PASS the reference to the method
            >
          </div>
        )
    }
}
```
1h9min15 - modify state via Component.setState method

```
class Counter extends Component {
    state = {
        count: 0
    }

    handleIncrement = () => {
         // USE one of the Component methods instead and tell react explicitly what is changed 
        /*(it tells react that the state is modified: react checks which exact part 
        *of state is changed and updates DOM in sync with virtual DOM)
        */
        // pass an object which properties will be merged with state obj or overwrite the same state obj properties, if they already exist
        this.setState({count: this.state.count + 1})
    }

    render() {
        return (
          <div>
            <button
                onClick={this.handleIncrement}    // PASS the reference to the method
            >
          </div>
        )
    }
}
```

1h10min55 - update the state

# react-mosh-counter-app
