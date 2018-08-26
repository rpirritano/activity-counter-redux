//ALL these in container files will wrap around the associated component and feed data to it
//want to create a container that will map the data from our store to the properties of ie, SkiDayCount
import SkiDayCount from '../ui/SkiDayCount'
import { connect } from 'react-redux'
//Connect creates a component that grabs the store out of state and can map state from the store to properties
//in a child component.

const mapStateToProps = (state) => {

	return {
		total: state.allSkiDays.length,
		powder: state.allSkiDays.filter(day => day.powder).length,
		backcountry: state.allSkiDays.filter(day => day.backcountry).length
	}
}

const Container = connect(mapStateToProps)(SkiDayCount)

//	<SkiDayCount total={100} powder={25} backcountry={10} />

export default Container
