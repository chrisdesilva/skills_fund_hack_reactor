import React, { useEffect, useState } from "react"
import LoanCalcPaymentTable from "./loancalcpaymenttable"
import Image from "../components/image"
import { UnmountClosed as Collapse } from "react-collapse"
import {
  defaultLoanAmount,
  faq,
  interestRates,
  paymentTable,
  programLoanInfo,
  schoolName,
} from "../constants/programInfo"

const LoanCalculator = props => {
  const [metroIndex, setMetroIndex] = useState(0)
  const [programIndex, setProgramIndex] = useState(0)
  const [loanValue, setLoanValue] = useState(defaultLoanAmount)
  const [programMax, setProgramMax] = useState(
    programLoanInfo[0]["loanInfo"]["maxLoanAmt"]
  )
  const [monthlyPayment, setMonthlyPayment] = useState({
    payment36: null,
    payment60: null,
  })
  const [totalPayment, setTotalPayment] = useState({
    payment36: null,
    payment60: null,
  })
  const [interestPayment, setInterestPayment] = useState({
    payment36: null,
    payment60: null,
  })
  const [nonPaymentPeriod, setNonPaymentPeriod] = useState(
    programLoanInfo[0]["loanInfo"]["0"]["k"]
  )
  const [loanType, setLoanType] = useState(
    programLoanInfo[0]["defaultLoanType"]
  )
  const [showLoanTypes, setShowLoanTypes] = useState(
    programLoanInfo[0]["showLoanTypes"]
  )
  const [locations, setLocations] = useState(programLoanInfo[0]["locations"])
  const [metros, setMetros] = useState(programLoanInfo[0]["metros"])
  const [multiMetros, hasMultiMetros] = useState(
    programLoanInfo[0]["showMetros"]
  )
  const [loanInformation, setLoanInformation] = useState(
    programLoanInfo[0].loanInfo
  )

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0, // even dollar amounts without cents
  })

  const formatterWithCents = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  })

  const handleSliderAmt = e => {
    setLoanValue(e.target.value)
  }

  const calculateMonthlyPayment = () => {
    const monthlyRate36 = Number(interestRates.ir36) / 100 / 12
    const monthlyRate60 = Number(interestRates.ir60) / 100 / 12
    const borrowedAmount = Number(loanValue) || Number(defaultLoanAmount)
    const totalLoan = Number(borrowedAmount) * (1 + Number(faq.origFee))
    let payment36 =
      Number(monthlyRate36 * totalLoan) /
      (1 - 1 / Math.pow(1 + monthlyRate36, 36))
    let payment60 =
      Number(monthlyRate60 * totalLoan) /
      (1 - 1 / Math.pow(1 + monthlyRate60, 60))
    setMonthlyPayment({
      payment36: payment36.toFixed(2),
      payment60: payment60.toFixed(2),
    })
    calculateInterest()
    calculateTotalPayment()
  }

  const calculateInterest = () => {
    let interest36 =
      ((Number(loanValue) * (1 + Number(faq.origFee))) / 12) *
      (Number(interestRates.ir36) / 100)
    let interest60 =
      ((Number(loanValue) * (1 + Number(faq.origFee))) / 12) *
      (Number(interestRates.ir60) / 100)
    setInterestPayment({
      payment36: interest36.toFixed(2),
      payment60: interest60.toFixed(2),
    })
  }

  const calculateTotalPayment = () => {
    let months = [36, 60]
    let interestPeriod = nonPaymentPeriod
    let payments = []
    if (loanType === "0") {
      payments[0] =
        interestPayment.payment36 * interestPeriod +
        monthlyPayment.payment36 * months[0]
      payments[1] =
        interestPayment.payment60 * interestPeriod +
        monthlyPayment.payment60 * months[1]
    } else {
      payments[0] = monthlyPayment.payment36 * months[0]
      payments[1] = monthlyPayment.payment60 * months[1]
    }
    setTotalPayment({ payment36: payments[0], payment60: payments[1] })
  }

  const handleProgramName = e => {
    setProgramIndex(Number(e.target.value))
    setLoanType(programLoanInfo[programIndex]["defaultLoanType"])
  }

  const handleLoanType = e => {
    setLoanType(e.target.value)
  }

  const handleMetro = e => {
    setMetroIndex(Number(e.target.value))
  }

  useEffect(() => {
    calculateMonthlyPayment() // run calculator when page loads to show initial amounts
    setLoanType(programLoanInfo[programIndex]["defaultLoanType"])
    hasMultiMetros(programLoanInfo[programIndex]["showMetros"])
    setShowLoanTypes(programLoanInfo[programIndex]["showLoanTypes"])
    setLoanInformation(programLoanInfo[programIndex]["loanInfo"])

    // check to see if the program has multiple locations and set the program max based on individual cities
    if (programLoanInfo[programIndex]["showMetros"]) {
      setProgramMax(
        programLoanInfo[programIndex]["metros"][metroIndex]["loanInfo"][
          "maxLoanAmt"
        ]
      )
    } else {
      setProgramMax(programLoanInfo[programIndex]["loanInfo"]["maxLoanAmt"])
    }

    // if the program selected has a maximum loan amount smaller than the default loan amount, set the initial value of the slider to the program's max
    if (
      defaultLoanAmount >
      programLoanInfo[programIndex]["loanInfo"]["maxLoanAmt"]
    ) {
      setLoanValue(programLoanInfo[programIndex]["loanInfo"]["maxLoanAmt"])
    } else {
      setLoanValue(defaultLoanAmount)
    }
    // hook is triggered when the values in the array below are updated
  }, [metroIndex, programIndex, programMax])

  useEffect(() => {
    calculateTotalPayment()
  }, [monthlyPayment])

  useEffect(() => {
    calculateTotalPayment()
  }, [loanType])

  useEffect(() => {
    if (loanType === "0") {
      setNonPaymentPeriod(programLoanInfo[programIndex]["loanInfo"]["0"]["k"])
    }
  }, [loanType])

  useEffect(() => {
    // watches for changes to metroIndex, updates dropdown/loan info accordingly
    setLoanInformation(
      programLoanInfo[programIndex]["metros"][metroIndex]["loanInfo"]
    )
  }, [metroIndex])

  return (
    <div className={props.modal ? "loanCalculator opacity" : "loanCalculator"}>
      <div className="loanCalculator__content pt-8 bg-gray-100">
        <div className="loanCalculator__select flex flex-col items-center px-4">
          <div className="flex flex-col md:flex-row md:justify-between mb-8">
            <div className="flex flex-col md:w-1/2 justify-center px-4">
              <h2 className="text-gray-800 text-center">
                Simple. Transparent.
              </h2>
              <p className="text-gray-800" id="leadText">
                Figuring out your monthly payments on a loan shouldn't require a
                math degree. Find out exactly what you'll pay at {schoolName}{" "}
                with a Skills Fund loan.
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3">
              <Image />
            </div>
          </div>

          <div>
            {faq.multiPrograms ? (
              <>
                <label className="text-sm" htmlFor="program">
                  Select your program
                </label>
                <div className="loanCalculator__selectInput">
                  <select
                    id="program"
                    defaultValue={"default"}
                    onChange={handleProgramName}
                  >
                    {programLoanInfo.map((program, i) => (
                      <option label={program.name} value={i} key={program.name}>
                        {program.name}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            ) : null}

            <p>{` `}</p>

            <label
              className={showLoanTypes ? "text-sm" : "hide"}
              htmlFor="program"
            >
              Select your loan type
            </label>
            <div
              className={showLoanTypes ? "loanCalculator__selectInput" : "hide"}
            >
              <select defaultValue={"default"} onChange={handleLoanType}>
                <option value="0">Interest-Only</option>
                <option value="1">Immediate Repayment</option>
              </select>
            </div>

            <p>{` `}</p>

            <label
              className={multiMetros ? "text-sm" : "hide"}
              htmlFor="program"
            >
              Select your location
            </label>
            <div
              className={multiMetros ? "loanCalculator__selectInput" : "hide"}
            >
              <select defaultValue={"default"} onChange={handleMetro}>
                {metros.map((city, i) => (
                  <option label={city.location} key={city.location} value={i}>
                    {city.location}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="loanCalculator__slider flex flex-col items-center px-4">
          <input
            aria-label="loan-calculator-slider"
            className="loanCalculator__input w-full lg:w-1/2 mb-2"
            onChange={handleSliderAmt}
            onBlur={handleSliderAmt}
            onTouchEnd={calculateMonthlyPayment}
            onMouseUp={calculateMonthlyPayment}
            onKeyUp={calculateMonthlyPayment}
            type="range"
            min="2000"
            step="5"
            max={programMax}
            value={loanValue}
          />
          <div className="loanCalculator__labels flex justify-between w-full lg:w-1/2">
            <p>
              Min
              <br />
              $2,000
            </p>
            <p className="text-center">
              Loan Amount
              <br />
              <span className="loanCalculator__amount">
                {formatter.format(loanValue)}
              </span>
            </p>
            <p className="text-right">
              Max
              <br />
              {formatter.format(programMax)}
            </p>
          </div>
          {/* <span className="loanCalculator__disclaimers" onClick={props.toggleModal}>Disclaimers</span> */}
        </div>
        <div className="loanCalculator__monthlyPayments flex my-8">
          <div
            className={
              faq.multipleLoanLengths
                ? "loanCalculator__36months w-1/2"
                : "loanCalculator__36months w-full"
            }
          >
            {/* <h3 className="text-md text-center mb-1">{loanType === "0" ? <span className={loanType === "0" ? "show" : "hide"}>Interest-Only</span> : <span className={loanType === "1" ? "show" : "hide"}>Immediate Repayment</span>}</h3> */}
            <h3 className="text-center mb-2">36 Month Option</h3>
            <h4 className="text-center">
              {loanInformation[loanType]["apr36"]}% APR*
            </h4>
            <span className={loanType === "0" ? "show" : "hide"}>
              <>
                <p className="loanCalculator__paymentAmounts text-3xl text-primary font-bold mb-1 text-center">
                  ${interestPayment.payment36}
                </p>
                <p className="loanCalculator__paymentLabel text-center text-xs">
                  Monthly Payments in School
                </p>
              </>
            </span>
            <div className={loanType === "0" ? "show" : "show move"}>
              <p className="loanCalculator__paymentAmounts text-3xl text-primary font-bold mb-1 text-center">
                ${monthlyPayment.payment36}
              </p>
              <p className="loanCalculator__paymentLabel text-center text-xs">
                Monthly Payments{loanType === "0" ? " After Graduation" : null}
              </p>
              <p className="loanCalculator__paymentAmounts text-3xl text-primary font-bold mb-1 text-center">
                {formatterWithCents.format(totalPayment.payment36)}
              </p>
              <p className="loanCalculator__paymentLabel text-center text-xs">
                Total Cost of Loan
              </p>
            </div>
          </div>

          {faq.multipleLoanLengths ? (
            <div className="loanCalculator__60months w-1/2">
              {/* <h3 className="text-md text-center mb-1">{loanType === "0" ? <span className={loanType === "0" ? "show" : "hide"}>Interest-Only</span> : <span className={loanType === "1" ? "show" : "hide"}>Immediate Repayment</span>}</h3> */}
              <h3 className="text-center mb-2">60 Month Option</h3>
              <h4 className="text-center">
                {loanInformation[loanType]["apr60"]}% APR*
              </h4>
              <span className={loanType === "0" ? "show" : "hide"}>
                <>
                  <p className="loanCalculator__paymentAmounts text-3xl text-primary font-bold mb-1 text-center">
                    ${interestPayment.payment60}
                  </p>
                  <p className="loanCalculator__paymentLabel text-center text-xs">
                    Monthly Payments in School
                  </p>
                </>
              </span>
              <div className={loanType === "0" ? "show" : "show move"}>
                <p className="loanCalculator__paymentAmounts text-3xl text-primary font-bold mb-1 text-center">
                  ${monthlyPayment.payment60}
                </p>
                <p className="loanCalculator__paymentLabel text-center text-xs">
                  Monthly Payments
                  {loanType === "0" ? " After Graduation" : null}
                </p>
                <p className="loanCalculator__paymentAmounts text-3xl text-primary font-bold mb-1 text-center">
                  {formatterWithCents.format(totalPayment.payment60)}
                </p>
                <p className="loanCalculator__paymentLabel text-center text-xs">
                  Total Cost of Loan
                </p>
              </div>
            </div>
          ) : null}
          {/* <div className="loanCalculator__isa w-1/3">
                    <h3 className="text-md text-center mb-1"></h3>
                    <h3 className="text-center">Income Share Agreement</h3>
                    <span className="show"><><p className="loanCalculator__paymentAmounts text-3xl text-primary font-bold mb-1 text-center">$60,000</p><p className="loanCalculator__paymentLabel text-center text-xs">Annual Salary</p></></span>
                    <div>
                        <p className="loanCalculator__paymentAmounts text-3xl text-primary font-bold mb-1 text-center">$750</p><p className="loanCalculator__paymentLabel text-center text-xs">Monthly Payment</p>
                        <p className="loanCalculator__paymentAmounts text-3xl text-primary font-bold mb-1 text-center">{formatterWithCents.format(programMax * 1.5)}</p><p className="loanCalculator__paymentLabel text-center text-xs">Total Cost</p>
                    </div>
                </div> */}
        </div>
        <p className="show text-center text-sm mb-4 pb-4">
          {loanType === "0"
            ? "Make interest-only payments while in the program. Two months after completion, begin full payments."
            : "Start making full payments (interest + principal) about one month after disbursement."}
        </p>
        <p className="font-bold text-xs text-center my-4">
          Enroll in Autopay to reduce your interest rate. Learn more{" "}
          <a
            href="https://skills.fund/frequently-asked-questions/#autopay"
            className="text-primary font-bold"
            target="_blank"
            rel="noreferrer noopener"
          >
            here
          </a>
          .{" "}
          <a
            href="https://skills.fund/autopay-terms-and-conditions"
            className="text-primary font-bold"
            target="_blank"
            rel="noreferrer noopener"
          >
            Terms and conditions
          </a>{" "}
          apply.
        </p>
        <p className="text-center text-xs italic mb-0 pb-4 px-8">
          *The Annual Percentage Rate (APR) shown is estimated based on the loan
          type, origination fee, and approximate program length. The actual APR
          may be slightly different than the example provided based on loan type
          and program length. To learn how an Annual Percentage Rate (APR) is
          calculated, visit our{" "}
          <a
            className="text-secondary"
            href="https://skills.fund/resources/how-is-an-apr-calculated"
          >
            blog
          </a>
          .
        </p>
      </div>
    </div>
  )
}

export default LoanCalculator
