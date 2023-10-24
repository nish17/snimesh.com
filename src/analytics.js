import ReactGA from 'react-ga';

// Initialize Google Analytics
export const initializeGoogleAnalytics = () => {
    ReactGA.initialize("UA-170963982-1");
};

// Log a page view
export const logPageView = () => {
    const pagePath = window.location.pathname + window.location.search + window.location.hash;
    ReactGA.set({ page: pagePath });
    ReactGA.pageview(pagePath);
};

// Log a custom event
export const logCustomEvent = (category, action) => {
    if (category && action) {
        ReactGA.event({ category, action });
    }
};

// Log exceptions
export const logException = (description, isFatal = false) => {
    if (description) {
        ReactGA.exception({ description, fatal: isFatal });
    }
};
