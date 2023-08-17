import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import DigitalTimer from '../App'

const playIcon = 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
const pauseIcon = 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
const resetIcon = 'https://assets.ccbp.in/frontend/react-js/reset-icon-img.png'

describe(':::RJSCPF77TH_TEST_SUITE_1:::Digital Timer App tests', () => {
  beforeEach(() => {
    jest.useFakeTimers()
    render(<DigitalTimer />)
  })

  afterAll(() => {
    jest.restoreAllMocks()
  })

  it(':::RJSCPF77TH_TEST_1:::Page should consist of HTML heading element with text content as "Digital Timer":::5:::', () => {
    expect(
      screen.getByRole('heading', {name: /Digital Timer/i, exact: false}),
    ).toBeInTheDocument()
  })

  it(':::RJSCPF77TH_TEST_2:::Page should initially consist of HTML heading element with text content as Timer limit value "25:00":::5:::', () => {
    expect(
      screen.getByRole('heading', {name: /25:00/i, exact: false}),
    ).toBeInTheDocument()
  })

  it(':::RJSCPF77TH_TEST_3:::Page should initially consist of HTML paragraph element with text content as "Paused":::5:::', () => {
    const paragraphEl = screen.getByText(/Paused/i, {exact: false})

    expect(paragraphEl).toBeInTheDocument()
    expect(paragraphEl.tagName).toBe('P')
  })

  it(':::RJSCPF77TH_TEST_4:::Page should consist of HTML image element with src attribute value as the URL for Play icon and alt text as "play icon":::5:::', () => {
    expect(
      screen.getByRole('img', {name: /play icon/i, exact: false}).src,
    ).toBe(playIcon)
  })

  it(':::RJSCPF77TH_TEST_5:::Page should consist of HTML button element with text content as "Start":::5:::', () => {
    expect(
      screen.getByRole('button', {name: /Start/i, exact: false}),
    ).toBeInTheDocument()
  })

  it(':::RJSCPF77TH_TEST_6:::Page should consist of HTML image element with src attribute value as the URL for Reset icon and alt text as "reset icon":::5:::', () => {
    expect(
      screen.getByRole('img', {name: /reset icon/i, exact: false}).src,
    ).toBe(resetIcon)
  })

  it(':::RJSCPF77TH_TEST_7:::Page should consist of HTML button element with text content as "Reset":::5:::', () => {
    expect(
      screen.getByRole('button', {name: /Reset/i, exact: false}),
    ).toBeInTheDocument()
  })

  it(':::RJSCPF77TH_TEST_8:::Page should consist of HTML paragraph element with text content as "Set Timer limit":::5:::', () => {
    const paragraphEl = screen.getByText(/Set Timer limit/i, {exact: false})

    expect(paragraphEl).toBeInTheDocument()
    expect(paragraphEl.tagName).toBe('P')
  })

  it(':::RJSCPF77TH_TEST_9:::Page should consist of HTML paragraph element with text content as "25":::5:::', () => {
    const paragraphEl = screen.getAllByText(/25/i, {exact: false})[1]

    expect(paragraphEl).toBeInTheDocument()
    expect(paragraphEl.tagName).toBe('P')
  })

  it(':::RJSCPF77TH_TEST_10:::Page should consist of HTML button element with text content as "+" (plus):::5:::', () => {
    expect(screen.getByRole('button', {name: /\+/i})).toBeInTheDocument()
  })

  it(':::RJSCPF77TH_TEST_11:::Page should consist of HTML button element with text content as "-" (minus):::5:::', () => {
    expect(screen.getByRole('button', {name: /-/i})).toBeInTheDocument()
  })

  it(':::RJSCPF77TH_TEST_12:::When clicked on Start button the page should consist of HTML button element with text content as "Pause" by replacing the "Start":::5:::', () => {
    userEvent.click(screen.getByRole('button', {name: /Start/i, exact: false}))

    expect(
      screen.queryByRole('button', {name: /Start/i, exact: false}),
    ).not.toBeInTheDocument()
    expect(
      screen.getByRole('button', {name: /Pause/i, exact: false}),
    ).toBeInTheDocument()
  })

  it(':::RJSCPF77TH_TEST_13:::When clicked on Start button the page should consist of HTML image element with src as URL for pause icon and alt text as "pause icon":::5:::', () => {
    userEvent.click(screen.getByRole('button', {name: /Start/i, exact: false}))

    expect(
      screen.queryByRole('img', {name: /Play icon/i, exact: false}),
    ).not.toBeInTheDocument()
    expect(
      screen.getByRole('img', {name: /Pause icon/i, exact: false}).src,
    ).toBe(pauseIcon)
  })

  it(':::RJSCPF77TH_TEST_14:::When clicked on Start button the Timer should start running backward and the page should consist of HTML heading element with text content displaying the elapsed time:::5:::', async () => {
    expect(
      screen.getByRole('heading', {name: /25:00/i, exact: false}),
    ).toBeInTheDocument()
    userEvent.click(screen.getByRole('button', {name: /Start/i, exact: false}))
    jest.runOnlyPendingTimers()
    expect(
      screen.getByRole('heading', {name: /24:59/i, exact: false}),
    ).toBeInTheDocument()

    jest.runTimersToTime(1000)
    expect(
      screen.getByRole('heading', {name: /24:58/i, exact: false}),
    ).toBeInTheDocument()
    jest.runTimersToTime(60000)
    expect(
      screen.getByRole('heading', {name: /23:58/i, exact: false}),
    ).toBeInTheDocument()

    jest.runTimersToTime(60000)
    expect(
      screen.getByRole('heading', {name: /22:58/i, exact: false}),
    ).toBeInTheDocument()
  })

  it(':::RJSCPF77TH_TEST_15:::When clicked on Start button the page should consist of HTML paragraph element with text content as "Running" by replacing the "Paused" text:::5:::', () => {
    userEvent.click(screen.getByRole('button', {name: /Start/i, exact: false}))

    expect(
      screen.queryByText(/Paused/i, {exact: false}),
    ).not.toBeInTheDocument()
    expect(screen.getByText(/Running/i, {exact: false}).tagName).toBe('P')
  })

  it(':::RJSCPF77TH_TEST_16:::When clicked on Pause button the page should consist of HTML button element with text content as "Start" by replacing the "Pause" text:::5:::', () => {
    userEvent.click(screen.getByRole('button', {name: /Start/i, exact: false}))
    userEvent.click(screen.getByRole('button', {name: /Pause/i, exact: false}))

    expect(
      screen.queryByRole('button', {name: /Pause/i, exact: false}),
    ).not.toBeInTheDocument()
    expect(
      screen.getByRole('button', {name: /Start/i, exact: false}),
    ).toBeInTheDocument()
  })

  it(':::RJSCPF77TH_TEST_17:::When clicked on Pause button the page should consist of HTML image element with src as URL for play icon and alt text as "play icon":::5:::', () => {
    userEvent.click(screen.getByRole('button', {name: /Start/i, exact: false}))
    userEvent.click(screen.getByRole('button', {name: /Pause/i, exact: false}))

    expect(
      screen.queryByRole('img', {name: /Pause icon/i, exact: false}),
    ).not.toBeInTheDocument()
    expect(
      screen.getByRole('img', {name: /Play icon/i, exact: false}).src,
    ).toBe(playIcon)
  })

  it(':::RJSCPF77TH_TEST_18:::When clicked on Pause button the Timer should stop running backward and the page should consist of HTML heading element with text content displaying the remaining time:::5:::', async () => {
    expect(
      screen.getByRole('heading', {name: /25:00/i, exact: false}),
    ).toBeInTheDocument()
    userEvent.click(screen.getByRole('button', {name: /Start/i, exact: false}))

    jest.runOnlyPendingTimers()
    expect(
      screen.getByRole('heading', {name: /24:59/i, exact: false}),
    ).toBeInTheDocument()

    jest.runTimersToTime(60000)
    expect(
      screen.getByRole('heading', {name: /23:59/i, exact: false}),
    ).toBeInTheDocument()

    userEvent.click(screen.getByRole('button', {name: /Pause/i, exact: false}))
    jest.runTimersToTime(60000)
    expect(
      screen.getByRole('heading', {name: /23:59/i, exact: false}),
    ).toBeInTheDocument()
  })

  it(':::RJSCPF77TH_TEST_19:::When clicked on Pause button the page should consist of HTML paragraph element with text content as "Paused" by replacing the "Running" text:::5:::', () => {
    userEvent.click(screen.getByRole('button', {name: /Start/i, exact: false}))
    userEvent.click(screen.getByRole('button', {name: /Pause/i, exact: false}))

    expect(
      screen.queryByText(/Running/i, {exact: false}),
    ).not.toBeInTheDocument()
    expect(screen.getByText(/Paused/i, {exact: false}).tagName).toBe('P')
  })

  it(':::RJSCPF77TH_TEST_20:::When clicked on Start button after pausing the timer then the Timer should start again:::5:::', async () => {
    expect(
      screen.getByRole('heading', {name: /25:00/i, exact: false}),
    ).toBeInTheDocument()
    userEvent.click(screen.getByRole('button', {name: /Start/i, exact: false}))

    jest.runOnlyPendingTimers()
    expect(
      screen.getByRole('heading', {name: /24:59/i, exact: false}),
    ).toBeInTheDocument()

    jest.runTimersToTime(60000)
    expect(
      screen.getByRole('heading', {name: /23:59/i, exact: false}),
    ).toBeInTheDocument()

    userEvent.click(screen.getByRole('button', {name: /Pause/i, exact: false}))
    jest.runTimersToTime(60000)
    expect(
      screen.getByRole('heading', {name: /23:59/i, exact: false}),
    ).toBeInTheDocument()

    userEvent.click(screen.getByRole('button', {name: /Start/i, exact: false}))
    jest.runTimersToTime(60000)
    expect(
      screen.getByRole('heading', {name: /22:59/i, exact: false}),
    ).toBeInTheDocument()
  })

  it(':::RJSCPF77TH_TEST_21:::When the timer is started and Reset button is clicked the timer should stop and reset to default value:::5:::', () => {
    expect(
      screen.getByRole('heading', {name: /25:00/i, exact: false}),
    ).toBeInTheDocument()
    userEvent.click(screen.getByRole('button', {name: /Start/i, exact: false}))

    jest.runOnlyPendingTimers()
    expect(
      screen.getByRole('heading', {name: /24:59/i, exact: false}),
    ).toBeInTheDocument()

    jest.runTimersToTime(60000)
    expect(
      screen.getByRole('heading', {name: /23:59/i, exact: false}),
    ).toBeInTheDocument()
    userEvent.click(screen.getByRole('button', {name: /Reset/i, exact: false}))
    jest.runTimersToTime(60000)
    expect(
      screen.getByRole('heading', {name: /25:00/i, exact: false}),
    ).toBeInTheDocument()
  })

  it(':::RJSCPF77TH_TEST_22:::When the HTML button element with "+" as text content is clicked then the timer limit value should be incremented by one:::5:::', () => {
    expect(
      screen.getByRole('button', {name: /\+/, exact: false}),
    ).toBeInTheDocument()
    userEvent.click(screen.getByRole('button', {name: /\+/, exact: false}))
    expect(screen.getByText(/26:00/, {exact: false})).toBeInTheDocument()
  })

  it(':::RJSCPF77TH_TEST_23:::When the HTML button element with "-" as text content is clicked then the timer limit value should be decremented by one:::5:::', () => {
    expect(
      screen.getByRole('button', {name: /-/, exact: false}),
    ).toBeInTheDocument()
    userEvent.click(screen.getByRole('button', {name: /-/, exact: false}))
    expect(screen.getByText(/24:00/, {exact: false})).toBeInTheDocument()
  })

  it(':::RJSCPF77TH_TEST_24:::When the Timer is running and the HTML button with text content as "+" is clicked then the timer limit value should not increase:::5:::', () => {
    userEvent.click(screen.getByRole('button', {name: /Start/i, exact: false}))
    jest.runTimersToTime(1000)
    userEvent.click(screen.getByRole('button', {name: /\+/, exact: false}))
    expect(screen.getByText('25', {exact: false})).toBeInTheDocument()
  })

  it(':::RJSCPF77TH_TEST_25:::When the Timer is running and the HTML button with text content as "-" is clicked then the timer limit value should not decrease:::5:::', () => {
    userEvent.click(screen.getByRole('button', {name: /Start/i, exact: false}))
    jest.runTimersToTime(1000)
    userEvent.click(screen.getByRole('button', {name: /-/, exact: false}))
    expect(screen.getByText('25', {exact: false})).toBeInTheDocument()
  })
})
