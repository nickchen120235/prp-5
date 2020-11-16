import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  title: {
    margin: '0 auto'
  },
  selector: {
    maxWidth: '50%',
    marginLeft: '0',
    marginRight: '0',
    marginTop: '5px',
    float: 'left'
  },
  graph: {
    maxWidth: '50%',
    marginLeft: '0',
    marginRight: '0',
    float: 'left'
  },
  countryDialog: {
    flexDirection: 'row',
    marginLeft: '10px'
  },
  countryList: {
    maxWidth: '20%',
    marginLeft: '5px',
    marginRight: '5px',
    float: 'left'
  }
}))

export default useStyles