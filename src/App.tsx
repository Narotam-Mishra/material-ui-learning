
import './App.css'
import { LocalizationProvider } from '@mui/x-date-pickers'
// import MUILoadingButton from './components/MUILoadingButton'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
// import MUIPicker from './components/MUIPicker';
// import MUIDateRangePicker from './components/MUIDateRangePicker';
// import MUITabs from './components/MUITabs';
// import MUITimeline from './components/MUITimeline';
// import MUIMasonary from './components/MUIMasonary';
import MUIResponsiveness from './components/MUIResponsiveness';
import { createTheme, colors, ThemeProvider } from '@mui/material';

// import MUIProgress from './components/MUIProgress'
// import MUISkeleton from './components/MUISkeleton'
// import MUIDialog from './components/MUIDialog'
// import MUISnackbar from './components/MUISnackbar'
// import MUIAlert from './components/MUIAlert'
// import MUITable from './components/MUITable'
// import MUITooltip from './components/MUITooltip'
// import MUIChip from './components/MUIChip'
// import MUIBadge from './components/MUIBadge'
// import MUIList from './components/MUIList'
// import MUIAvatar from './components/MUIAvatar'
// import MUIBottomNavigation from './components/MUIBottomNavigation'
// import MUIBreadcrumbs from './components/MUIBreadcrumbs'
// import MUIDrawer from './components/MUIDrawer'
// import MUILink from './components/MUILink'
// import MUINavbar from './components/MUINavbar'
// import MUISpeedDial from './components/MUISpeedDial'
// import MUIImageList from './components/MUIImageList'
// import MUIAccordion from './components/MUIAccordion'
// import MUICard from './components/MUICard'
// import MUILayout from './components/MUILayout'
// import MUIAutoComplete from './components/MUIAutoComplete'
// import MUIRating from './components/MUIRating'
// import MUISwitch from './components/MUISwitch'
// import MUICheckbox from './components/MUICheckbox'
// import MUIRadioButton from './components/MUIRadioButton'
// import MUISelect from './components/MUISelect'
// import MUIButton from './components/MUIButton'
// import MUITextField from './components/MUITextField'
// import MUITypography from './components/MUITypography'

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    secondary: {
      main: colors.orange[500]
    },
    neutral: {
      main: colors.grey[500],
      darker: colors.grey[700]
    }
  }
})

function App() {

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className="App">
          {/* <MUITypography /> */}
          {/* <MUIButton /> */}
          {/* <MUITextField /> */}
          {/* <MUISelect /> */}
          {/* <MUIRadioButton /> */}
          {/* <MUICheckbox /> */}
          {/* <MUISwitch /> */}
          {/* <MUIRating /> */}
          {/* <MUIAutoComplete /> */}
          {/* <MUILayout /> */}
          {/* <MUICard /> */}
          {/* <MUIAccordion /> */}
          {/* <MUIImageList /> */}
          {/* <MUINavbar /> */}
          {/* <MUILink /> */}
          {/* <MUIBreadcrumbs /> */}
          {/* <MUIDrawer /> */}
          {/* <MUISpeedDial /> */}
          {/* <MUIBottomNavigation /> */}
          {/* <MUIAvatar /> */}
          {/* <MUIBadge /> */}
          {/* <MUIList /> */}
          {/* <MUIChip /> */}
          {/* <MUITooltip /> */}
          {/* <MUITable /> */}
          {/* <MUIAlert /> */}
          {/* <MUISnackbar /> */}
          {/* <MUIDialog /> */}
          {/* <MUIProgress /> */}
          {/* <MUISkeleton /> */}
          {/* <MUILoadingButton /> */}
          {/* <MUIPicker /> */}
          {/* <MUIDateRangePicker /> */}
          {/* <MUITabs /> */}
          {/* <MUITimeline /> */}
          {/* <MUIMasonary /> */}
          <MUIResponsiveness />
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App
