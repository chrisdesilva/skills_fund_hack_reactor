import logo from "../images/logo_hackreactor.png" // add school logo to images folder and import here

// ***** BEGIN TERMS AND FAQ INFO *****

export const schoolInfo = { // term details section
    interestRate36: '8.99%',
    interestRate60: '10.99%',
    APRRange36: '10.76 - 11.16%',
    APRRange60: '12.33 - 12.51%',
    interestOnly: [
        { // for multiple examples of interest only, add items to interestOnly array
            programName: 'the Software Engineering Immersive and Remote Immersive programs',
            APR36: '11.16%',
            financeCharge36: '$3,440.47',
            IOPayment36: '$116.87',
            FullMonthlyPayment36: '$496.00',
            APR60: '12.51%',
            financeCharge60: '$6,060.59',
            IOPayment60: '$142.87',
            FullMonthlyPayment60: '$339.10',
            LoanExampleAmt: '$15,000',
            LoanExampleOFeeAmt: '$600',
            LoanExampleAmtPlusOFee: '$15,600',
            programLength: '3' // program length in months
        },
        { // for multiple examples of interest only, add items to interestOnly array
            programName: 'the Remote Part-Time program',
            APR36: '10.76%',
            financeCharge36: '$4,141.69',
            IOPayment36: '$116.87',
            FullMonthlyPayment36: '$496.00',
            APR60: '12.33%',
            financeCharge60: '$6,917.81',
            IOPayment60: '$142.87',
            FullMonthlyPayment60: '$339.10',
            LoanExampleAmt: '$15,000',
            LoanExampleOFeeAmt: '$600',
            LoanExampleAmtPlusOFee: '$15,600',
            programLength: '9' // program length in months
        },
    ],
    immediateRepayment: [
        { // for multiple examples of immmediate repayment, add items to immediateRepayment array
            programName: 'PROGRAM NAME',
            APR36: 'XX.XX%',
            financeCharge36: '$X,XXX.XX',
            FullMonthlyPayment36: '$XXX.XX',
            APR60: 'XX.XX%',
            financeCharge60: '$X,XXX.XX',
            FullMonthlyPayment60: '$XXX.XX',
            LoanExampleAmt: '$10,000',
            LoanExampleOFeeAmt: '$400',
            LoanExampleAmtPlusOFee: '$10,400'
        }
    ]
}

export const faq = { // faq section
    costOfLiving: true, // true if at least one program has cost of living included
    costOfLivingPrograms: 'Software Engineering Immersive & Remote Immersive programs', // leave as empty string is cost of living availability is the same across all programs
    multCostOfLivingPrograms: true, // true if costOfLivingPrograms string has more than one program
    interestOnly: true, // true if interest-only payments are an option
    immediateRepayment: false, // true if immediate repayment is an option
    multipleLoanLengths: true, // true if 36 and 60 month options are both available
    multipleLoanTypes: false, // true if both IR and IO are available
    multiPrograms: true, // only true if there are multiple programs
    onlinePrograms: true, // true if at least one program is remote/online
    schoolHQState: 'CA',
    origFee: 0.04,

    // interest payment FAQ info
    interestRate36: '8.99%',
    interestRate60: '10.99%',
    APR36: '10.76 - 11.16%',
    APR60: '12.33 - 12.51%',
    IOPayment36: '$116.87',
    IOPayment60: '$142.87',

    // max loan amounts by program for faq1
    loanRange: [
        {
            programName: "Software Engineering Immersive and Remote Immersive",
            maxAmount: "$15,980",
            col: true,
            colAmount: "$7,500"
        },
        {
            programName: "Remote Part-Time",
            maxAmount: "$15,980",
            col: false,
            colAmount: "$6,000"
        },
    ]
}

// ***** END TERMS AND FAQ INFO ***** 

// ***** BEGIN GENERAL SCHOOL INFO ***** 

