import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './style.css'

import {createBrowserRouter,Form,RouterProvider,} from 'react-router-dom';
import About from './aboutme';
import Contact from './contact';
import Root from './root';
import Projects from './projects';
import Assignment from './assignment';
import Contactform from './contactform';


const routes =createBrowserRouter([

{
path:'/',
element:<Root />,
children:[

{
path:'aboutme',
element:<About />,
},
{
path:'contact',
element:<Contact />,
children:[
  {
    path:'contactform',
  element:<Contactform />,
  }
]
},

{
path:'projects',
element:<Projects />,
children:[
  {
    path:'assignment',
    element:<Assignment />
  }
]
},


]
}

]);


ReactDOM.createRoot(document.getElementById('root')).render(

<React.StrictMode>
<RouterProvider router={routes} />
</React.StrictMode>,
);


  
  
  
    
