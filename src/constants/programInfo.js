import logo from "../images/logo_galvanize.png" // add school logo to images folder and import here
export const applicationsLive = true // set to false if not currently accepting applications
export const disabledLoanAppFormID = "69140c47-bb03-4a1b-b674-cc136fdea23d" // Hubspot ID for all disabled apply now lead captures
export const nextCohortStartDate = "October 29, 2019"
export const showPopup = false

// ***** BEGIN TERMS AND FAQ INFO *****

export const schoolInfo = {
  // term details section
  interestRate36: "8.99%",
  interestRate60: "10.99%",
  APRRange36: "11.13 - 11.80%",
  APRRange60: "12.63 - 12.93%",
  interestOnly: [
    {
      // for multiple examples of interest only, add items to interestOnly array
      programName: "",
      APR36: "9.05%",
      financeCharge36: "$1,926.57",
      IOPayment36: "$56.88",
      FullMonthlyPayment36: "$321.81",
      APR60: "10.04%",
      financeCharge60: "$3,282.76",
      IOPayment60: "$72.19",
      FullMonthlyPayment60: "$214.16",
      LoanExampleAmt: "$10,000",
      LoanExampleOFeeAmt: "$500",
      LoanExampleAmtPlusOFee: "$10,500",
      programLength: "3", // program length in months
    },
  ],
  immediateRepayment: [
    {
      // for multiple examples of immmediate repayment, add items to immediateRepayment array
      programName: "",
      APR36: "9.82%",
      financeCharge36: "$1,585.32",
      FullMonthlyPayment36: "$321.81",
      APR60: "10.34%",
      financeCharge60: "$2,849.64",
      FullMonthlyPayment60: "$214.16",
      LoanExampleAmt: "$10,000",
      LoanExampleOFeeAmt: "$500",
      LoanExampleAmtPlusOFee: "$10,500",
    },
  ],
}

export const interestRateCards = {
  // 3 month program, 3 months grace for term details section
  APR36: "8.58 - 16.71%",
  APR60: "7.97 - 17.24%",
  immediateRepayment: {
    int36: "6.50 - 13.75%",
    int60: "8.25 - 15.00%",
    // APR36: "9.82% - 17.21%",
    // APR60: "10.34% - 17.24%",
  },
  interestOnly: {
    int36: "6.50 - 13.75%",
    int60: "8.25 - 15.00%",
    // APR36: "8.87 - 16.29%",
    // APR60: "9.96 - 16.87%",
  },
  deferred: {
    int36: "7.00 - 14.25%",
    int60: "8.75 - 15.50%",
    // APR36: "9.24 - 16.43%",
    // APR60: "9.90 - 16.68%",
  },
}

export const previewText = {
  headline: "Simple. Flexible.",
  subheadline:
    "We offer loans tailored to your needs. Preview your options and select the right financing solution for you.",
  // headline: "Simple. Clear.",
  // subheadline:
  //   "We offer a straightforward loan so you can focus on your program and transform your future.",
  cards: [
    {
      heading: "Deferred Repayment",
      body: "Make no payments while you study and for three months after.",
    },
    {
      heading: "Interest Only",
      body:
        "Make low interest-only payments while you study and for three months after completing your program.",
    },
    // {
    //   heading: "Immediate Repayment",
    //   body: "Start paying your loan back one month after your program begins.",
    // },
    // {
    //   heading: "36-Month Loan",
    //   // body:
    //   //   "Pay off your loan faster. Start paying your loan back one month after your program begins, and make 36 monthly payments until your loan is repaid.",
    //   body:
    //     "Start paying your loan back one month after your program begins, and make 36 monthly payments until your loan is repaid.",
    // },
    // {
    //   heading: "60-Month Loan",
    //   body:
    //     "Make smaller monthly payments. Start paying your loan back one month after your program begins, and make 60 monthly payments until your loan is repaid.",
    // },
  ],
}