export const schoolLogo = logo // go to header.js if height needs adjustment

export const schoolName = "Hack Reactor"

export const schoolURL = 'https://www.hackreactor.com/' // update with url of school's website

export const headline = "Learn to Code at Hack Reactor" // update headline as appropriate

export const leadContent = {
    header: "Your last step on the path toward changing your career",
    paragraph: `${schoolName} supports its students on their coding journey by providing full-time, part-time, and remote options. ${schoolName} partners with Skills Fund to offer tuition${faq.costOfLiving ? ' and cost of living' : ''} financing so more students like you can access their program.`
}

export const threeStepCardText = {
    step1: "",
    step2: {
        header: "select your program",
        text: "Choose between the Software Engineering Immersive, Remote Immersive, and Remote Part-Time programs."
    },
    step3: `You'll be on your way to an exciting career in tech as part of ${schoolName}'s powerful network.`
}

export const netlifyFormName = 'hackreactor_contact'

export const GATracking = 'UA-68312423-1'

export const hubspotFormId = "af5fc168-73ff-4c11-840e-5f6d50cd1a28" // create Hubspot form, get form id after publishing

export const selectAProgram = "select_a_hackreactor_program" // update school name to match form field on Hubspot, *** change to "program_name" if only one program ***"

// ***** END GENERAL SCHOOL INFO ***** 


// ***** BEGIN LOAN APP AND CALC INFO *****

export const defaultLoanAmount = 10000
export const placeholder = '$10,000'
export const interestRates = {
    ir36: 8.99,
    ir60: 10.99
}
export const moreThanSixPrograms = false // set to true if there are 7 or more programs in the loan application. True will render a dropdown menu, false will render buttons for each program.

