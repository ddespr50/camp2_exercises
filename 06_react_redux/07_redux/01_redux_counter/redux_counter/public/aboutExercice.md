The Story So Far
Before we get into how to actually update the counter, let’s look at what we’ve done up til now:

We wrote a mapStateToProps function that does what the name says: transforms the Redux state into an object containing props.

We connected the Redux store to our Counter component with the connect function from react-redux, using the mapStateToProps function to configure how the connection works.

We created a reducer function to tell Redux what our state should look like.

We used the ingeniously-named createStore function to create a store, and passed it the reducer.

We wrapped our whole app in the Provider component that comes with react-redux, and passed it our store as a prop.

The app works flawlessly, except the fact that the counter is stuck at 42.
