import React, { useState } from "react";

const PaymentExercise = () => {
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const payments = [
    { id: "UPI", info: "Instant transfer via UPI Apps" },
    { id: "Card", info: "Pay using credit or debit card" },
    { id: "COD", info: "Pay when the order arrives" },
  ];
  return (
    <div className="flex flex-col justify-center mx-100 gap-6 mt-10 text-2xl">
      {payments.map((payment) => (
        <label htmlFor={payment.id} key={payment.id}>
          <input
            id={payment.id}
            type="radio"
            name="payment"
            value={payment.id}
            checked={paymentMethod === payment.id}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          {payment.id}
          <div className="mt-10 flex-grow">
             {paymentMethod === payment.id && (payment.info)}
          </div>
        </label>
      ))}
    </div>
  );
};

export default PaymentExercise;
