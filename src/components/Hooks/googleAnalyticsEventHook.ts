import ReactGA from 'react-ga4'

// TODO move to a custom hoook to be used from any page where we want to track an event
const useAnalyticsEventTracker = (category: string = "Download") => {
    const eventTracker = (action: string = "Book download button clicked", label: string = "Book: x") => {
      ReactGA.event({category, action, label});
    }
    return eventTracker;
  }

  export default useAnalyticsEventTracker;