export const faq = {
  // faq section
  costOfLiving: true, // true if at least one program has cost of living included
  costOfLivingPrograms:
    "Software Engineering Immersive, Remote Immersive, Remote Full-Time, Data Science Immersive, and Remote Data Science programs", // leave as empty string is cost of living availability is the same across all programs
  multCostOfLivingPrograms: true, // true if costOfLivingPrograms string has more than one program
  interestOnly: true, // true if interest-only payments are an option
  immediateRepayment: true, // true if immediate repayment is an option
  multipleLoanLengths: true, // true if 36 and 60 month options are both available
  multipleLoanTypes: false, // true if both IR and IO are available
  multiPrograms: true, // only true if there are multiple programs
  onlinePrograms: true, // true if at least one program is remote/online
  schoolHQState: "CA",
  origFee: 0.05,

  // interest payment FAQ info
  exampleLoanAmount: "$10,000",
  interestRate36: "8.99%",
  interestRate60: "10.99%",
  APR36: "11.13 - 11.80%",
  APR60: "12.63 - 12.93%",
  IOPayment36: "$78.66",
  IOPayment60: "$96.16",

  // max loan amounts by program for faq1
  loanRange: [
    {
      programName:
        "Hack Reactor's Software Engineering Immersive and Remote Immersive",
      maxAmount: "$15,980",
      col: true,
      colAmount: "$7,500",
    },
    {
      programName: "Hack Reactor's Remote Full-Time",
      maxAmount: "$15,980",
      col: true,
      colAmount: "$7,500",
    },
    {
      programName: "Hack Reactor's Remote Part-Time",
      maxAmount: "$15,980",
      col: false,
      colAmount: "$6,000",
    },
    {
      programName: "Galvanize's Software Engineering Immersive",
      maxAmount: "$15,980",
      col: true,
      colAmount: "$12,000, depending on your metro,",
    },
    {
      programName: "Galvanize's Data Science Immersive",
      maxAmount: "$15,980",
      col: true,
      colAmount: "$12,000, depending on your metro,",
    },
    {
      programName: "Galvanize's Remote Data Science",
      maxAmount: "$15,980",
      col: true,
      colAmount: "$9,000",
    },
    {
      programName: "Galvanize's Remote Data Science - Part-Time",
      maxAmount: "$15,980",
      col: false,
      colAmount: "$9,000",
    },
  ],
}

// ***** END TERMS AND FAQ INFO *****

// ***** BEGIN GENERAL SCHOOL INFO *****

export const schoolLogo = logo // go to header.js if height needs adjustment

export const schoolName = "Galvanize and Hack Reactor"

export const schoolURL = "https://www.hackreactor.com/" // update with url of school's website

export const skfURL = "https://galvanizehackreactor.skills.fund/" // update with Skills Fund url

export const headline = "Learn to Code at Hack Reactor" // update headline as appropriate

export const leadContent = {
  header: "Your last step on the path toward changing your career",
  paragraph: `${schoolName} supports its students on their coding journey by providing full-time, part-time, and remote options. ${schoolName} partners with Skills Fund to offer tuition${
    faq.costOfLiving ? " and cost of living" : ""
  } financing so more students like you can access their program.`,
}

export const threeStepCardText = {
  step1: "",
  step2: {
    header: "select your program",
    text:
      "Choose between the Software Engineering Immersive, Remote Immersive, and Remote Part-Time programs.",
  },
  step3: `You'll be on your way to an exciting career in tech as part of ${schoolName}'s powerful network.`,
}

export const netlifyFormName = "hackreactor_contact"

export const GATracking = "UA-68312423-1"

export const hubspotFormId = "af5fc168-73ff-4c11-840e-5f6d50cd1a28" // create Hubspot form, get form id after publishing

export const selectAProgram = "select_a_hackreactor_program" // update school name to match form field on Hubspot, *** change to "program_name" if only one program ***"

// ***** END GENERAL SCHOOL INFO *****

// ***** BEGIN LOAN APP AND CALC INFO *****

