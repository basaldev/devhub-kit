// https://github.com/grommet/grommet/wiki/Grommet-v2-theming-documentation
const colors = {
  "white": "#FFFFFF",
  "accent-1": "#FDD758",
  "accent-2": "#FF5630",
  "accent-3": "#3B4DEE",
  "accent-4": "#1CD1A6",
  "dark-1": "#333333",
  "dark-2": "#555555",
  "dark-3": "#777777",
  "dark-4": "#999999",
  "dark-5": "#999999",
  "dark-6": "#999999",
  "light-1": "#F0F0F0",
  "light-2": "#F2F2F2",
  "light-3": "#EDEDED",
  "light-4": "#DADADA",
  "light-5": "#DADADA",
  "light-6": "#DADADA",
  "neutral-1": "#029C67",
  "neutral-2": "#0228A7",
  "neutral-3": "#FEBA9C",
  "neutral-4": "#2C326D",
  "status-critical": "#EE3B50",
  "status-error": "#EE3B50",
  "status-warning": "#FEC400",
  "status-ok": "#1CD1A6",
  "status-unknown": "#F0F0F0",
  "status-disabled": "#F0F0F0"
}
const borderSize = {
    "xsmall": "1px",
    "small": "3px",
    "medium": "4px",
    "large": "10px",
    "xlarge": "20px"
}

const breakpoints = {
  "small": {
    "value": 768,
  },
  "medium": {
    "value": 1536
  },
  "large": {}
};

const fonts = {
  families: {
    headings: `'Big John PRO', sans-serif`,
    body: `'Noto Sans JP', sans-serif`,
    mono: `'Roboto Mono', monospace`
  },
  lineHeight: 1.1,
  sizes: {
    xsmall: 16,
    small: 20,
    medium: 36,
    large: 42,
    xlarge: 50,
    xxlarge: 58,
  },
}
const inputSizing = "24px";
const forms = {
  inputSizing: "24px",
  checkboxSizing: "24px"
}
const elevations = {
  "xsmall": "0px 2px 2px rgba(255, 255, 255, 0.40)",
  "small": "0px 4px 4px rgba(255, 255, 255, 0.40)",
  "medium": "0px 6px 8px rgba(255, 255, 255, 0.40)",
  "large": "0px 8px 16px rgba(255, 255, 255, 0.40)",
  "xlarge": "0px 12px 24px rgba(255, 255, 255, 0.40)"
}
const gridSpacing = {
  "spacing": "24px",
      "size": {
        "xxsmall": "48px",
        "xsmall": "96px",
        "small": "192px",
        "medium": "384px",
        "large": "768px",
        "xlarge": "1152px",
        "xxlarge": "1536px",
        "full": "100%"
      }
}
function convertFs(sizes){
  const withPx = {};
  Object.keys(sizes).map(k => {
    withPx[k] = `${sizes[k]}px`;
  })
  return withPx;
}

