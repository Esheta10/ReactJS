import React, {useState} from 'react'

const PaymentMethods = () => {

  const [paymentMode, setPaymentMode] = useState("");
  return (
    <div className="flex flex-col items-center justify-center gap-6 mt-10 text-2xl">
        <select value={paymentMode} onChange={(e)=>setPaymentMode(e.target.value)} className="p-4 border-2">
            <option value="">--Select--</option>
            <option value="COD">COD</option>
            <option value="Card">Card</option>
            <option value="UPI">UPI</option>
        </select>
    </div>
  )
}

export default PaymentMethods


