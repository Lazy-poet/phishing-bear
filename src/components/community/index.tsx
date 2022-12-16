import { customStyled } from "../../styles/custom-styles"
export * from './add-friend'
export * from './ranking'
export * from './compete'

export const CommunityWrapper = customStyled('div', ({ $theme }) => ({
    padding: '70px 10px',
    gap: '30px',
    [$theme.mediaQuery.xsmall]: {
        padding: '70px 20px',

    },
    width: '100vw',
    maxWidth: '1200px',
    height: '100%',
    margin: '0 auto',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'start',
    justifyContent: 'start',
    scrollSnapAlign: "start",
}))

