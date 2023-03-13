import AvenirRegular from './assets/fonts/AvenirNextLTPro-Regular.otf'
import AvenirBold from './assets/fonts/AvenirNextLTPro-Bold.otf'

export const CustomDesignSystem = {
    color: {
        appBackgroundColor: '#0C0C0C',
        buttonTitleWhite: '#FFF',
    },
    gradient: {
        actionButtonBackground: 'linear-gradient(90deg, #4A80A9, #F0626C)',
    },
    theme: {},
    typography: {},
    space: {},
    media: {},
    icons:{},
    font: {
        Avenir: [
            {
                url: AvenirRegular,
                fontWeight: 300,
            },
            {
                url: AvenirBold,
                fontWeight: 700,
            }
        ],
    },
    font_family: {},
    timing: {},
    reset: {}
};
