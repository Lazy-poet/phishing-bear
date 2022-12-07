import { StyledDarkParagraphText } from "@components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setLogOut } from "../../../redux/slices/auth.slice";
import { customStyled, useCustomStyletron } from "../../styles/custom-styles"

const links = [
    { label: 'Account', path: '/my-account' },
    { label: 'Password', path: '/my-account/change-password' },
    { label: 'Friends', path: '/my-account/friends' },

]

export const AccountWrapper = customStyled('div', ({ $theme }) => ({
    padding: '20px 20px 50px',
    gap: '20px',
    [$theme.mediaQuery.small]: {
        padding: '50px',
    },
    [$theme.mediaQuery.medium]: {
        padding: '50px 100px',
        gap: '30px',
    },
    [$theme.mediaQuery.large]: {
        padding: '100px',
        gap: '50px',

    },
    width: '100vw',
    height: '100%',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'start',
    justifyContent: 'start',
    scrollSnapAlign: "start",

}))
export const AccountLinks = () => {
    const [css, theme] = useCustomStyletron();
    const router = useRouter();
    const dispatch = useDispatch()
    const sm_bp = '@media screen and (min-width: 576px)'
    return <div className="col-12 col-sm-3 sidebar border-end border-dark pt-5 px-0">
        <h4 className="ps-3 text-center text-sm-start">My Account</h4>
        <div className={css({
            // display: 'flex',
            margin: '20px 0 0',
            display: 'flex',
            width: '100%',
            overflowX: 'scroll',
            [sm_bp]: {
                display: 'block',
                borderTop: '2px solid #eee',
                margin: '50px 0',

            }

        })}>
            {links.map(link => {
                const isActive = router.pathname === link.path
                return <Link href={link.path}><div
                    className={css({
                        borderBottom: '2px solid #eee',
                        padding: '10px',
                        ...(isActive ? { background: theme.colors.bg } : {
                            ':hover': {
                                background: '#f8f8f8'
                            }
                        }),
                        cursor: 'pointer',
                        ...theme.typography.font(12, 500),
                        flex: 1,
                        textAlign: 'center',
                        [sm_bp]: {
                            flex: 'revert',
                            textAlign: 'left',
                            ...theme.typography.font(14, 500),
                            padding: '20px',
                        }
                    })}
                >{link.label}
                </div>
                </Link>
            })}
            <div
                className={css({
                    borderBottom: '2px solid #eee',
                    padding: '10px',
                    ':hover': {
                        background: '#f8f8f8'
                    },
                    cursor: 'pointer',
                    flex: 1,
                    textAlign: 'center',
                    ...theme.typography.font(12, 500),


                    [sm_bp]: {
                        flex: 'revert',
                        textAlign: 'left',
                        ...theme.typography.font(14, 500),
                        padding: '20px',

                    }

                })}
                onClick={() => {
                    dispatch(setLogOut())
                    router.push('/login');
                }}
            >Logout</div>
        </div>
    </div>
}