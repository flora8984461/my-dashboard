import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import HomeIcon from '@material-ui/icons/Home';
import BarChartIcon from '@material-ui/icons/BarChart';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ForumIcon from '@material-ui/icons/Forum';
import MailIcon from '@material-ui/icons/Mail';
import ReceiptIcon from '@material-ui/icons/Receipt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import LineStyleIcon from '@material-ui/icons/LineStyle';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button component="a" href="/dashboard">
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PersonOutlineIcon />
      </ListItemIcon>
      <ListItemText primary="About Me" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LineStyleIcon />
      </ListItemIcon>
      <ListItemText primary="Products" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ReceiptIcon />
      </ListItemIcon>
      <ListItemText primary="Invoice" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary="Mail Marketing" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ForumIcon />
      </ListItemIcon>
      <ListItemText primary="Chat Room" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <EventNoteIcon />
      </ListItemIcon>
      <ListItemText primary="Calendar" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <HelpIcon />
      </ListItemIcon>
      <ListItemText primary="Help Center" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>

  </div>
);
