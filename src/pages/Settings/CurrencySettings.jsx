import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrency } from '../../features/settings/settingsSlice'
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material'

const CurrencySettings = () => {
  const currency = useSelector((state) => state.settings.currency)
  const dispatch = useDispatch()

  const handleCurrencyChange = (event) => {
    dispatch(setCurrency(event.target.value))
  }

  return (
    <FormControl fullWidth>
      <InputLabel id="currency-select-label">Currency</InputLabel>
      <Select
        labelId="currency-select-label"
        id="currency-select"
        label="Currency"
        value={currency}
        onChange={handleCurrencyChange}
      >
        <MenuItem value="inr">INR</MenuItem>
        <MenuItem value="usd">USD</MenuItem>
        <MenuItem value="eur">EUR</MenuItem>
      </Select>
    </FormControl>
  )
}

export default CurrencySettings
