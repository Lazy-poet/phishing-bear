import { StyledParagraphText, StyledInput } from "@components"
import { useCustomStyletron } from "../../styles/custom-styles"

export const AddFriendCard = () => {
    const [css, theme] = useCustomStyletron()
    return <div className={css({
        width: '100%',
        height: 'fit-content',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: '20px 10px ',

        borderRadius: '15px',
        boxShadow: '1px 4px 8px rgba(0, 0, 0, 0.1)',
        flexFlow: 'column',
        [theme.mediaQuery.xsmall]: {
            flexFlow: 'row',
            padding: '20px 40px',
        }

    })}>
        <div className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '20px'
        })}>
            <div className={css({
                padding: '10px',

                [theme.mediaQuery.small]: {
                    padding: '15px',
                },
                backgroundColor: 'rgba(255, 174, 0, .1)',
                borderRadius: '5px'
            })}>
                <img src="/assets/images/add-friend.svg" alt="" className={css({
                    width: '15px',
                    height: '15px',
                    [theme.mediaQuery.small]: {
                        width: '20px',
                        height: '20px'

                    }
                })} />

            </div>
            <StyledParagraphText color="#FFAE00" overrides={{
                ...theme.typography.font(15, 400),
                [theme.mediaQuery.small]: {
                    ...theme.typography.font(18, 400),

                }
            }}>Add friends</StyledParagraphText>

        </div>

        <div className={css({
            border: '1px solid rgba(0, 0, 0, .2)',
            borderRadius: '50px',
            height: 'fit-content',
            width: '100%',
            maxWidth: '400px',
            padding: '5px',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            [theme.mediaQuery.xsmall]: {
                padding: '10px',

            }
        })}>
            <img src={'/assets/images/search.svg'} className={css({
                height: '28px',
                width: '28px',
                [theme.mediaQuery.xsmall]: {
                    height: '40px',
                    width: '40px'
                }
            })} />
            <StyledInput overrides={{
                // border: '1px solid black',
                outline: 'none',
                borderRadius: '30px',
                padding: '5px',
                height: '32px',

                margin: 0,
                width: '100%',
                color: '#000',
                ...theme.typography.font(14),

                [theme.mediaQuery.xsmall]: {
                    height: '40px',
                    padding: '5px 10px',

                    ...theme.typography.font(16),
                },
                "::placeholder": {
                    color: '#222',
                    // ...theme.typography.font(16)
                },

            }} type="text" name="username" onChange={null} placeholder="Friend's username" />

        </div>
    </div>
}