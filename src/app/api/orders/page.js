// <div id="paypal-button-container-P-2M627086EJ2360156M4EOBMY"></div>
// <script src="https://www.paypal.com/sdk/js?client-id=ATM5meTr6FvKvunYVYpZ6GZ6vPGqD2I_M5p-0OvpXKebQDEXL1Av5Zwux5yZJUgKgMzPI0nAwlcnxb_P&vault=true&intent=subscription" data-sdk-integration-source="button-factory"></script>
// <script>
//   paypal.Buttons({
//       style: {
//           shape: 'pill',
//           color: 'white',
//           layout: 'vertical',
//           label: 'subscribe'
//       },
//       createSubscription: function(data, actions) {
//         return actions.subscription.create({
//           /* Creates the subscription */
//           plan_id: 'P-2M627086EJ2360156M4EOBMY',
//           quantity: 1 // The quantity of the product for a subscription
//         });
//       },
//       onApprove: function(data, actions) {
//         alert(data.subscriptionID); // You can add optional success message for the subscriber here
//       }
//   }).render('#paypal-button-container-P-2M627086EJ2360156M4EOBMY'); // Renders the PayPal button
// </script>

// import { useEffect } from "react";
// import {
//  PayPalScriptProvider,
//  PayPalButtons,
//  usePayPalScriptReducer
// } from "@paypal/react-paypal-js";

// const ButtonWrapper = ({ type }) => {
//  const [{ options }, dispatch] = usePayPalScriptReducer();

//  useEffect(() => {
//         dispatch({
//             type: "resetOptions",
//             value: {
//                 ...options,
//                 intent: "subscription",
//             },
//         });
//     }, [type]);

//  return (<PayPalButtons
//      createSubscription={(data, actions) => {
//          return actions.subscription
//              .create({
//                  plan_id: "P-3RX065706M3469222L5IFM4I",
//              })
//              .then((orderId) => {
//                  // Your code here after create the order
//                  return orderId;
//              });
//      }}
//      style={{
//          label: "subscribe",
//      }}
//  />);
// }

// export default function App() {
//  return (
//      <PayPalScriptProvider
//          options={{
//              clientId: "test",
//              components: "buttons",
//              intent: "subscription",
//              vault: true,
//          }}
//      >
//          <ButtonWrapper type="subscription" />
//      </PayPalScriptProvider>
//  );
// }

// import Head from 'next/head';

// export default function Payment() {
//   return (
//     <>
//       <Head>
//         <script src="https://www.paypal.com/sdk/js?client-id=AQmiCURwC6btLWCzGJ4D-WWAinWowrLTwWvsJ-imgYFUaWXrKng6LRlLMWK91YeNZebFm48A7UTRVIXx&vault=true&intent=subscription" data-sdk-integration-source="button-factory"></script>
//       </Head>
      
//       <div id="paypal-button-container-P-98544367G6822373WM4JWHHI"></div>

//       <script dangerouslySetInnerHTML={{ __html: `
//         paypal.Buttons({
//             style: {
//                 shape: 'rect',
//                 color: 'gold',
//                 layout: 'vertical',
//                 label: 'subscribe'
//             },
//             createSubscription: function(data, actions) {
//                 return actions.subscription.create({
//                 /* Creates the subscription */
//                 plan_id: 'P-98544367G6822373WM4JWHHI'
//                 });
//             },
//             onApprove: function(data, actions) {
//                 alert(data.subscriptionID); // You can add optional success message for the subscriber here
//             }
//         }).render('#paypal-button-container-P-98544367G6822373WM4JWHHI');
//       `}} />
//     </>
//   )
// }

//Pro plan
// {/* <div id="paypal-button-container-P-2YC197179V0449641M4JWN5Y"></div>
// <script src="https://www.paypal.com/sdk/js?client-id=AQmiCURwC6btLWCzGJ4D-WWAinWowrLTwWvsJ-imgYFUaWXrKng6LRlLMWK91YeNZebFm48A7UTRVIXx&vault=true&intent=subscription" data-sdk-integration-source="button-factory"></script>
// <script>
//   paypal.Buttons({
//       style: {
//           shape: 'rect',
//           color: 'gold',
//           layout: 'vertical',
//           label: 'subscribe'
//       },
//       createSubscription: function(data, actions) {
//         return actions.subscription.create({
//           /* Creates the subscription */
//           plan_id: 'P-2YC197179V0449641M4JWN5Y'
//         });
//       },
//       onApprove: function(data, actions) {
//         alert(data.subscriptionID); // You can add optional success message for the subscriber here
//       }
//   }).render('#paypal-button-container-P-2YC197179V0449641M4JWN5Y'); // Renders the PayPal button
// </script> */}

//Teamplan
// {/* <div id="paypal-button-container-P-4K7005212U827160VM4JWT3I"></div>
// <script src="https://www.paypal.com/sdk/js?client-id=AQmiCURwC6btLWCzGJ4D-WWAinWowrLTwWvsJ-imgYFUaWXrKng6LRlLMWK91YeNZebFm48A7UTRVIXx&vault=true&intent=subscription" data-sdk-integration-source="button-factory"></script>
// <script>
//   paypal.Buttons({
//       style: {
//           shape: 'rect',
//           color: 'gold',
//           layout: 'vertical',
//           label: 'subscribe'
//       },
//       createSubscription: function(data, actions) {
//         return actions.subscription.create({
//           /* Creates the subscription */
//           plan_id: 'P-4K7005212U827160VM4JWT3I'
//         });
//       },
//       onApprove: function(data, actions) {
//         alert(data.subscriptionID); // You can add optional success message for the subscriber here
//       }
//   }).render('#paypal-button-container-P-4K7005212U827160VM4JWT3I'); // Renders the PayPal button
// </script> */}

