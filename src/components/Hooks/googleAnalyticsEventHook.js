import ReactGA from 'react-ga'

// TODO move to a custom hoook to be used from any page where we want to track an event
const useAnalyticsEventTracker = (category = "Download") => {
    const eventTracker = (action = "Book download button clicked", label = "Book: x") => {
      ReactGA.event({category, action, label});
    }
    return eventTracker;
  }

  export default useAnalyticsEventTracker;
  