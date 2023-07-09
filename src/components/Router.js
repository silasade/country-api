import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

function Router  () {
    return (
      <Router>
        <Route exact path="./Country.js" component={Country} />
        
        
      </Router>
    );
  };
export default Router