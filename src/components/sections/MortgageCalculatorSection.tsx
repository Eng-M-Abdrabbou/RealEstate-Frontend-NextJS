'use client';

import React, { useState, useEffect } from 'react';
import Tag from '../ui/Tag';
import Heading from '../ui/Heading';
import Paragraph from '../ui/Paragraph';
import TextInput from '../ui/TextInput';
import Button from '../ui/button';
import RangeSlider from '../ui/RangeSlider';
import CurrencyInput from '../ui/CurrencyInput'; // Custom component for AED input

// Result Display Component (specific to this section)
interface ResultDisplayProps {
  label: string;
  value: string;
  currency?: string;
  valueClassName?: string;
}
const ResultDisplay: React.FC<ResultDisplayProps> = ({ label, value, currency, valueClassName }) => (
  <div className="mb-4">
    <p className="text-sm text-gray-400">{label}</p>
    <p className={`text-2xl md:text-3xl font-bold ${valueClassName || 'text-white'}`}>
      {currency && `${currency} `}{value}
    </p>
  </div>
);


const MortgageCalculatorSection: React.FC = () => {
  const categoryLabel = "MORTGAGE";
  const mainHeading = "Calculator";

  // Calculator State
  const [propertyPrice, setPropertyPrice] = useState('500000');
  const [interestRate, setInterestRate] = useState(5); // percentage
  const [downpaymentPercent, setDownpaymentPercent] = useState(20); // percentage
  const [mortgagePeriod, setMortgagePeriod] = useState(10); // years

  // Calculated Results
  const [monthlyPayment, setMonthlyPayment] = useState('0');
  const [loanAmount, setLoanAmount] = useState('0');

  // Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const price = parseFloat(propertyPrice) || 0;
    const downpaymentAmount = price * (downpaymentPercent / 100);
    const currentLoanAmount = price - downpaymentAmount;
    setLoanAmount(currentLoanAmount.toLocaleString('en-AE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));

    if (currentLoanAmount <= 0 || interestRate <= 0 || mortgagePeriod <= 0) {
      setMonthlyPayment('0.00');
      return;
    }

    const monthlyInterestRate = (interestRate / 100) / 12;
    const numberOfPayments = mortgagePeriod * 12;

    // M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]
    const M = currentLoanAmount *
      (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    setMonthlyPayment(M > 0 ? M.toLocaleString('en-AE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '0.00');

  }, [propertyPrice, interestRate, downpaymentPercent, mortgagePeriod]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Mortgage contact form submitted:", { name, phone, email, propertyPrice, interestRate, downpaymentPercent, mortgagePeriod });
    // Add submission logic (e.g., API call)
  };


  return (
    <section className="py-12 md:py-20 bg-light-mint"> {/* Light green/mint background */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <Tag text={categoryLabel} color="green" className="mb-3"/>
          <Heading level={2} text={mainHeading} className="text-gray-800 font-cursive-stylized"/>
        </div>

        <div className="bg-dark-blue p-6 md:p-10 rounded-2xl shadow-xl max-w-4xl mx-auto text-white">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Sub-Part 2a: Results and Contact Form (Left Column) */}
            <div>
              <ResultDisplay
                label="Monthly Mortgage Payment"
                value={monthlyPayment}
                currency="AED"
                valueClassName="text-green-400"
              />
              <ResultDisplay
                label="Loan Amount"
                value={loanAmount}
                currency="AED"
              />

              <Paragraph text="How can we contact you?" className="text-lg font-semibold mt-8 mb-4 text-white" />
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <TextInput
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  required
                />
                <TextInput
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  required
                />
                <TextInput
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  required
                />
                <Button type="submit" className="w-full mt-2">
                  Submit
                </Button>
              </form>
            </div>

            {/* Sub-Part 2b: Input Controls (Right Column) */}
            <div>
              <CurrencyInput
                label="Property Price"
                currency="AED"
                value={propertyPrice}
                onValueChange={setPropertyPrice}
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                wrapperClassName="mb-4"
              />
              <RangeSlider
                label="Interest Rate"
                value={interestRate}
                onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                min={0.1} max={20} step={0.1} unit="%"
              />
              <RangeSlider
                label="Downpayment"
                value={downpaymentPercent}
                onChange={(e) => setDownpaymentPercent(parseFloat(e.target.value))}
                min={0} max={100} step={1} unit="%"
              />
              <RangeSlider
                label="Mortgage Period"
                value={mortgagePeriod}
                onChange={(e) => setMortgagePeriod(parseInt(e.target.value))}
                min={1} max={30} unit=" years" // Max 15 in image, but 30 is common
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MortgageCalculatorSection;