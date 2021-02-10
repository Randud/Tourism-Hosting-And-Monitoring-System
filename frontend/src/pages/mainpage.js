import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AddInquriry from '../components/Addinquiry';
import HelpCenter from '../components/HelpCenter';
import MyInquiry from '../components/MyInquiry';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: '500',
    backgroundColor: 'theme.palette.background.paper',
  },
}));

export default function Mainpage() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} indicatorColor="primary"
     
          variant="fullWidth"
      aria-label="simple tabs example">
          <Tab label="Inquiry" {...a11yProps(0)} />
          <Tab label="Help Centers" {...a11yProps(1)} />
          <Tab label="My Inquiries" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <AddInquriry/>
      </TabPanel>
      <TabPanel value={value} index={1}>
       <HelpCenter/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MyInquiry />
      </TabPanel>
    </div>
  );
}
