import { createElement } from `react`
const gatsby = jest.requireActual(`gatsby`)

export default {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(({ to, ...rest }) =>
    createElement(`a`, {
      ...rest,
      href: to,
    })
  ),
  StaticQuery: jest.fn(),
}
