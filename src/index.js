import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
  return (
	<Router>
		<div>
			<Route exact path="/" component={Login}/>
			<Route path="/signup" component={Signup}/>
		</div>
	</Router>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();