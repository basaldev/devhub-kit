export const gridSpacing = {
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

export const types = {
  families: {
    headings: `'Big John PRO', sans-serif`,
    body: `'Noto Sans JP', sans-serif`,
    mono: `'Roboto Mono', monospace`
  },
  sizes: {
    xsmall: 16,
    small: 20,
    medium: 36,
    large: 42,
    xlarge: 50,
    xxlarge: 58,
  },
}

export const formFields = {
  sizes: {
    "medium": "24px"
  }
}
export const colors = {
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
export const borderSize = {
    "xsmall": "1px",
    "small": "3px",
    "medium": "4px",
    "large": "10px",
    "xlarge": "20px"
}

export const breakpoints = {
  "small": {
    "value": 768,
  },
  "medium": {
    "value": 1536
  },
  "large": {}
};

export const componentOverides = {
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
    "size": formFields.sizes.medium,
    "toggle": {
      "color": {
        "dark": "light-1",
        "light": "dark-1"
      },
    }
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
  },
  "heading": {
    "font": {
      "family": types.families.headings,
    },
    "level": {
      "1": {
        "small": {
          "size": `${types.sizes.large/2}px`,
          "height": "normal",
        },
        "medium": {
          "size": `${types.sizes.large}px`,
          "height": "normal",
        },
        "large": {
          "size": `${types.sizes.large*2}px`,
          "height": "normal",
        },
        "xlarge": {
          "size": `${types.sizes.large*4}px`,
          "height": "normal",
        }
      },
      "2": {
        "small": {
          "size": `${types.sizes.medium/2}px`,
          "height": "normal",
        },
        "medium": {
          "size": `${types.sizes.medium}px`,
          "height": "normal",
        },
        "large": {
          "size": `${types.sizes.medium*1.5}px`,
          "height": "normal",
        },
        "xlarge": {
          "size": `${types.sizes.medium*2}px`,
          "height": "normal",
        }
      },
      "3": {
        "small": {
          "size": `${types.sizes.small/2}px`,
          "height": "normal",
        },
        "medium": {
          "size": `${types.sizes.small}px`,
          "height": "normal",
        },
        "large": {
          "size": `${types.sizes.small*1.5}px`,
          "height": "normal",
        },
        "xlarge": {
          "size": `${types.sizes.small*2}px`,
          "height": "normal",
        }
      },
      "4": {
        "small": {
          "size": `${types.sizes.xsmall/2}px`,
          "height": "normal",
        },
        "medium": {
          "size": `${types.sizes.xsmall}px`,
          "height": "normal",
        },
        "large": {
          "size": `${types.sizes.xsmall*1.5}px`,
          "height": "normal",
        },
        "xlarge": {
          "size": `${types.sizes.xsmall*2}px`,
          "height": "normal",
        }
      },
    },
    "responsiveBreakpoint": "small",
    "weight": 600
  },
  "paragraph": {
    "small": {
      "size": `${types.sizes.small}px`,
      "height": "normal",
    },
    "medium": {
      "size": `${types.sizes.medium}px`,
      "height": "normal",
    },
    "large": {
      "size": `${types.sizes.large}px`,
      "height": "normal",
    },
    "xlarge": {
      "size": `${types.sizes.xlarge}px`,
      "height": "normal",
    },
    "xxlarge": {
      "size": `${types.sizes.xxlarge}px`,
      "height": "normal",
    }
  },
  "radioButton": {
    "border": {
      "width": borderSize.medium
    },
    "check": {
      "thickness": borderSize.medium
    },
  },
  "checkbox": {
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
    "size": formFields.sizes.medium,
  },
}
export const globalOverides = {}