import jsonServerProvider from "ra-data-json-server";
// import { DataProvider, combineDataProviders } from "react-admin";
// import SBDataProvider from "./SBDataProvider";

const testProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
// const coolBandProvider = SBDataProvider(import.meta.env.VITE_COOL_API);

// const dataProvider = combineDataProviders((resource): DataProvider => {
//   switch (resource) {
//     case "posts":
//     case "comments":
//       return testProvider;
//     case "why_us_band":
//       return coolBandProvider;
//     default:
//       throw new Error(`Unknown resource: ${resource}`);
//   }
// });
// export default coolBandProvider;
export default testProvider;
