import React from 'react';
import Layout from './layout'
import Home from './pages/home/Home';
import Sponsors from './pages/sponsors/Sponsors'
import {Route} from 'react-router-dom'
import Products from './pages/products/Products';
import Contact from './pages/contact';



function App() {
  return (
    <div className="App">
     <Layout> 
       <Route exact path="/" component={Home}/>
       <Route exact path="/Sponsors" component={Sponsors}/>
       <Route exact path="/Products" component={Products}/>
       <Route exact path="/Contact" component={Contact}/>

     </Layout>
    </div>
  );
}

export default App;
