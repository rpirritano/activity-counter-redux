import C from './constants'
import React from 'react'
import { render } from 'react-dom'
import routes from './routes'
import sampleData from './initialState'
import storeFactory from './store'  //THIS is where we integrate the store
import { Provider } from 'react-redux' //tool provided to integrate/incorporate the store into the routes
//This component is for wrapping around any component tree and place the store in Context.
//Context is a feature, that will allow any child React component to interact with the store, if they want to.
import { addError } from './actions'

const initialState = (localStorage["redux-store"]) ?
    JSON.parse(localStorage["redux-store"]) :
    sampleData

const saveState = () =>
    localStorage["redux-store"] = JSON.stringify(store.getState())

//creating funcntion to handle errors and will pass it the the addEventListener  so we can save as log in state
const handleError = error => {
  store.dispatch(
    addError(error.message)
  )
}

//create instance of store and give it our initialState
const store = storeFactory(initialState)

//use the saveState function and wire up a listener
store.subscribe(saveState)

window.React = React
//for development pusposes, add to global window in order to interect via console
window.store = store

//add event listener to listen for errors
window.addEventListener("error", handleError)

//wrap the routes inside the provider component provided by react-redux
render(
	<Provider store={store}>
	   {routes}
	</Provider>,
  document.getElementById('react-container')
)

//to test the addError and addEventListener for the error
//foo = bar 
