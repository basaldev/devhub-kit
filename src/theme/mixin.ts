export const elevations = (lightColor: string, darkColor: string) => {
  let color = darkColor
  const dark = {
    xsmall: `0px 2px 2px ${color}`,
    small: `0px 4px 4px ${color}`,
    medium: `0px 6px 8px ${color}`,
    large: `0px 8px 16px ${color}`,
    xlarge: `0px 12px 24px ${color}`,
  }
  color = lightColor
  const light = {
    xsmall: `0px 2px 2px ${color}`,
    small: `0px 4px 4px ${color}`,
    medium: `0px 6px 8px ${color}`,
    large: `0px 8px 16px ${color}`,
    xlarge: `0px 12px 24px ${color}`,
  }
  return {
    dark,
    light,
  }
}
