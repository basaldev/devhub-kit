// https://github.com/grommet/grommet/wiki/Grommet-v2-theming-documentation
import { colors, types, overides, gridSpacing, borderSize, breakpoints } from './overides'
import { elevations } from './mixin';
import { defaultsDeep } from "lodash";

const global = {
  "colors": {
    "icon": {
      "dark": "light-1",
      "light": "dark-1"
    },
    "active": "accent-1",
    "focus": "#0228A7",
    "placeholder": "#E7E7E7",
    "black": "#000000",
    "brand": "#000000",
    "border": {
      "dark": "light-1",
      "light": "dark-1",
    },
    "control": {
      "dark": "light-1",
      "light": "dark-1"
    },
    "selected": "brand",
    "text": {
      "dark": "light-1",
      "light": "dark-1",
    },
    ...colors
  },
  "animation": {
    "duration": "1s",
    "jiggle": {
      "duration": "0.1s"
    }
  },
  borderSize,
  breakpoints,
  "deviceBreakpoints": {
    "phone": "small",
    "tablet": "medium",
    "computer": "large"
  },
  "control": {
    "border": {
      "width": "1px",
      "radius": "0px",
      "color": "border"
    }
  },
  "debounceDelay": 300,
  "drop": {
    "background": "#ffffff",
    "border": {
      "width": "0px",
      "radius": "0px"
    },
    "shadowSize": "small",
    "zIndex": "20"
  },
  "edgeSize": {
    "none": "0px",
    "hair": "1px",
    "xxsmall": "3px",
    "xsmall": "6px",
    "small": "12px",
    "medium": "24px",
    "large": "48px",
    "xlarge": "96px",
    "responsiveBreakpoint": "small"
  },
  "elevation": elevations("rgba(0, 0, 0, 0.40)", "rgba(255, 255, 255, 0.40)"),
  "focus": {
    "border": {
      "color": "focus"
    }
  },
  "font": {
    "size": types.sizes.medium,
    "height": "normal",
  },
  "hover": {
    "background": {
      "dark": {
        "color": "active",
        "opacity": "normal"
      },
      "light": {
        "color": "active",
        "opacity": "normal"
      }
    },
    "color": {
      "dark": "white",
      "light": "black"
    }
  },
  "opacity": {
    "strong": 0.8,
    "medium": 0.4,
    "weak": 0.1
  },
  "selected": {
    "background": "selected",
    "color": "white"
  },
  "spacing": gridSpacing.spacing,
  "size": gridSpacing.size,
};

export default defaultsDeep(global, overides);
