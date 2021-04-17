
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

//Pages
import Home from './pages/Home'
import Courses from './pages/Courses'
import Course from './pages/Course'
import LoginPgae from './pages/LoginPage'

//Layout 
import AppLayout from './Layout/AppLayout';
import AdminLayout from './Layout/AdminLayout';
import AdminCourses from './pages/AdminCourses';
import AdminUser from './pages/AdminUser';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* Route Admin */}
        <Route path="/admin">
          
            <AdminLayout>
              <Switch>
                <Redirect exact from="/admin" to="/admin/courses"/>

                <Route path="/admin/courses">
                  <AdminCourses/>
                </Route>

                <Route path="/admin/user">
                  <AdminUser/>
                </Route>

              </Switch>
            </AdminLayout>
        </Route>

        {/* Route Main */}
        <Route path="/">
          <AppLayout>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/courses/:category">
                <Courses />
              </Route>
              <Route path="/course/:courseId">
                <Course />
              </Route>
              <Route path="/login">
                <LoginPgae/>
              </Route>
              <Route path="*">
                <div>Page not found</div>
              </Route>
             
            </Switch>
          </AppLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
