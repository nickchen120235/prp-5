import React from 'react'
import { Dialog, DialogTitle, Container, Button, Typography } from '@material-ui/core'

import country from '../utils/country'
import useStyles from '../utils/styles'
import { findKey } from '../utils/utils'

interface CountryDialogProps {
  open: boolean
  selected: string
  onClose: (value: string) => void
}

const CountryDialog = (props: CountryDialogProps) => {
  const des = Object.values(country).sort()
  const { open, selected, onClose } = props
  const style = useStyles()

  /** handlers */
  const handleClose = () => onClose(selected)
  const handleClick = (name: string) => () => onClose(findKey(name, country))

  return (
    <Dialog onClose={handleClose} open={open} fullWidth maxWidth={false}>
      <DialogTitle>Select Country/Region</DialogTitle>
      <Container className={style.countryDialog2}>
        {des.map(value =>
          <>
            <Button key={value} onClick={handleClick(value)} className={style.countryButton}>
              <Typography align='left' variant='body2' noWrap>{value}</Typography>
            </Button><br />
          </>
        )}
      </Container>
    </Dialog>
  )
}

export default CountryDialog