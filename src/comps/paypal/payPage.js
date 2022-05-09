import React from 'react';
import {PayPalButton} from "react-paypal-button-v2"

function PayPage(props){
  return(
    <div className='container'>
      <h1 className='mt-3'>Pay for </h1>
      <div className="row mt-4">
        <div className="col-md-6">
          <PayPalButton 
            currency="ILS"
            amount="20"
            options={{
              clientId:"AQPeEO4ithx19XL8qK-J6Ysgn9Erdp_JubJ1Z7ueFsotA-ugJCpXyfylLlP6qVSNU40MUhZ0N_4mfGNK"
            }}
            onSuccess={(details,data) => {
              console.log(data)
              console.log(details)

              // important info of the transction is in the data like token and orderId
              // in the real we will the facilitatorAccessToken  and the  orderID from the data params
              alert("payment approved!");
            }}
            onCancel={(err) => {
              console.log(err);
              alert("The payment process been canceld, try again")
            }}
          />
        </div>
        <div className="col-md-6 p-2">
          <div className='border p-2'>
            <div>
              <span className='float-end'>60 NIS</span>
              <span> guide</span>
            </div>
            <div>
              <span className='float-end'>20 NIS</span>
              <span>Shipping</span>
            </div>
            <hr/>
            <div>
              <span className='float-end'>80 NIS</span>
              <span>Total:</span>
            </div>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default PayPage


// AQPeEO4ithx19XL8qK-J6Ysgn9Erdp_JubJ1Z7ueFsotA-ugJCpXyfylLlP6qVSNU40MUhZ0N_4mfGNK