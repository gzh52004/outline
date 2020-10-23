import React from 'react'
import {withRouter,useHistory,useLocation,useRouteMatch,useParams} from 'react-router-dom'
import Hook from  './components/Hook'

function App(props){
    const history = useHistory();
    console.log('App.props',props,history)
    return (
        <div>
            App

            <Hook/>
        </div>
    )
}
// App = withRouter(App);
export default App