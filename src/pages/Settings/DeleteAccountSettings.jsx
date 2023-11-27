import React, { useState } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
} from '@mui/material'
import { Delete, Garage } from '@mui/icons-material'

const DeleteAccountSettings = () => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleDeleteAccount = () => {
    // TODO: Implement logic to delete the user's account
    // This is where you would typically make an API call to delete the account on the server
    console.log('Account deleted!')
    handleClose() // Close the dialog after account deletion
  }

  return (
    <div>
      <Fab
        variant="extended"
        color="error"
        size="large"
        onClick={handleClickOpen}
      >
        <Delete sx={{ mr: 1 }} />
        Delete Account
      </Fab>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ pt: 3 }}>⚠️ Confirm Deletion </DialogTitle>
        <DialogContent>
          <DialogContentText color="primary">
            Are you sure you want to delete your account? This action is
            irreversible.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteAccount} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default DeleteAccountSettings
