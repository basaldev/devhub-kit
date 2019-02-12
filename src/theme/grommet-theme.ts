declare const dark: object;

export {  Colors, dark };

declare const colors: {
  active: string;
  black: string;
  border: {
      dark: string;
      light: string;
  };
  brand: string;
  control: {
      dark: string;
      light: string;
  };
  focus: string;
  placeholder: string;
  selected: string;
  text: {
      dark: string;
      light: string;
  };
  icon: {
      dark: string;
      light: string;
  };
  white: string;
};

type Colors = typeof colors & {
  'accent-1': string;
  'accent-2': string;
  'accent-3': string;
  'accent-4': string;
  'neutral-1': string;
  'neutral-2': string;
  'neutral-3': string;
  'neutral-4': string;
  'dark-1': string;
  'dark-2': string;
  'dark-3': string;
  'dark-4': string;
  'dark-5': string;
  'dark-6': string;
  'light-1': string;
  'light-2': string;
  'light-3': string;
  'light-4': string;
  'light-5': string;
  'light-6': string;
  'status-critical': string;
  'status-error': string;
  'status-warning': string;
  'status-ok': string;
  'status-unknown': string;
  'status-disabled': string;
};

export declare const base: {
  global: {
      colors: {
          icon: string;
      };
  };
  icon: {
      size: {
          small: string;
          medium: string;
          large: string;
          xlarge: string;
      };
  };
} & {
  global: {
      animation: {
          duration: string;
          jiggle: {
              duration: string;
          };
      };
      borderSize: {
          xsmall: string;
          small: string;
          medium: string;
          large: string;
          xlarge: string;
      };
      breakpoints: {
          small: {
              value: number;
              borderSize: {
                  xsmall: string;
                  small: string;
                  medium: string;
                  large: string;
                  xlarge: string;
              };
              edgeSize: {
                  none: string;
                  hair: string;
                  xxsmall: string;
                  xsmall: string;
                  small: string;
                  medium: string;
                  large: string;
                  xlarge: string;
              };
              size: {
                  xxsmall: string;
                  xsmall: string;
                  small: string;
                  medium: string;
                  large: string;
                  xlarge: string;
                  full: string;
              };
          };
          medium: {
              value: number;
          };
          large: {};
      };
      deviceBreakpoints: {
          phone: string;
          tablet: string;
          computer: string;
      };
      colors: Colors;
      control: {
          border: {
              width: string;
              radius: string;
              color: string;
          };
      };
      debounceDelay: number;
      drop: {
          background: string;
          border: {
              width: string;
              radius: string;
          };
          shadowSize: string;
          zIndex: string;
      };
      edgeSize: {
          none: string;
          hair: string;
          xxsmall: string;
          xsmall: string;
          small: string;
          medium: string;
          large: string;
          xlarge: string;
          responsiveBreakpoint: string;
      };
      elevation: {
          light: {
              none: string;
              xsmall: string;
              small: string;
              medium: string;
              large: string;
              xlarge: string;
          };
          dark: {
              none: string;
              xsmall: string;
              small: string;
              medium: string;
              large: string;
              xlarge: string;
          };
      };
      focus: {
          border: {
              color: string;
          };
      };
      font: {
          size: string;
          height: string;
          maxWidth: string;
      };
      hover: {
          background: {
              dark: {
                  color: string;
                  opacity: string;
              };
              light: {
                  color: string;
                  opacity: string;
              };
          };
          color: {
              dark: string;
              light: string;
          };
      };
      input: {
          padding: string;
          weight: number;
      };
      opacity: {
          strong: number;
          medium: number;
          weak: number;
      };
      selected: {
          background: string;
          color: string;
      };
      spacing: string;
      size: {
          xxsmall: string;
          xsmall: string;
          small: string;
          medium: string;
          large: string;
          xlarge: string;
          xxlarge: string;
          full: string;
      };
  };
  accordion: {
      icons: {
          collapse: any;
          expand: any;
      };
  };
  anchor: {
      textDecoration: string;
      fontWeight: number;
      color: {
          dark: string;
          light: string;
      };
      hover: {
          textDecoration: string;
      };
  };
  box: {
      responsiveBreakpoint: string;
  };
  button: {
      border: {
          width: string;
          radius: string;
      };
      primary: {};
      disabled: {
          opacity: number;
      };
      minWidth: string;
      maxWidth: string;
      padding: {
          vertical: string;
          horizontal: string;
      };
  };
  calendar: {
      small: {
          fontSize: string;
          lineHeight: number;
          daySize: string;
          slideDuration: string;
      };
      medium: {
          fontSize: string;
          lineHeight: number;
          daySize: string;
          slideDuration: string;
      };
      large: {
          fontSize: string;
          lineHeight: number;
          daySize: string;
          slideDuration: string;
      };
      icons: {
          previous: any;
          next: any;
          small: {
              previous: any;
              next: any;
          };
      };
  };
  carousel: {
      icons: {
          current: any;
          next: any;
          previous: any;
      };
  };
  checkBox: {
      border: {
          color: {
              dark: string;
              light: string;
          };
          width: string;
      };
      check: {
          radius: string;
          thickness: string;
      };
      icon: {};
      icons: {};
      hover: {
          border: {
              color: {
                  dark: string;
                  light: string;
              };
          };
      };
      size: string;
      toggle: {
          color: {
              dark: string;
              light: string;
          };
          radius: string;
          size: string;
          knob: {};
      };
  };
  clock: {
      analog: {
          hour: {
              color: {
                  dark: string;
                  light: string;
              };
              width: string;
              size: string;
              shape: string;
          };
          minute: {
              color: {
                  dark: string;
                  light: string;
              };
              width: string;
              size: string;
              shape: string;
          };
          second: {
              color: {
                  dark: string;
                  light: string;
              };
              width: string;
              size: string;
              shape: string;
          };
          size: {
              small: string;
              medium: string;
              large: string;
              xlarge: string;
              huge: string;
          };
      };
      digital: {
          text: {
              xsmall: {
                  size: string;
                  height: number;
              };
              small: {
                  size: string;
                  height: number;
              };
              medium: {
                  size: string;
                  height: number;
              };
              large: {
                  size: string;
                  height: number;
              };
              xlarge: {
                  size: string;
                  height: number;
              };
              xxlarge: {
                  size: string;
                  height: number;
              };
          };
      };
  };
  collapsible: {
      minSpeed: number;
      baseline: number;
  };
  dataTable: {
      header: {};
      groupHeader: {
          border: {
              side: string;
              size: string;
          };
          fill: string;
          pad: {
              horizontal: string;
              vertical: string;
          };
          background: {
              dark: string;
              light: string;
          };
      };
      icons: {
          ascending: any;
          contract: any;
          descending: any;
          expand: any;
      };
      resize: {
          border: {
              side: string;
              color: string;
          };
      };
      primary: {
          weight: string;
      };
  };
  formField: {
      border: {
          color: string;
          position: string;
          side: string;
          error: {
              color: {
                  dark: string;
                  light: string;
              };
          };
      };
      error: {
          color: {
              dark: string;
              light: string;
          };
      };
      help: {
          color: {
              dark: string;
              light: string;
          };
      };
      label: {};
  };
  grommet: {};
  heading: {
      font: {};
      level: {
          1: {
              font: {};
              small: {
                  size: string;
                  height: string;
                  maxWidth: string;
              };
              medium: {
                  size: string;
                  height: string;
                  maxWidth: string;
              };
              large: {
                  size: string;
                  height: string;
                  maxWidth: string;
              };
              xlarge: {
                  size: string;
                  height: string;
                  maxWidth: string;
              };
          };
          2: {
              font: {};
              small: {
                  size: string;
                  height: string;
                  maxWidth: string;
              };
              medium: {
                  size: string;
                  height: string;
                  maxWidth: string;
              };
              large: {
                  size: string;
                  height: string;
                  maxWidth: string;
              };
              xlarge: {
                  size: string;
                  height: string;
                  maxWidth: string;
              };
          };
          3: {
              font: {};
              small: {
                  size: string;
                  height: string;
                  maxWidth: string;
              };
              medium: {
                  size: string;
                  height: string;
                  maxWidth: string;
              };
              large: {
                  size: string;
                  height: string;
                  maxWidth: string;
              };
              xlarge: {
                  size: string;
                  height: string;
                  maxWidth: string;
              };
          };
          4: {
              font: {};
              small: {
                  size: string;
                  height: string;
                  maxWidth: string;
              };
              medium: {
                  size: string;
                  height: string;
                  maxWidth: string;
              };
              large: {
                  size: string;
                  height: string;
                  maxWidth: string;
              };
              xlarge: {
                  size: string;
                  height: string;
                  maxWidth: string;
              };
          };
          5: {
              font: {};
              small: {
                  size: string;
                  height: string;
                  maxWidth: string;
              };
              medium: {
                  size: string;
                  height: string;
                  maxWidth: string;
              };
              large: {
                  size: string;
                  height: string;
                  maxWidth: string;
              };
              xlarge: {
                  size: string;
                  height: string;
                  maxWidth: string;
              };
          };
          6: {
              font: {};
              small: {
                  size: string;
                  height: string;
                  maxWidth: string;
              };
              medium: {
                  size: string;
                  height: string;
                  maxWidth: string;
              };
              large: {
                  size: string;
                  height: string;
                  maxWidth: string;
              };
              xlarge: {
                  size: string;
                  height: string;
                  maxWidth: string;
              };
          };
      };
      responsiveBreakpoint: string;
      weight: number;
  };
  layer: {
      background: string;
      border: {
          radius: string;
      };
      container: {
          zIndex: string;
      };
      overlay: {
          background: string;
      };
      responsiveBreakpoint: string;
      zIndex: string;
  };
  menu: {
      icons: {
          down: any;
      };
  };
  paragraph: {
      small: {
          size: string;
          height: string;
          maxWidth: string;
      };
      medium: {
          size: string;
          height: string;
          maxWidth: string;
      };
      large: {
          size: string;
          height: string;
          maxWidth: string;
      };
      xlarge: {
          size: string;
          height: string;
          maxWidth: string;
      };
      xxlarge: {
          size: string;
          height: string;
          maxWidth: string;
      };
  };
  radioButton: {
      border: {
          color: {
              dark: string;
              light: string;
          };
          width: string;
      };
      check: {
          radius: string;
      };
      hover: {
          border: {
              color: {
                  dark: string;
                  light: string;
              };
          };
      };
      icon: {};
      icons: {};
      gap: string;
      size: string;
  };
  rangeInput: {
      track: {
          height: string;
          color: any;
      };
      thumb: {};
  };
  select: {
      container: {};
      control: {};
      icons: {
          down: any;
      };
      step: number;
  };
  tab: {
      active: {
          color: string;
      };
      border: {
          side: string;
          size: string;
          color: {
              dark: string;
              light: string;
          };
          active: {
              color: {
                  dark: string;
                  light: string;
              };
          };
          hover: {
              color: {
                  dark: string;
                  light: string;
              };
          };
      };
      color: string;
      hover: {
          color: {
              dark: string;
              light: string;
          };
      };
      margin: {
          vertical: string;
          horizontal: string;
      };
      pad: {
          bottom: string;
      };
  };
  tabs: {
      header: {};
      panel: {};
  };
  table: {
      header: {
          align: string;
          pad: {
              horizontal: string;
              vertical: string;
          };
          border: string;
          verticalAlign: string;
          fill: string;
      };
      body: {
          align: string;
          pad: {
              horizontal: string;
              vertical: string;
          };
      };
      footer: {
          align: string;
          pad: {
              horizontal: string;
              vertical: string;
          };
          border: string;
          verticalAlign: string;
          fill: string;
      };
  };
  text: {
      xsmall: {
          size: string;
          height: string;
          maxWidth: string;
      };
      small: {
          size: string;
          height: string;
          maxWidth: string;
      };
      medium: {
          size: string;
          height: string;
          maxWidth: string;
      };
      large: {
          size: string;
          height: string;
          maxWidth: string;
      };
      xlarge: {
          size: string;
          height: string;
          maxWidth: string;
      };
      xxlarge: {
          size: string;
          height: string;
          maxWidth: string;
      };
  };
  video: {
      captions: {
          background: string;
      };
      icons: {
          closedCaption: any;
          configure: any;
          fullScreen: any;
          pause: any;
          play: any;
          reduceVolume: any;
          volume: any;
      };
  };
  worldMap: {
      color: string;
      continent: {
          active: string;
          base: string;
      };
      hover: {
          color: string;
      };
      place: {
          active: string;
          base: string;
      };
  };
};