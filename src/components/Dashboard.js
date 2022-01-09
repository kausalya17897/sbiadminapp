import React from "react";
import profile from "../assests/profile.svg";
import SearchIcon from '@mui/icons-material/Search';


import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import DownloadIcon from '@mui/icons-material/Download';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';


function Dashboard(){
    const data=[{
        pack:"EARNINGS (MONTHLY)",
        price:"$40,000",
        image:"<CalendarTodayIcon/>"
        
      },{
        pack:"EARNINGS (ANNUAL)",
        price:"$215,000",
        image:"CalendarTodayIcon"
      },{
        pack:"TASKS",
        price:"50%",
        image:"CalendarTodayIcon"
      },
      {
        pack:"PENDING REQUESTS",
        price:"18",
        image:""
      },
    ]
    return(
        <div className="mainpage">
            <div className="topbar">
           
<input class="searchbutton" type="search" placeholder="search for..."></input><SearchIcon id="SearchIcon"/>
<div className="icon">
<Button variant="text">
<Badge badgeContent={4} color="primary">
  <NotificationAddIcon />
  </Badge>
  </Button>
  <Button variant="text">
<Badge badgeContent={4} color="primary">
  <MailIcon color="action" />
</Badge>
</Button>
</div>
<IconButton className="IconButton">
<p className="name">Kausalya.K</p>
<img src={profile} className="profile"></img>
</IconButton>
</div>
<div className="topbar2">
<p className="maindash">Dashboard</p>
<Button variant="contained">Generate Report<DownloadIcon/></Button>

</div>
<div className="topbar3">
{data.map((ur)=>(
      <Msg 
      pack={ur.pack}
      price={ur.price}
  image={ur.image}/>
  
  ))}
  
  </div>
  
  
  </div>

    )
}
function Msg({pack,price,image}){
  
  return(
    
      <div className="container">
        <h3 className="pack">{pack}</h3>
        <h3 className="price">{price}</h3>
    </div>

  )
}

export default Dashboard;
