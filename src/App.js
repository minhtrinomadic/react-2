
import './App.css';
import { lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


//Pages
// import Home from './pages/Home'
// import Courses from './pages/Courses'
// import Course from './pages/Course'
// import AdminCourses from './pages/AdminCourses';
// import AdminUser from './pages/AdminUser';
import LoginPgae from './pages/LoginPage'

//Layout 
import AppLayout from './Layout/AppLayout';
import AdminLayout from './Layout/AdminLayout';

//Custom Router
import AdminRoute from './auth/AdminRoute';

// SỬ dụng lazyload 
const Home = lazy (()=> import('./pages/Home'));
const Courses = lazy (()=> import('./pages/Courses'));
const Course = lazy (()=> import('./pages/Course'));
const AdminCourses = lazy(()=> import('./pages/AdminCourses'));
const AdminUser = lazy(()=> import('./pages/AdminUser'))

function App() {
  return (
    <Suspense fallback={<div>Loadding....</div>}>
    <BrowserRouter>
      <Switch>
        {/* Route Admin */}
        <Route path="/admin">
          
            <AdminLayout>
              <Switch>
                <Redirect exact from="/admin" to="/admin/courses"/>

                <AdminRoute path="/admin/courses">
                  <AdminCourses/>
                </AdminRoute>

                <AdminRoute path="/admin/user">
                  <AdminUser/>
                </AdminRoute>

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
    </Suspense>
  );
}

export default App;
