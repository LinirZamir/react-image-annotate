import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useSettings } from '../SettingsProvider';

export const SettingsDialog = ({ open, onClose }) => {
  const settings = useSettings();
  const [videoPlaybackSpeed, setVideoPlaybackSpeed] = useState(settings.videoPlaybackSpeed);

  const handleVideoPlaybackSpeedChange = (event) => {
    setVideoPlaybackSpeed(event.target.value);
    settings.changeSetting('videoPlaybackSpeed', event.target.value);
  };

  return (
    <Dialog open={open || false} onClose={onClose}>
      <DialogTitle>Settings</DialogTitle>
      <DialogContent style={{ minWidth: 400 }}>
        <FormControlLabel
          control={
            <Switch
              checked={settings.showCrosshairs}
              onChange={(e) => settings.changeSetting('showCrosshairs', e.target.checked)}
            />
          }
          label="Show Crosshairs"
        />
        <FormControlLabel
          control={
            <Switch
              checked={settings.showHighlightBox}
              onChange={(e) => settings.changeSetting('showHighlightBox', e.target.checked)}
            />
          }
          label="Show Highlight Box"
        />
        <FormControlLabel
          control={
            <Switch
              checked={settings.wasdMode}
              onChange={(e) => settings.changeSetting('wasdMode', e.target.checked)}
            />
          }
          label="WASD Mode"
        />
        <FormControl fullWidth>
          <InputLabel>Video Playback Speed</InputLabel>
          <Select
            value={videoPlaybackSpeed}
            onChange={handleVideoPlaybackSpeedChange}
          >
            <MenuItem value="0.25x">0.25x</MenuItem>
            <MenuItem value="0.5x">0.5x</MenuItem>
            <MenuItem value="1x">1x</MenuItem>
            <MenuItem value="2x">2x</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SettingsDialog;
