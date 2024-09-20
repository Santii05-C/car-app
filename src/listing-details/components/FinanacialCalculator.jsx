import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

function FinancialCalculator({ carDetail }) {
  const [carPrice, setCarPrice] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateMonthlyPayment = () => {
    const principal = carPrice - downPayment;
    const monthlyInterestRate = interestRate / 1200;

    const monthlyPayment =
      (principal *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, loanTerm)) /
      (Math.pow(1 + monthlyInterestRate, loanTerm) - 1);

    setMonthlyPayment(monthlyPayment.toFixed(2));
  };

  return (
    <div className="p-5 md:p-10 border rounded-xl shadow-md mt-7">
      <h2 className="font-medium text-2xl">Financial Calculator</h2>
      <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-5 mt-5">
        <div>
          <label>Price $</label>
          <Input
            type="number"
            onChange={(e) => setCarPrice(Number(e.target.value))}
          />
        </div>
        <div>
          <label>Interest Rate</label>
          <Input
            type="number"
            onChange={(e) => setInterestRate(Number(e.target.value))}
          />
        </div>
        <div>
          <label>Loan Term (Months)</label>
          <Input
            type="number"
            onChange={(e) => setLoanTerm(Number(e.target.value))}
          />
        </div>
        <div>
          <label>Down Payment</label>
          <Input
            type="number"
            onChange={(e) => setDownPayment(Number(e.target.value))}
          />
        </div>
      </div>
      {monthlyPayment > 0 && (
        <h2 className="font-medium text-2xl mt-5">
          Your Monthly Payment Is :{" "}
          <span className="text-4xl font-bold">${monthlyPayment}</span>
        </h2>
      )}
      <Button
        className="w-full mt-5"
        size="lg"
        onClick={calculateMonthlyPayment}
      >
        Calculate
      </Button>
    </div>
  );
}

export default FinancialCalculator;
