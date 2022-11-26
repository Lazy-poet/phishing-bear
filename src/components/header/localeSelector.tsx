import { useState } from 'react'
import css from 'styled-jsx/css'
import { StyleObject } from 'styletron-react'
import { useCustomStyletron } from '../../styles/custom-styles';
import dropdown from '/assets/images/dropdown.svg'

type Props = {
  overrides?: StyleObject
}


const LocaleItem = ({ label, src, alt, onClick, style, isActive }: { isActive: boolean, label: string, src: string, alt: string, onClick: () => void, style?: StyleObject }) => {
  const [css, theme] = useCustomStyletron();
  return <div onClick={onClick} className={css({
    ...theme.typography.font(16),
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    gap: '5px',
    padding: '10px',
    cursor: 'pointer',
    transition: 'all .2s ease',
    ...theme.typography.font(14, 500),
    ':hover': {
      background: theme.colors.bgHover
    },
    ...style
  })}>
    <img src={src} alt={alt} className={css({ width: '25px', height: '25px', objectFit: 'cover', borderRadius: '50%', border: `1px solid ${theme.colors.dark}` })} />
    <span>{label}</span>
    {isActive && <img src='/assets/images/dropdown.svg' className={css({
    })} />}

  </div>
}
const LocaleSelector = ({ overrides }: Props) => {
  const [useDefault, setUseDefault] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [css, theme] = useCustomStyletron();

  const getLocaleProps = (isActive?: boolean) => {
    const label = isActive ? 'EN' : 'SWE';
    const alt = isActive ? 'English' : 'Swedish';
    const src = isActive ? '/assets/images/eng.svg' : '/assets/images/swe.svg'
    return { label, alt, src }
  }
  return (
    <div className={css({ position: 'relative' })}>
      <LocaleItem style={overrides} {...getLocaleProps(useDefault ? true : false)} isActive={true} onClick={() => setShowDropdown(!showDropdown)} />

      <LocaleItem style={{
        position: 'absolute',
        bottom: 0,
        transform: 'translateY(100%)',
        opacity: Number(showDropdown),
        width: '100%',
        background: '#fff',


      }} {...getLocaleProps(!useDefault ? true : false)} isActive={false} onClick={() => {
        setShowDropdown(!showDropdown)
        setUseDefault(!useDefault)
      }} />
      {/* <button className="btn dropdown-toggle border-0 p-0 fs-5 fw-normal" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="/assets/images/eng.svg" alt="England" className="" />&nbsp; EN
      </button>
      <button className="btn dropdown-toggle border-0 p-0 fs-5 fw-normal" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="/assets/images/swe.svg" alt="Sweden" className="img-fluid" /> &nbsp; SWE

      </button> */}

    </div>
  )
}

export default LocaleSelector