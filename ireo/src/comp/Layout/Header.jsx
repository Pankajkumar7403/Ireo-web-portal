import React, { useEffect, useRef,useState } from 'react';
import { AppBar, Toolbar,Tab,Tabs, Typography,  Grid } from '@mui/material';
import { Link,useLocation } from 'react-router-dom';


const Header = () => {
  
  const [activeTab,setActiveTab]=useState(0);
  const location= useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    switch (pathname) {
      case '/':
        setActiveTab(0);
        break;
      case '/hrandadmin':
        setActiveTab(1);
        break;
      case '/ireology':
        setActiveTab(2)
        break;
      case '/recuritment':
        setActiveTab(3)
        break;
      case '/tsg':
        setActiveTab(4)
        break;
      case '/aboutus':
        setActiveTab(5)
        break;
      // ... add cases for other paths
      default:
        setActiveTab(0); // Set default tab if not matched
    }
  }, [location]);




  return (
    <AppBar position="static" sx={{
      backgroundColor: 'grey',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      width: '100%', // Ensure it takes up full width
      // ... other styles
      textColor:'black',
    }}>
      <Toolbar>
        <Grid container alignItems="center" spacing={2} >
        <Grid item alignContent="center">
            <Link to="/">
              {/*<img src={logoimage} alt="Ireology" style={{ width: 140, height: 30 }} />*/}
              <Typography variant='h4'>Ireology</Typography>
            </Link>
          </Grid>
          <Grid item >
          
          </Grid>
        
        <Grid item xs={6}>
              <Tabs indicatorColor='secondary' value={activeTab} onChange={(e, val) => setActiveTab(val)} 
              sx={{
                '& .MuiTabs-root': {
                  backgroundColor: 'black',
                },
                '& .MuiTab-root': {
                  color: 'black',
                  fontFamily: 'monospace',
                  fontSize: '20px',
                },
                '& .Mui-selected': {
                  backgroundColor: 'white',
                  color: 'black',
                  borderRadius: '8px',
                  padding: '10px',
                },
              }}
              >
                  <Link to="/">
                  <Tab className={activeTab === 0 ? 'active-tab' : ''} label="Home" />
                   </Link>
                   <Link to="/hrandadmin">
                  <Tab className={activeTab === 1 ? 'active-tab' : ''} label="HRandAdmin" />
                  </Link>
                  <Link to="/ireology">
                  <Tab className={activeTab === 2 ? 'active-tab' : ''} label="Ireology" />
                  </Link>
                  <Link to="/recuritment">
                  <Tab className={activeTab === 3 ? 'active-tab' : ''} label="Recuritment" />
                  </Link>
                  <Link to="/tsg">
                  <Tab className={activeTab === 4 ? 'active-tab' : ''} label="TSG" />
                  </Link>
                  <Link to="/aboutus">
                  <Tab className={activeTab === 5 ? 'active-tab' : ''} label="About us" />
                  </Link>
              </Tabs>
            </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;