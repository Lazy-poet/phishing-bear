import Portal from './portal';
import { PropagateLoader } from 'react-spinners'
import { addSpace } from '.'
export default function ({ loadingText }: { loadingText?: string }) {
    return <Portal>
        <div style={{ position: 'fixed', left: 0, top: 0, zIndex: 999, width: "100vw", height: '100vh', backgroundColor: 'rgba(0, 0, 0, .2)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexFlow: 'column' }}>
            <PropagateLoader color='#35ba6e' />
            {addSpace("vert", "30px")}
            {loadingText || 'Please wait...'}
        </div>
    </Portal>
}