export const defaultLoanAmount = 10000
export const placeholder = "$10,000"
export const interestRates = {
  ir36: 8.99,
  ir60: 10.99,
}
export const moreThanSixPrograms = false // set to true if there are 7 or more programs in the loan application. True will render a dropdown menu, false will render buttons for each program.

export const programLoanInfo = [
  // update with program names and corresponding loan URLs with market segment code from Master Loan Parameters
  {
    name: "Software Engineering Immersive (Hack Reactor)",
    url: "https://my.skills.fund/application?lenderCode=SKHRSEA18",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 23480,
      loanTerm36: true,
      loanTerm60: true,
      "Interest Only": {
        // interest-only
        k: 6,
        apr36: 11.59,
        apr60: 12.84,
      },
      "Immediate Repayment": null, // immediate repayment
    },
    defaultLoanType: "Interest Only", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: false, // true if there are multiple metros with different tuition amounts for the same program
    showLoanTypes: false, // true if both IR and IO are available
    loanTypes: ["Interest Only"],
    locations: ["Metro 1", "Metro 2", "Metro 3"],
    metros: [
      // list in same order as locations array above
      {
        location: "Metro 1",
        loanInfo: {
          // // match loanInfo to Program 1 above
          maxLoanAmt: 23480,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            // interest-only
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": null, // immediate repayment
        },
      },
      {
        location: "Metro 2",
        loanInfo: {
          maxLoanAmt: 15545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Metro 3",
        loanInfo: {
          maxLoanAmt: 20545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
    ],
  },
  {
    name: "Remote Immersive (Hack Reactor)",
    url: "https://my.skills.fund/application?lenderCode=SKHRRFTB18",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 23480,
      loanTerm36: true,
      loanTerm60: true,
      "Interest Only": {
        k: 6,
        apr36: 11.59,
        apr60: 12.84,
      },
      "Immediate Repayment": null,
    },
    defaultLoanType: "Interest Only", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: false,
    showLoanTypes: false,
    loanTypes: ["Interest Only"],
    locations: ["Metro 1", "Metro 2"],
    metros: [
      {
        location: "Metro 1",
        loanInfo: {
          // match loanInfo to Program 2 loanInfo above
          maxLoanAmt: 23480,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Metro 2",
        loanInfo: {
          maxLoanAmt: 15545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
    ],
  },
  {
    name: "Remote Part-Time (Hack Reactor)",
    url: "https://my.skills.fund/application?lenderCode=SKHRRPTA18",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 15980,
      loanTerm36: true,
      loanTerm60: true,
      "Interest Only": {
        k: 12,
        apr36: 11.13,
        apr60: 12.63,
      },
      "Immediate Repayment": null,
    },
    defaultLoanType: "Interest Only", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: false,
    showLoanTypes: false,
    loanTypes: ["Interest Only"],
    locations: ["Metro A", "Metro B", "Metro C"],
    metros: [
      {
        location: "Metro A",
        loanInfo: {
          // match loanInfo to Program 3 loanInfo above
          maxLoanAmt: 15980,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 12,
            apr36: 11.13,
            apr60: 12.63,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Metro B",
        loanInfo: {
          maxLoanAmt: 15545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": {
            apr36: 11.25,
            apr60: 12.55,
          },
        },
      },
      {
        location: "Metro C",
        loanInfo: {
          maxLoanAmt: 20545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": {
            apr36: 11.25,
            apr60: 12.55,
          },
        },
      },
    ],
  },
  {
    name: "Software Engineering Immersive (Galvanize)",
    url: "https://my.skills.fund/application?lenderCode=SKGWD18",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 24980,
      loanTerm36: true,
      loanTerm60: true,
      "Interest Only": {
        // interest-only
        k: 6,
        apr36: 11.59,
        apr60: 12.84,
      },
      "Immediate Repayment": null, // immediate repayment
    },
    defaultLoanType: "Interest Only", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: true, // true if there are multiple metros with different tuition amounts for the same program
    showLoanTypes: false, // true if both IR and IO are available
    loanTypes: ["Interest Only"],
    locations: [
      "Austin",
      "Boulder",
      "Los Angeles",
      "New York",
      "Phoenix",
      "Platte",
      "San Francisco",
      "Seattle",
    ],
    metros: [
      // list in same order as locations array above
      {
        location: "Austin",
        loanInfo: {
          // // match loanInfo to Program 1 above
          maxLoanAmt: 24980,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Boulder",
        loanInfo: {
          maxLoanAmt: 24980,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Los Angeles",
        loanInfo: {
          maxLoanAmt: 24980,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "New York",
        loanInfo: {
          maxLoanAmt: 27980,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Phoenix",
        loanInfo: {
          maxLoanAmt: 24980,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Platte",
        loanInfo: {
          maxLoanAmt: 24980,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "San Francisco",
        loanInfo: {
          maxLoanAmt: 27980,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Seattle",
        loanInfo: {
          maxLoanAmt: 27980,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": null,
        },
      },
    ],
  },
  {
    name: "Data Science Immersive (Galvanize)",
    url: "https://my.skills.fund/application?lenderCode=SKGDS18",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 24980,
      loanTerm36: true,
      loanTerm60: true,
      "Interest Only": {
        k: 6,
        apr36: 11.59,
        apr60: 12.84,
      },
      "Immediate Repayment": null,
    },
    defaultLoanType: "Interest Only", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: true,
    showLoanTypes: false,
    loanTypes: ["Interest Only"],
    locations: [
      "Austin",
      "Boulder",
      "Los Angeles",
      "New York",
      "Phoenix",
      "Platte",
      "San Francisco",
      "Seattle",
    ],
    metros: [
      {
        location: "Austin",
        loanInfo: {
          // match loanInfo to Program 2 loanInfo above
          maxLoanAmt: 24980,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Boulder",
        loanInfo: {
          maxLoanAmt: 24980,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Los Angeles",
        loanInfo: {
          maxLoanAmt: 24980,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "New York",
        loanInfo: {
          maxLoanAmt: 27980,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Phoenix",
        loanInfo: {
          maxLoanAmt: 24980,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Platte",
        loanInfo: {
          maxLoanAmt: 24980,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "San Francisco",
        loanInfo: {
          maxLoanAmt: 27980,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Seattle",
        loanInfo: {
          maxLoanAmt: 27980,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": null,
        },
      },
    ],
  },
  // {
  //   name: "Remote Software Engineering Immersive",
  //   url: "https://my.skills.fund/application?lenderCode=SKGALRE19",
  //   loanInfo: {
  //     // match loanInfo in first metro below
  //     maxLoanAmt: 17980,
  //     loanTerm36: true,
  //     loanTerm60: true,
  //     "Interest Only": {
  //       k: 6,
  //       apr36: 11.59,
  //       apr60: 12.84,
  //     },
  //     "Immediate Repayment": null,
  //   },
  //   defaultLoanType: "Interest Only", // leave at 0 for interest-only, set to 1 for immediate repayment
  //   showMetros: false,
  //   showLoanTypes: false,
  // loanTypes: ["Interest Only"],
  // locations: ["Metro A", "Metro B", "Metro C"],
  //   metros: [
  //     {
  //       location: "Metro A",
  //       loanInfo: {
  //         // match loanInfo to Program 3 loanInfo above
  //         maxLoanAmt: 17980,
  //         loanTerm36: true,
  //         loanTerm60: true,
  //         "Interest Only": {
  //           k: 6,
  //           apr36: 11.59,
  //           apr60: 12.84,
  //         },
  //         "Immediate Repayment": null,
  //       },
  //     },
  //     {
  //       location: "Metro B",
  //       loanInfo: {
  //         maxLoanAmt: 15545,
  //         loanTerm36: true,
  //         loanTerm60: true,
  //         "Interest Only": {
  //           k: 6,
  //           apr36: 11.59,
  //           apr60: 12.84,
  //         },
  //         "Immediate Repayment": {
  //           apr36: 11.25,
  //           apr60: 12.55,
  //         },
  //       },
  //     },
  //     {
  //       location: "Metro C",
  //       loanInfo: {
  //         maxLoanAmt: 28500,
  //         loanTerm36: true,
  //         loanTerm60: true,
  //         "Interest Only": {
  //           k: 6,
  //           apr36: 11.59,
  //           apr60: 12.84,
  //         },
  //         "Immediate Repayment": {
  //           apr36: 11.25,
  //           apr60: 12.55,
  //         },
  //       },
  //     },
  //   ],
  // },
  {
    name: "Remote Data Science Immersive (Galvanize)",
    url: "https://my.skills.fund/application?lenderCode=SKGALRE19",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 24980,
      loanTerm36: true,
      loanTerm60: true,
      "Interest Only": {
        k: 6,
        apr36: 11.59,
        apr60: 12.84,
      },
      "Immediate Repayment": null,
    },
    defaultLoanType: "Interest Only", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: false,
    showLoanTypes: false,
    loanTypes: ["Interest Only"],
    locations: ["Metro A", "Metro B", "Metro C"],
    metros: [
      {
        location: "Metro A",
        loanInfo: {
          // match loanInfo to Program 3 loanInfo above
          maxLoanAmt: 24980,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Metro B",
        loanInfo: {
          maxLoanAmt: 15545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": {
            apr36: 11.25,
            apr60: 12.55,
          },
        },
      },
      {
        location: "Metro C",
        loanInfo: {
          maxLoanAmt: 20545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": {
            apr36: 11.25,
            apr60: 12.55,
          },
        },
      },
    ],
  },
  {
    name: "Remote Data Science Part-Time (Galvanize)",
    url: "https://my.skills.fund/application?lenderCode=SKGRDSPT20",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 24980,
      loanTerm36: true,
      loanTerm60: true,
      "Interest Only": {
        k: 6,
        apr36: 11.59,
        apr60: 12.84,
      },
      "Immediate Repayment": null,
    },
    defaultLoanType: "Interest Only", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: false,
    showLoanTypes: false,
    loanTypes: ["Interest Only"],
    locations: ["Metro A", "Metro B", "Metro C"],
    metros: [
      {
        location: "Metro A",
        loanInfo: {
          // match loanInfo to Program 3 loanInfo above
          maxLoanAmt: 24980,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Metro B",
        loanInfo: {
          maxLoanAmt: 15545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": {
            apr36: 11.25,
            apr60: 12.55,
          },
        },
      },
      {
        location: "Metro C",
        loanInfo: {
          maxLoanAmt: 20545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 6,
            apr36: 11.59,
            apr60: 12.84,
          },
          "Immediate Repayment": {
            apr36: 11.25,
            apr60: 12.55,
          },
        },
      },
    ],
  },
]

// ***** BEGIN LOAN CALC TEXT INFO *****
export const programMaxText =
  "Choose the loan amount that works best for you. Borrow up to $23,480 for Hack Reactor's Software Engineering Immersive and Remote Immersive programs, or up to $15,980 for the Remote Part-Time program."

export const paymentTable = {
  headers: ["Program", "Tuition", "Cost of Living", "Max Total"],
  data: [
    {
      name: "PROGRAM 1",
      tuition: "$13,495",
      col: "$6,000",
      max: "$19,495",
    },
    {
      name: "PROGRAM 2",
      tuition: "$16,495",
      col: "$6,000",
      max: "$22,495",
    },
    {
      name: "PROGRAM 3",
      tuition: "$13,495",
      col: "--",
      max: "$13,495",
    },
  ],
  show: false,
}

// ***** END LOAN CALC TEXT INFO *****

// ***** Snippets for Netlify *****

// before body Hubspot

// <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/3871135.js"></script>

// before head Crazyegg

// <script type="text/javascript" src="//script.crazyegg.com/pages/scripts/0076/9926.js" async="async"></script>
