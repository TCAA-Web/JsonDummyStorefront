import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string
      secondary: string
      gray: string
      black: string
      pureBlack: string
      pureWhite: string
      outlineColor: string
    }
    spacing: {
      sm: string
      md: string
      lg: string
    }
    font: {
      primary: string
      secondary: string
    }
    radius: {
      primary: string
      secondary: string
    }
    fontWeight: {
      light: number
      regular: number
      medium: number
      semibold: number
      bold: number
    }
    fontSize: {
      sm: string
      md: string
      lg: string
      xl: string
    }
    fontSizeNum: {
      sm: number
      md: number
      lg: number
      xl: number
    }
    shadow: {
      darker: string
      regular: string
      lighter: string
    }
    screenSizeMobile: {
      default: number
    }
    screenSizeTablet: {
      default: number
    }
    screenSizeDesktop: {
      default: number
    }
  }
}
