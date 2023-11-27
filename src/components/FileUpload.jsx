import React, { useState, useEffect } from 'react'

import Button from '@mui/material/Button'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import axios from 'axios'

import { styled } from '@mui/material/styles'
import { toast } from 'sonner'

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
})

export default function FileUpload() {
  const [url, setUrl] = useState(null)
  const [file, setFile] = useState(null)

  useEffect(() => {
    const credString = localStorage.Credentials
    const cred = JSON.parse(credString)
    console.log(cred)
    setUrl(cred.profilePicture)
  }, [])

  const handleFileChange = (event) => {
    setFile(event.target.files[0])
    const reader = new FileReader()

    reader.readAsDataURL(event.target.files[0])
    reader.onloadend = () => setUrl(reader.result)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData()
    formData.append('image', file)

    try {
      const response = await axios.post('/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })

      // UNDONE: Update profile picture in DB
      const data = response.data

      toast.success('File uploaded successfully')
    } catch (error) {
      toast.error('File upload failed')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
        >
          Upload file
          <VisuallyHiddenInput type="file" onChange={handleFileChange} />
        </Button>

        <Button type="submit" variant="text">
          Submit
        </Button>
      </form>

      <img src={url} alt="" />
    </>
  )
}
