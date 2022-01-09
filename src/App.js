
import './App.css';
import React from "react";


import logo from "./assests/images.jpeg";

import BuildIcon from '@mui/icons-material/Build';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import SettingsIcon from '@mui/icons-material/Settings';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import TableChartIcon from '@mui/icons-material/TableChart';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {Link,Switch,Route} from 'react-router-dom';
import SpeedIcon from '@mui/icons-material/Speed';
import Button from '@mui/material/Button';
import {useHistory} from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import Chart from "./components/Chart";
import Table from "./components/Table";
import Colorbox from "./components/Color";

function App() {
  const history=useHistory();
  return (
    <div className="App">
     <div className="side-menu">
        <div className="top-section">
            <div className="logo">
                <img src={logo} className="logoo"/>
                <Link>SB ADMIN2</Link>
            </div>
            <div className="dashboard">
            <SpeedIcon/>
            <Button variant="text"color="inherit" onClick={()=>history.push('/Dashboard')}>
            Dashboard</Button>
            
            </div>
            <div className="interface">
              
               <p>INTERFACE</p> 
    
            
            <ul>
                <li>
                <SettingsIcon/> 
                <Button variant="text"color="inherit" onClick={()=>history.push('/components')}>
            Components</Button><NavigateNextIcon/>
                    
                </li>
                <li><BuildIcon/> <Button variant="text"color="inherit" onClick={()=>history.push('/Utilities')}>
                Utilities</Button></li>
            </ul>
            </div>
            <div className="addons">
              
              <h4>ADDONS</h4> 
   
           
           <ul>
               <li>
               <FolderOpenIcon/>  <Button variant="text"color="inherit" onClick={()=>history.push('/Color')}>
               Colors</Button><NavigateNextIcon/>
                   
               </li>
               <li><InsertChartIcon/>
               <Button variant="text"color="inherit" onClick={()=>history.push('/charts')}>
            Charts</Button></li>
               <li><TableChartIcon/><Button variant="text"color="inherit" onClick={()=>history.push('/tables')}>
               Tables</Button></li>
           </ul>
           </div>
           </div> 
        
        <Switch>
        <Route exact path="/"></Route>
        <Route exact path="/Dashboard">
            <Dashboard/>
        </Route>
            <Route exact path="/components"></Route>
            <Route exact path="/Utilities"></Route>
            
            <Route exact path="/Color">
                <Colorbox/>
            </Route>
            <Route exact path="/charts">
            <Chart/>
            </Route>
            <Route exact path="/tables">
                <Table/>
            </Route>
            
            
            <Route path="**">
               
               
              
            </Route>
        </Switch>
      
     </div>
    </div>
  );
}

export default App;
