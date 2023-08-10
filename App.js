import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from '../App'

const stopwatchImg =
  'https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png'

describe(':::RJSCP7SC0R_TEST_SUITE_1:::Stopwatch tests', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterAll(() => {
    jest.restoreAllMocks()
  })

  it(':::RJSCP7SC0R_TEST_1:::Page should consist HTML heading element with text content as "Stopwatch":::5:::', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {name: /Stopwatch/i, exact: false}),
    ).toBeInTheDocument()
  })

  it(':::RJSCP7SC0R_TEST_2:::Page should consist HTML button element with text content as "Start":::5:::', () => {
    render(<App />)

    expect(
      screen.getByRole('button', {name: /Start/i, exact: false}),
    ).toBeInTheDocument()
  })

  it(':::RJSCP7SC0R_TEST_3:::Page should consist two HTML button elements with text content as "Stop" and "Reset":::5:::', () => {
    render(<App />)

    expect(
      screen.getByRole('button', {name: /Stop/i, exact: false}),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', {name: /Reset/i, exact: false}),
    ).toBeInTheDocument()
  })

  it(':::RJSCP7SC0R_TEST_4:::Page should initially consist of HTML heading element with text content as "00:00":::5:::', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {name: /00:00/i, exact: false}),
    ).toBeInTheDocument()
  })

  it(':::RJSCP7SC0R_TEST_5:::Page should consist of HTML image element with alt as "stopwatch" and src attribute value as the URL for the stopwatch image:::5:::', () => {
    render(<App />)

    const imageEl = screen.getByRole('img', {name: /stopwatch/i, exact: false})
    expect(imageEl).toBeInTheDocument()
    expect(imageEl.src).toBe(stopwatchImg)
  })

  it(':::RJSCP7SC0R_TEST_6:::When Start button is clicked, then the timer should start:::5:::', () => {
    render(<App />)

    userEvent.click(screen.getByRole('button', {name: /Start/i, exact: false}))
    jest.runTimersToTime(1000)

    expect(
      screen.getByRole('heading', {name: /00:01/i, exact: false}),
    ).toBeInTheDocument()
  })

  it(':::RJSCP7SC0R_TEST_7:::When Stop button is clicked, then the timer should stop:::5:::', () => {
    render(<App />)

    userEvent.click(screen.getByRole('button', {name: /Start/i, exact: false}))
    jest.runTimersToTime(1000)
    userEvent.click(screen.getByRole('button', {name: /Stop/i, exact: false}))

    expect(
      screen.getByRole('heading', {name: /00:01/i, exact: false}),
    ).toBeInTheDocument()

    jest.runTimersToTime(1000)

    expect(
      screen.getByRole('heading', {name: /00:01/i, exact: false}),
    ).toBeInTheDocument()
  })

  it(':::RJSCP7SC0R_TEST_8:::When Reset button is clicked, then the timer should be reset to zero:::5:::', () => {
    render(<App />)

    userEvent.click(screen.getByRole('button', {name: /Reset/i, exact: false}))

    expect(
      screen.getByRole('heading', {name: /00:00/i, exact: false}),
    ).toBeInTheDocument()
  })

  it(':::RJSCP7SC0R_TEST_9:::When Start button is clicked after stopping the timer, then the timer should run from where it was stopped:::5:::', () => {
    render(<App />)

    userEvent.click(screen.getByRole('button', {name: /Start/i, exact: false}))
    jest.runTimersToTime(1000)
    userEvent.click(screen.getByRole('button', {name: /Stop/i, exact: false}))

    expect(
      screen.getByRole('heading', {name: /00:01/i, exact: false}),
    ).toBeInTheDocument()

    userEvent.click(screen.getByRole('button', {name: /Start/i, exact: false}))
    jest.runTimersToTime(1000)

    expect(
      screen.getByRole('heading', {name: /00:02/i, exact: false}),
    ).toBeInTheDocument()
  })
})
