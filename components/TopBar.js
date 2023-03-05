import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import EventEmitter from 'reactjs-eventemitter';
import { REFRESH_HOTELS } from '../data/events';

export function TopBar() {
    return (
        <div style={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6"  style={{ flexGrow: 1 }}>HOTELS</Typography>
                    <Button color="inherit" 
                        onClick={event => EventEmitter.dispatch(REFRESH_HOTELS, event)}>
                        REFRESH
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
