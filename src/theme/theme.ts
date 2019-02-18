// https://github.com/grommet/grommet/wiki/Grommet-v2-theming-documentation
import {
  colors,
  types,
  gridSpacing,
  borderSize,
  breakpoints,
  formFields,
  overrides,
} from './overrides'
import { elevations } from './mixin'
import { defaultsDeep } from 'lodash'

const defaultGlobal = {
  colors: {
    icon: {
      dark: 'light-1',
      light: 'dark-1',
    },
    active: 'accent-1',
    focus: '#0228A7',
    placeholder: '#E7E7E7',
    black: '#000000',
    brand: '#000000',
    border: {
      dark: 'light-1',
      light: 'dark-1',
    },
    control: {
      dark: 'light-1',
      light: 'dark-1',
    },
    selected: 'brand',
    text: {
      dark: 'light-1',
      light: 'dark-1',
    },
    ...colors,
  },
  animation: {
    duration: '1s',
    jiggle: {
      duration: '0.1s',
    },
  },
  borderSize,
  breakpoints,
  deviceBreakpoints: {
    phone: 'small',
    tablet: 'medium',
    computer: 'large',
  },
  control: {
    border: {
      width: '1px',
      radius: '0px',
      color: 'border',
    },
  },
  debounceDelay: 300,
  drop: {
    background: '#ffffff',
    border: {
      width: '0px',
      radius: '0px',
    },
    shadowSize: 'small',
    zIndex: '20',
  },
  edgeSize: {
    none: '0px',
    hair: '1px',
    xxsmall: '3px',
    xsmall: '6px',
    small: '12px',
    medium: '24px',
    large: '48px',
    xlarge: '96px',
    responsiveBreakpoint: 'small',
  },
  elevation: elevations('rgba(0, 0, 0, 0.40)', 'rgba(255, 255, 255, 0.40)'),
  focus: {
    border: {
      color: 'focus',
    },
  },
  font: {
    size: types.sizes.medium,
    family: types.families.body,
    height: 'normal',
  },
  hover: {
    background: {
      dark: {
        color: 'active',
        opacity: 'normal',
      },
      light: {
        color: 'active',
        opacity: 'normal',
      },
    },
    color: {
      dark: 'white',
      light: 'black',
    },
  },
  opacity: {
    strong: 0.8,
    medium: 0.4,
    weak: 0.1,
  },
  selected: {
    background: 'selected',
    color: 'white',
  },
  spacing: gridSpacing.spacing,
  size: gridSpacing.size,
}
const components = {
  anchor: {
    textDecoration: 'none',
    color: {
      dark: 'accent-1',
      light: 'brand',
    },
    hover: {
      textDecoration: 'underline',
    },
  },
  button: {
    border: {
      width: borderSize.medium,
      radius: '0',
    },
    primary: {},
    disabled: {
      opacity: 0.3,
    },
    padding: {
      vertical: '8px',
      horizontal: '16px',
    },
  },
  checkBox: {
    border: {
      color: {
        dark: 'light-1',
        light: 'dark-1',
      },
      width: borderSize.medium,
    },
    check: {
      radius: '0px',
      thickness: borderSize.medium,
    },
    hover: {
      border: {
        color: {
          dark: 'white',
          light: 'black',
        },
      },
    },
    size: formFields.sizes.medium,
    toggle: {
      color: {
        dark: 'light-1',
        light: 'dark-1',
      },
    },
  },
  formField: {
    border: {
      color: 'border',
      width: borderSize.medium,
      position: 'inner',
      side: 'bottom',
      error: {
        color: {
          dark: 'white',
          light: 'status-critical',
        },
      },
    },
    error: {
      color: {
        dark: 'status-critical',
        light: 'status-critical',
      },
    },
    help: {
      color: {
        dark: 'dark-3',
        light: 'dark-3',
      },
    },
  },
  heading: {
    font: {
      family: types.families.headings,
    },
    level: {
      '1': {
        small: {
          size: `${types.sizes.large / 2}px`,
          height: 'normal',
        },
        medium: {
          size: `${types.sizes.large}px`,
          height: 'normal',
        },
        large: {
          size: `${types.sizes.large * 2}px`,
          height: 'normal',
        },
        xlarge: {
          size: `${types.sizes.large * 4}px`,
          height: 'normal',
        },
      },
      '2': {
        small: {
          size: `${types.sizes.medium / 2}px`,
          height: 'normal',
        },
        medium: {
          size: `${types.sizes.medium}px`,
          height: 'normal',
        },
        large: {
          size: `${types.sizes.medium * 1.5}px`,
          height: 'normal',
        },
        xlarge: {
          size: `${types.sizes.medium * 2}px`,
          height: 'normal',
        },
      },
      '3': {
        small: {
          size: `${types.sizes.small / 2}px`,
          height: 'normal',
        },
        medium: {
          size: `${types.sizes.small}px`,
          height: 'normal',
        },
        large: {
          size: `${types.sizes.small * 1.5}px`,
          height: 'normal',
        },
        xlarge: {
          size: `${types.sizes.small * 2}px`,
          height: 'normal',
        },
      },
      '4': {
        small: {
          size: `${types.sizes.xsmall / 2}px`,
          height: 'normal',
        },
        medium: {
          size: `${types.sizes.xsmall}px`,
          height: 'normal',
        },
        large: {
          size: `${types.sizes.xsmall * 1.5}px`,
          height: 'normal',
        },
        xlarge: {
          size: `${types.sizes.xsmall * 2}px`,
          height: 'normal',
        },
      },
    },
    responsiveBreakpoint: 'small',
    weight: 600,
  },
  paragraph: {
    small: {
      size: `${types.sizes.small}px`,
      height: 'normal',
    },
    medium: {
      size: `${types.sizes.medium}px`,
      height: 'normal',
    },
    large: {
      size: `${types.sizes.large}px`,
      height: 'normal',
    },
    xlarge: {
      size: `${types.sizes.xlarge}px`,
      height: 'normal',
    },
    xxlarge: {
      size: `${types.sizes.xxlarge}px`,
      height: 'normal',
    },
  },
  radioButton: {
    border: {
      width: borderSize.medium,
    },
    check: {
      thickness: borderSize.medium,
    },
  },
  checkbox: {
    check: {
      radius: '0px',
      thickness: borderSize.medium,
    },
    hover: {
      border: {
        color: {
          dark: 'light-2',
          light: 'dark-2',
        },
      },
    },
    size: formFields.sizes.medium,
  },
}
const defaultTheme = {
  global: defaultGlobal,
  ...components,
}
const theme = defaultsDeep({}, overrides, defaultTheme)
export default theme