export default {
    "global": {
      "colors": {
        "icon": {
          "dark": "#f8f8f8",
          "light": "#666666"
        },
        "active": "#0228A7",
        "black": "#000000",
        "border": {
          "dark": "rgba(255,255,255,0.33)",
          "light": "rgba(0,0,0,0.33)"
        },
        "brand": "#000000",
        "control": {
          "dark": "accent-1",
          "light": "brand"
        },
        "focus": "#0228A7",
        "placeholder": "#E7E7E7",
        "selected": "brand",
        "text": {
          "dark": "#f8f8f8",
          "light": "#444444"
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
      "elevation": {
        "light": {
          "none": "none",
          "xsmall": "0px 1px 2px rgba(0, 0, 0, 0.20)",
          "small": "0px 2px 4px rgba(0, 0, 0, 0.20)",
          "medium": "0px 4px 8px rgba(0, 0, 0, 0.20)",
          "large": "0px 8px 16px rgba(0, 0, 0, 0.20)",
          "xlarge": "0px 12px 24px rgba(0, 0, 0, 0.20)"
        },
        "dark": elevations
      },

      "focus": {
        "border": {
          "color": "focus"
        }
      },
      "font": {
        "size": fonts.sizes.medium,
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
    },
    "icon": {
      "size":convertFs(fonts.sizes)
    },
    "anchor": {
      "textDecoration": "none",
      "color": {
        "dark": "accent-1",
        "light": "brand"
      },
      "hover": {
        "textDecoration": "underline"
      }
    },
    "box": {
      "responsiveBreakpoint": "small"
    },
    "button": {
      "border": {
        "width": borderSize.medium,
        "radius": "0"
      },
      "primary": {},
      "disabled": {
        "opacity": 0.3
      },
      "padding": {
        "vertical": "8px",
        "horizontal": "16px"
      }
    },
    "checkBox": {
      "border": {
        "color": {
          "dark": "light-1",
          "light": "dark-1"
        },
        "width": borderSize.medium,
      },
      "check": {
        "radius": "0px",
        "thickness": borderSize.medium
      },
      "hover": {
        "border": {
          "color": {
            "dark": "white",
            "light": "black"
          }
        }
      },
      "size": forms.inputSizing,
      "toggle": {
        "color": {
          "dark": "light-1",
          "light": "dark-1"
        },
      }
    },
    "collapsible": {
      "minSpeed": 200,
      "baseline": 500
    },
    "formField": {
      "border": {
        "color": "border",
        "width": borderSize.medium,
        "position": "inner",
        "side": "bottom",
        "error": {
          "color": {
            "dark": "white",
            "light": "status-critical"
          }
        }
      },
      "error": {
        "color": {
          "dark": "status-critical",
          "light": "status-critical"
        }
      },
      "help": {
        "color": {
          "dark": "dark-3",
          "light": "dark-3"
        }
      },
      "label": {}
    },
    "grommet": {},
    "heading": {
      "font": {
        "family": fonts.families.headings,
      },
      "level": {
        "1": {
          "small": {
            "size": `${fonts.sizes.large/2}px`,
            "height": "normal",
          },
          "medium": {
            "size": `${fonts.sizes.large}px`,
            "height": "normal",
          },
          "large": {
            "size": `${fonts.sizes.large*2}px`,
            "height": "normal",
          },
          "xlarge": {
            "size": `${fonts.sizes.large*4}px`,
            "height": "normal",
          }
        },
        "2": {
          "small": {
            "size": `${fonts.sizes.medium/2}px`,
            "height": "normal",
          },
          "medium": {
            "size": `${fonts.sizes.medium}px`,
            "height": "normal",
          },
          "large": {
            "size": `${fonts.sizes.medium*1.5}px`,
            "height": "normal",
          },
          "xlarge": {
            "size": `${fonts.sizes.medium*2}px`,
            "height": "normal",
          }
        },
        "3": {
          "small": {
            "size": `${fonts.sizes.small/2}px`,
            "height": "normal",
          },
          "medium": {
            "size": `${fonts.sizes.small}px`,
            "height": "normal",
          },
          "large": {
            "size": `${fonts.sizes.small*1.5}px`,
            "height": "normal",
          },
          "xlarge": {
            "size": `${fonts.sizes.small*2}px`,
            "height": "normal",
          }
        },
        "4": {
          "small": {
            "size": `${fonts.sizes.xsmall/2}px`,
            "height": "normal",
          },
          "medium": {
            "size": `${fonts.sizes.xsmall}px`,
            "height": "normal",
          },
          "large": {
            "size": `${fonts.sizes.xsmall*1.5}px`,
            "height": "normal",
          },
          "xlarge": {
            "size": `${fonts.sizes.xsmall*2}px`,
            "height": "normal",
          }
        },
      },
      "responsiveBreakpoint": "small",
      "weight": 600
    },
    "paragraph": {
      "small": {
        "size": `${fonts.sizes.small}px`,
        "height": "normal",
      },
      "medium": {
        "size": `${fonts.sizes.medium}px`,
        "height": "normal",
      },
      "large": {
        "size": `${fonts.sizes.large}px`,
        "height": "normal",
      },
      "xlarge": {
        "size": `${fonts.sizes.xlarge}px`,
        "height": "normal",
      },
      "xxlarge": {
        "size": `${fonts.sizes.xxlarge}px`,
        "height": "normal",
      }
    },
    "radioButton": {
      "border": {
        "color": {
          "dark": "light-1",
          "light": "dark-1"
        },
        "width": borderSize.medium
      },
      "check": {
        "color": {
          "dark": "accent-1",
          "light": "accent-1"
        },
        "thickness": borderSize.medium
      },
    },
    "checkbox": {
      "border": {
        "color": {
          "dark": "light-1",
          "light": "dark-1"
        },
        "width": borderSize.medium
      },
      "check": {
        "radius": "0px",
        "thickness": borderSize.medium
      },
      "hover": {
        "border": {
          "color": {
            "dark": "light-2",
            "light": "dark-2"
          }
        }
      },
      "size": inputSizing,
      "toggle": {
        "color": {
          "dark": "light-2",
          "light": "dark-2"
        },
        "radius": "24px",
        "size": "48px",
        "knob": {}
      }
    }
};
