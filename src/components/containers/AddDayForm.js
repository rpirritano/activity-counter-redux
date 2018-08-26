import AddDayForm from '../ui/AddDayForm'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { addDay, suggestResortNames, clearSuggestions } from '../../actions'

const mapStateToProps = (state, props) =>
	({
		suggestions: state.resortNames.suggestions,
		fetching: state.resortNames.fetching,
		router: props.router
	})

//destructure to pull these from day, so dont have to use day.resort, etc.
const mapDispatchToProps = dispatch =>
	({
		onNewDay({resort,date,powder,backcountry}) {
			dispatch(
				addDay(resort, date, powder, backcountry)
			)
		},
		onChange(value) {
			if (value) {
				dispatch(
					suggestResortNames(value)
				)
			} else {
				dispatch(
					clearSuggestions()
				)
			}
		},
		onClear() {
			dispatch(
				clearSuggestions()
			)
		}
	})

const Container = connect(mapStateToProps, mapDispatchToProps)(AddDayForm)

//still need withRouter so:
export default withRouter(Container)


/*
//withRouter is also a container that will add the router to its components
//the form needs the router so that it can navigate the user back to the homepage when no more days are added
//need to also map all the suggestions and the fetching state to the form

export default withRouter(
    (props) =>
        <AddDayForm suggestions={[]}
                fetching={false}
                router={props.router}
                onNewDay={day => console.log('todo: add day', day)}
                onChange={value => console.log('todo: suggest', value)}
                onClear={() => console.log('todo: clear suggestions')} />
)
*/
