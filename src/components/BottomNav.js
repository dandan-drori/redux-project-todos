import React from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import HelpIcon from '@material-ui/icons/Help'
import FavoriteIcon from '@material-ui/icons/Favorite'
import CheckIcon from '@material-ui/icons/Check'
import HomeIcon from '@material-ui/icons/Home'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
})

export default function IconLabelTabs() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  const width = window.innerWidth > 0 ? window.innerWidth : window.screen.width

  const linkStyles = {
    color: 'inherit',
    border: '1px solid black',
    textDecoration: 'none',
    cursor: 'auto',
    margin: '0',
  }
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      {width < 768 ? (
        <Paper square className={classes.root}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant='fullWidth'
            indicatorColor='primary'
            textColor='primary'
            aria-label='icon label tabs example'
          >
            <Tab icon={<HomeIcon />} label='HOME' to='/' component={Link} />
            <Tab
              icon={<CheckIcon />}
              label='TODOS'
              to='/todos'
              component={Link}
            />
            <Tab
              icon={<FavoriteIcon />}
              label='SAVED'
              to='saved-todos'
              component={Link}
            />
            <Tab
              icon={<HelpIcon />}
              label='QUIZ'
              to='quiz-app'
              component={Link}
            />
          </Tabs>
        </Paper>
      ) : null}
    </>
  )
}
