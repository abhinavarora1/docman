import React , { useState }from 'react';
import AppBar from '@material-ui/core/AppBar';
import TypoGraphy from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import NavBar from '../navbar';
import Posts from '../posts';
import Contact from './contact';
import DesignerForm from './designer';
import SimpleTestDesigner from "../simple/testDesigner";
function Designer (){


return(
<div>
<AppBar color="primary" position="static">
<Toolbar>
            <TypoGraphy variant="title"
              color="inherit"
            >
              My header
           </TypoGraphy>
           <NavBar></NavBar>
           
          </Toolbar>
</AppBar>
   <SimpleTestDesigner></SimpleTestDesigner>
 </div>   


);
}
export default Designer;
