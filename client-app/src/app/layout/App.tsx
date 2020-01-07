import React, { Fragment } from 'react';
import './style.css';
import { Container} from 'semantic-ui-react';
import NavBar from '../../features/nav/NavBar';
import ActivitiyDashboard from '../../features/activities/dashboard/ActivityDashboard';
import ActivitiyDetails from '../../features/activities/details/ActivityDetails';
import {observer} from 'mobx-react-lite';
import { Route, withRouter, RouteComponentProps, Switch } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import ActivityForm from '../../features/activities/form/ActivityForm';
import NotFound from './NotFound';
import {ToastContainer } from 'react-toastify';
 


const App : React.FC<RouteComponentProps>  = ({location}) => {   
      return (
        <Fragment>
          <ToastContainer position='bottom-right'/>
          <Route exact path='/' component={HomePage}/>
          <Route path={'/(.+)'} render={() => (
              <Fragment>
              <NavBar/>
              <Container style={{marginTop: '7em'}}>            
                <Switch>
                  <Route exact path='/activities' component={ActivitiyDashboard}/> 
                  <Route path='/activities/:id' component={ActivitiyDetails}/>
                  <Route 
                  key={location.key} 
                  path={['/createActivity','/manage/:id']} 
                  component={ActivityForm}/>  
                  <Route component={NotFound}/>
                </Switch>                
              </Container>  
              </Fragment>
          )}/>                        
        </Fragment>
      );      
}

export default withRouter(observer(App));
