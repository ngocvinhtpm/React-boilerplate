import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menu from '../../components/Header/Menu';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from '../Home/Home';
import Contact from '../Contact/Contact';


class Header extends React.Component {
    render() {
      return (
        <div>
          <Router>
              <AppBar position="static" color="default">
                  <Toolbar>
                      <Typography variant="h6" color="inherit">
                          DEMO REACT
                      </Typography>
                      <Typography variant="h6" color="inherit">
                        <Menu />
                      </Typography>
                  </Toolbar>
                
              </AppBar>  
              <Route exact path="/" component={Home} />
              <Route path="/contact" component={Contact} />
            </Router>
        </div>
      );
    }
  }
  
  export default Header;
  
