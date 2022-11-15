import { CustomTheme } from '../theme'

import {
    createThemedStyled,
    createThemedWithStyle,
    createThemedUseStyletron
} from 'baseui';

export const customStyled = createThemedStyled<CustomTheme>();
export const themedWithStyle = createThemedWithStyle<CustomTheme>();
export const useCustomStyletron = createThemedUseStyletron<CustomTheme>();