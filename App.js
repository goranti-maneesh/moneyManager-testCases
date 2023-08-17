import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import FaqsApp from '../App'

const PLUS_IMAGE_URL =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const MINUS_IMAGE_URL =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

const singleFaqData = {
  id: 0,
  questionText: 'What is IRC?',
  answerText:
    'IRC is an Industry Ready Certification that represents your readiness for a job with the necessary skills.',
}

const faqsList = [
  {
    id: 0,
    questionText: 'What is IRC?',
    answerText:
      'IRC is an Industry Ready Certification that represents your readiness for a job with the necessary skills.',
  },
  {
    id: 1,
    questionText: 'What is the medium of instruction?',
    answerText:
      'The courses would be delivered in English and Telugu. The program will be available in more vernacular languages soon.',
  },
  {
    id: 2,
    questionText:
      'Is there an EMI option to pay the fee for CCBP Tech 4.0 Intensive?',
    answerText:
      'Yes, EMI support is available for credit cards. Please select EMI option while making payment for more information.',
  },
  {
    id: 3,
    questionText: 'How will my doubts be cleared? What is the mechanism?',
    answerText:
      'You can ask your doubts in the discussions section and course mentor will answer them. You can also see the doubts asked by other students.',
  },
]

const originalConsoleError = console.error

describe(':::RJSCPC7UBX_TEST_SUITE_1:::Faqs App tests', () => {
  afterEach(() => {
    console.error = originalConsoleError
  })
  it(':::RJSCPC7UBX_TEST_1:::Page should consist of at least two HTML list items and the faqsList should be rendered using a unique key as a prop for each FAQ item:::5:::', () => {
    console.error = message => {
      if (
        /Each child in a list should have a unique "key" prop/.test(message) ||
        /Encountered two children with the same key/.test(message)
      ) {
        throw new Error(message)
      }
    }
    render(<FaqsApp />)
    expect(screen.getAllByRole('listitem').length).toBeGreaterThanOrEqual(2)
  })

  it(':::RJSCPC7UBX_TEST_2:::Each FAQ item should consist of an HTML main heading element with text content equal to the "question" value of the FAQ item in faqsList provided:::5:::', () => {
    const {questionText} = singleFaqData
    render(<FaqsApp />)
    expect(
      screen.getByRole('heading', {name: questionText}),
    ).toBeInTheDocument()
  })

  it(':::RJSCPC7UBX_TEST_3:::When the plus icon in a FAQ item is clicked, then the HTML paragraph element with text content equal to the "answer" value in faqsList provided should be displayed:::5:::', () => {
    const {answerText} = singleFaqData
    render(<FaqsApp />)

    const plusIconEl = screen.getAllByRole('img', {
      name: /plus/i,
      exact: false,
    })[0]
    userEvent.click(plusIconEl)

    const answerEl = screen.getByText(answerText)
    expect(answerEl).toBeInTheDocument()
    expect(answerEl.tagName).toBe('P')
  })

  it(':::RJSCPC7UBX_TEST_4:::When the plus icon in a FAQ item is clicked, then the plus icon should be replaced with an HTML image element with alt as "minus" and src value as the URL for the minus icon:::5:::', () => {
    render(<FaqsApp />)
    userEvent.click(
      screen.getAllByRole('img', {name: /plus/i, exact: false})[0],
    )

    const minusIconEl = screen.getAllByRole('img', {
      name: /minus/i,
      exact: false,
    })[0]
    expect(minusIconEl.src).toBe(MINUS_IMAGE_URL)
  })

  it(':::RJSCPC7UBX_TEST_5:::When the minus icon in a FAQ item is clicked, then the HTML paragraph element with text content equal to the "answer" value in faqsList provided should be hidden:::5:::', () => {
    const {answerText} = singleFaqData
    render(<FaqsApp />)

    userEvent.click(
      screen.getAllByRole('img', {name: /plus/i, exact: false})[0],
    )
    const answerEl = screen.getByText(answerText)
    userEvent.click(screen.getByRole('img', {name: /minus/i, exact: false}))
    expect(answerEl).not.toBeInTheDocument()
  })

  it(':::RJSCPC7UBX_TEST_6:::When the minus icon in a FAQ item is clicked, then the minus icon should be replaced with an HTML image element with alt as "plus" and src value as the URL for the plus icon:::5:::', () => {
    render(<FaqsApp />)

    userEvent.click(
      screen.getAllByRole('img', {
        name: /plus/i,
        exact: false,
      })[0],
    )

    userEvent.click(screen.getByRole('img', {name: /minus/i, exact: false}))

    const plusIconEl = screen.getAllByRole('img', {
      name: /plus/i,
      exact: false,
    })[0]

    expect(plusIconEl).toBeInTheDocument()
    expect(plusIconEl.src).toBe(PLUS_IMAGE_URL)
    expect(
      screen.queryByRole('img', {name: /minus/i, exact: false}),
    ).not.toBeInTheDocument()
  })

  it(':::RJSCPC7UBX_TEST_7:::Page should consist of at least four HTML image elements with alt as "plus" and src value as the URL for the plus icon:::5:::', () => {
    render(<FaqsApp />)
    const plusImgEls = screen.getAllByRole('img', {name: /plus/i, exact: false})

    expect(plusImgEls.length).toBeGreaterThanOrEqual(4)
    expect(plusImgEls[0].src).toBe(PLUS_IMAGE_URL)
    expect(plusImgEls[1].src).toBe(PLUS_IMAGE_URL)
    expect(plusImgEls[2].src).toBe(PLUS_IMAGE_URL)
    expect(plusImgEls[3].src).toBe(PLUS_IMAGE_URL)
  })

  it(':::RJSCPC7UBX_TEST_8:::Page should consist of all FAQs in faqsList provided:::10:::', () => {
    render(<FaqsApp />)

    const plusIconElements = screen.getAllByRole('img', {
      name: /plus/i,
      exact: false,
    })

    expect(plusIconElements.length).toBeGreaterThanOrEqual(4)

    expect(
      screen.getByRole('heading', {
        name: faqsList[0].questionText,
        exact: false,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: faqsList[1].questionText,
        exact: false,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: faqsList[2].questionText,
        exact: false,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: faqsList[3].questionText,
        exact: false,
      }),
    ).toBeInTheDocument()

    userEvent.click(plusIconElements[0])
    userEvent.click(plusIconElements[1])
    userEvent.click(plusIconElements[2])
    userEvent.click(plusIconElements[3])

    const minusIconElements = screen.getAllByRole('img', {
      name: /minus/i,
      exact: false,
    })

    expect(minusIconElements.length).toBeGreaterThanOrEqual(4)

    const answer0El = screen.getByText(faqsList[0].answerText, {exact: false})
    const answer1El = screen.getByText(faqsList[1].answerText, {exact: false})
    const answer2El = screen.getByText(faqsList[2].answerText, {exact: false})
    const answer3El = screen.getByText(faqsList[3].answerText, {exact: false})

    expect(answer0El).toBeInTheDocument()
    expect(answer0El.tagName).toBe('P')

    expect(answer1El).toBeInTheDocument()
    expect(answer1El.tagName).toBe('P')

    expect(answer2El).toBeInTheDocument()
    expect(answer2El.tagName).toBe('P')

    expect(answer3El).toBeInTheDocument()
    expect(answer3El.tagName).toBe('P')
  })
})
