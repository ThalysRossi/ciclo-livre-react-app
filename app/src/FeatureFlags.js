
const LOCAL_STORAGE_KEY = 'orFeatureFlag';
const QUERY_PARAM_KEY = 'ff';


const featureDisabled = (feature, allowOnDev = true) => (
  (allowOnDev && import.meta.env.NODE_ENV !== 'production') || feature
);
// const url = new UrlParse(window.location.href, true);
// const queryParams = url.query;

// function getFlagsFromLocalStorage() {
//   let lStorage = {};
//   try {
//     lStorage = localStorage.getItem(LOCAL_STORAGE_KEY)
//       ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
//       : {};
//   } catch (e) {
//     lStorage = {};
//   }

//   return lStorage;
// }

function getFlagState(envVar, param) {
  console.log(import.meta.env.VITE_IS_UNDER_CONSTRUCTION)
  return (
    // Check environment variables
    import.meta.env.VITE_IS_UNDER_CONSTRUCTION === 'true'
    // Check query params
    // || (QUERY_PARAM_KEY in queryParams && queryParams.ff.indexOf(param) >= 0)
    // // Check local storage
    // || getFlagsFromLocalStorage()[param]
    // || false
  );
}

const featureFlags = {
  underConstruction: getFlagState('IS_UNDER_CONSTRUCTION', 'underConstruction')
};

export {
  LOCAL_STORAGE_KEY,
  featureDisabled,
  featureFlags,
};