//a container component using the connect function that will map the state of errors to the ShowErrors, and
//it will also map the dispatch function to any onClearError events.

//in console can create an error to test with:
//store.dispatch({ type: "ADD_ERROR", payload: "Something went wrong"})


import ShowErrors from '../ui/ShowErrors'
import { clearError } from '../../actions'
import { connect } from 'react-redux'

const mapStateToProps = state => {

	return {
		errors: state.errors
	}
}

const mapDispatchToProps = dispatch => {

	return {
		onClearError(index) {
			dispatch(
				clearError(index)
			)
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowErrors)

//	<ShowErrors errors={['sample error']}
//						  onClearError={index => console.log('todo: clear error at', index)} />
