import { useContext } from 'react';
import GlobalStoreContext from '../store';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function MUIRemoveSongModal() {
  const { store } = useContext(GlobalStoreContext);

  function handleConfirmRemoveSong() {
    store.addRemoveSongTransaction();
  }

  function handleCancelRemoveSong() {
    store.hideModals();
  }

  let modalClass = 'modal';
  if (store.isRemoveSongModalOpen()) {
    modalClass += ' is-visible';
  }
  let songTitle = '';
  if (store.currentSong) {
    songTitle = store.currentSong.title;
  }

  return (
    <Modal open={store.currentSong !== null}>
      <Box sx={style}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography component='h1' variant='h4'>
              Remove {songTitle}?
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box
              component='span'
              m={1}
              display='flex'
              justifyContent='space-between'
              alignItems='center'
            >
              <Button variant='contained' onClick={handleConfirmRemoveSong}>
                Confirm
              </Button>{' '}
              <Button variant='contained' onClick={handleCancelRemoveSong}>
                Cancel
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}