export const programLoanInfo = [ // update with program names and corresponding loan URLs with market segment code from Master Loan Parameters
    {
        name: "Software Engineering Immersive",
        url: "https://sf.privateloan.studentloan.org/external/LoanApplication.do?lenderCode=SKHRSEA18",
        loanInfo: { // match loanInfo in first metro below
            maxLoanAmt: 23480,
            loanTerm36: true,
            loanTerm60: true,
            '0': { // interest-only 
                k: 5, 
                apr36: 11.16, 
                apr60: 12.51
            },
            '1': null // immediate repayment
        },
        defaultLoanType: "0", // leave at 0 for interest-only, set to 1 for immediate repayment
        showMetros: false, // true if there are multiple metros with different tuition amounts for the same program
        showLoanTypes: false, // true if both IR and IO are available
        locations: ["Metro 1", "Metro 2", "Metro 3"],
        metros: [ // list in same order as locations array above
          {
            location: "Metro 1",
            loanInfo: { // // match loanInfo to Program 1 above
              maxLoanAmt: 23480,
              loanTerm36: true,
              loanTerm60: true,
              '0': { // interest-only 
                  k: 5, 
                  apr36: 11.16, 
                  apr60: 12.51
              },
              '1': null // immediate repayment
            }
          },
          {
            location: "Metro 2",
            loanInfo: {
                maxLoanAmt: 15545,
                loanTerm36: true,
                loanTerm60: true,
                '0': { 
                  k: 5, 
                  apr36: 11.16, 
                  apr60: 12.51
                },
                '1': null
            }
          },
          {
            location: "Metro 3",
            loanInfo: {
                maxLoanAmt: 20545,
                loanTerm36: true,
                loanTerm60: true,
                '0': { 
                  k: 5, 
                  apr36: 11.16, 
                  apr60: 12.51
                },
                '1': null
              },
            }
        ]
    },
    {
        name: "Remote Immersive",
        url: "https://sf.privateloan.studentloan.org/external/LoanApplication.do?lenderCode=SKHRRFTB18",
        loanInfo: { // match loanInfo in first metro below
            maxLoanAmt: 23480,
            loanTerm36: true,
            loanTerm60: true,
            '0': { 
                k: 5, 
                apr36: 11.16, 
                apr60: 12.51
            },
            '1': null
        },
        defaultLoanType: "0", // leave at 0 for interest-only, set to 1 for immediate repayment
        showMetros: false,
        showLoanTypes: false,
        locations: ["Metro 1", "Metro 2"],
        metros: [
            {
              location: "Metro 1",
              loanInfo: { // match loanInfo to Program 2 loanInfo above
                maxLoanAmt: 23480,
                loanTerm36: true,
                loanTerm60: true,
                '0': { 
                    k: 5, 
                    apr36: 11.16, 
                    apr60: 12.51
                },
                '1': null
              }
            },
            {
              location: "Metro 2",
              loanInfo: {
                  maxLoanAmt: 15545,
                  loanTerm36: true,
                  loanTerm60: true,
                  '0': { 
                    k: 5, 
                    apr36: 11.16, 
                    apr60: 12.51
                  },
                  '1': null
              }
            }
          ]
    },
    {
        name: "Remote Part-Time",
        url: "https://sf.privateloan.studentloan.org/external/LoanApplication.do?lenderCode=SKHRRPTA18",
        loanInfo: { // match loanInfo in first metro below
            maxLoanAmt: 15980,
            loanTerm36: true,
            loanTerm60: true,
            '0': { 
                k: 11, 
                apr36: 10.76, 
                apr60: 12.33
            },
            '1': null
        },
        defaultLoanType: "0", // leave at 0 for interest-only, set to 1 for immediate repayment
        showMetros: false,
        showLoanTypes: false,
        locations: ["Metro A", "Metro B", "Metro C"],
        metros: [
            {
              location: "Metro A",
              loanInfo: { // match loanInfo to Program 3 loanInfo above
                maxLoanAmt: 15980,
                loanTerm36: true,
                loanTerm60: true,
                '0': { 
                    k: 11, 
                    apr36: 10.76, 
                    apr60: 12.33
                },
                '1': null
              }
            },
            {
              location: "Metro B",
              loanInfo: {
                  maxLoanAmt: 15545,
                  loanTerm36: true,
                  loanTerm60: true,
                  '0': { 
                    k: 5, 
                    apr36: 11.16, 
                    apr60: 12.51
                  },
                  '1': {
                    apr36: 11.25, 
                    apr60: 12.55
                }
              }
            },
            {
              location: "Metro C",
              loanInfo: {
                  maxLoanAmt: 20545,
                  loanTerm36: true,
                  loanTerm60: true,
                  '0': { 
                    k: 5, 
                    apr36: 11.16, 
                    apr60: 12.51
                  },
                  '1': {
                    apr36: 11.25, 
                    apr60: 12.55
                }
                },
              }
          ]
    }
]

// ***** BEGIN LOAN CALC TEXT INFO *****
export const programMaxText = "Choose the loan amount that works best for you. Borrow up to $23,480 for Hack Reactor's Software Engineering Immersive and Remote Immersive programs, or up to $15,980 for the Remote Part-Time program."

export const paymentTable = {
    headers: ["Program", "Tuition", "Cost of Living", "Max Total"],
    data: [
        {
            name: "PROGRAM 1",
            tuition: "$13,495",
            col: "$6,000",
            max: "$19,495"
        },
        {
            name: "PROGRAM 2",
            tuition: "$16,495",
            col: "$6,000",
            max: "$22,495"
        },
        {
            name: "PROGRAM 3",
            tuition: "$13,495",
            col: "--",
            max: "$13,495"
        },
    ],
    show: false
}

// ***** END LOAN CALC TEXT INFO *****


// ***** Snippets for Netlify ***** 

// before body Hubspot

// <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/3871135.js"></script>

// before head Crazyegg

// <script type="text/javascript" src="//script.crazyegg.com/pages/scripts/0076/9926.js" async="async"></script>

