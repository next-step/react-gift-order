// import '@emotion/react';

// declare module '@emotion/react' {
//   export interface Theme {
//     colors: {
//       gray: Record<number, string>;
//       yellow: Record<number, string>;
//       brown: Record<number, string>;
//       blue: Record<number, string>;
//       red: Record<number, string>;
//       semantic: {
//         kakaoYellow: string;
//         kakaoYellowHover: string;
//         kakaoYellowActive: string;
//         kakaoYellowPressed: string;
//         kakaoBrown: string;
//         kakaoBrownPressed: string;
//       };
//       background: {
//         default: string;
//         disabled: string;
//         fill: string;
//       };
//       text: {
//         default: string;
//         sub: string;
//         disabled: string;
//         placeholder: string;
//       };
//       border: {
//         default: string;
//         disabled: string;
//       };
//       state: {
//         critical: string;
//         criticalBackground: string;
//         info: string;
//         infoBackground: string;
//       };
//     };
//     spacing: Record<number, string>;
//     typography: {
//       [key: string]: {
//         fontSize: string;
//         fontWeight: number;
//         lineHeight: string;
//       };
//     };
//   }
// }

// import '@emotion/react';

// /**
//  * Kakao Design Token Theme – Type Declarations
//  *
//  * This file augments Emotion's `Theme` interface so that
//  * the values provided to `ThemeProvider` are fully typed.
//  */

// declare module '@emotion/react' {
//   export interface Theme {
//     /** --------------------------------------------------
//      * Palette
//      * -------------------------------------------------- */
//     colors: {
//       gray: {
//         gray00: string;
//         gray100: string;
//         gray200: string;
//         gray300: string;
//         gray400: string;
//         gray500: string;
//         gray600: string;
//         gray700: string;
//         gray800: string;
//         gray900: string;
//         gray1000: string;
//       };
//       yellow: {
//         yellow00: string;
//         yellow100: string;
//         yellow200: string;
//         yellow300: string;
//         yellow400: string;
//         yellow500: string;
//         yellow600: string;
//         yellow700: string;
//         yellow800: string;
//         yellow900: string;
//         yellow1000: string;
//       };
//       brown: {
//         brown00: string;
//         brown100: string;
//         brown200: string;
//         brown300: string;
//         brown400: string;
//         brown500: string;
//         brown600: string;
//         brown700: string;
//         brown800: string;
//         brown900: string;
//         brown1000: string;
//       };
//       blue: {
//         blue00: string;
//         blue100: string;
//         blue200: string;
//         blue300: string;
//         blue400: string;
//         blue500: string;
//         blue600: string;
//         blue700: string;
//         blue800: string;
//         blue900: string;
//         blue1000: string;
//       };
//       red: {
//         red00: string;
//         red100: string;
//         red200: string;
//         red300: string;
//         red400: string;
//         red500: string;
//         red600: string;
//         red700: string;
//         red800: string;
//         red900: string;
//         red1000: string;
//       };
//       /** Brand‑specific swatches */
//       brand: {
//         kakaoYellow: string;
//         kakaoYellowHover: string;
//         kakaoYellowActive: string;
//         kakaoYellowPressed: string;
//         kakaoBrown: string;
//         kakaoBrownPressed: string;
//       };
//       /** Utility colours */
//       background: {
//         default: string;
//         disabled: string;
//         fill: string;
//       };
//       text: {
//         default: string;
//         sub: string;
//         disabled: string;
//         placeholder: string;
//       };
//       border: {
//         default: string;
//         disabled: string;
//       };
//       state: {
//         critical: string;
//         criticalBackground: string;
//         info: string;
//         infoBackground: string;
//       };
//     };

//     /** --------------------------------------------------
//      * Typography Tokens
//      * -------------------------------------------------- */
//     typography: {
//       title1Bold: { fontSize: string; fontWeight: number; lineHeight: string };
//       title1Regular: { fontSize: string; fontWeight: number; lineHeight: string };
//       title2Bold: { fontSize: string; fontWeight: number; lineHeight: string };
//       title2Regular: { fontSize: string; fontWeight: number; lineHeight: string };
//       subtitle1Bold: { fontSize: string; fontWeight: number; lineHeight: string };
//       subtitle1Regular: { fontSize: string; fontWeight: number; lineHeight: string };
//       subtitle2Bold: { fontSize: string; fontWeight: number; lineHeight: string };
//       subtitle2Regular: { fontSize: string; fontWeight: number; lineHeight: string };
//       body1Bold: { fontSize: string; fontWeight: number; lineHeight: string };
//       body1Regular: { fontSize: string; fontWeight: number; lineHeight: string };
//       body2Bold: { fontSize: string; fontWeight: number; lineHeight: string };
//       body2Regular: { fontSize: string; fontWeight: number; lineHeight: string };
//       label1Bold: { fontSize: string; fontWeight: number; lineHeight: string };
//       label1Regular: { fontSize: string; fontWeight: number; lineHeight: string };
//       label2Bold: { fontSize: string; fontWeight: number; lineHeight: string };
//       label2Regular: { fontSize: string; fontWeight: number; lineHeight: string };
//     };

//     /** --------------------------------------------------
//      * Spacing Scale
//      * -------------------------------------------------- */
//     spacing: {
//       spacing0: string;
//       spacing1: string;
//       spacing2: string;
//       spacing3: string;
//       spacing4: string;
//       spacing5: string;
//       spacing6: string;
//       spacing7: string;
//       spacing8: string;
//       spacing9: string;
//       spacing10: string;
//       spacing11: string;
//       spacing12: string;
//       spacing13: string;
//       spacing14: string;
//       spacing15: string;
//       spacing16: string;
//     };
//   }
// }


import '@emotion/react';

/**
 * Kakao Design Token Theme – Updated Type Declarations (grouped typography)
 */

declare module '@emotion/react' {
  /**
   * Utility type for a single typography token.
   */
  export type FontToken = {
    fontSize: string;
    fontWeight: number;
    lineHeight: string;
  };

  export interface Theme {
    /* ------------------------------------------------------------------
     * Palette
     * ------------------------------------------------------------------ */
    colors: {
      gray: Record<`gray${number}` , string>;
      yellow: Record<`yellow${number}` , string>;
      brown: Record<`brown${number}` , string>;
      blue: Record<`blue${number}` , string>;
      red: Record<`red${number}` , string>;
      brand: {
        kakaoYellow: string;
        kakaoYellowHover: string;
        kakaoYellowActive: string;
        kakaoYellowPressed: string;
        kakaoBrown: string;
        kakaoBrownPressed: string;
      };
      background: {
        default: string;
        disabled: string;
        fill: string;
      };
      text: {
        default: string;
        sub: string;
        disabled: string;
        placeholder: string;
      };
      border: {
        default: string;
        disabled: string;
      };
      state: {
        critical: string;
        criticalBackground: string;
        info: string;
        infoBackground: string;
      };
    };

    /* ------------------------------------------------------------------
     * Typography Tokens (grouped)
     * ------------------------------------------------------------------ */
    typography: {
      title: {
        title1Bold: FontToken;
        title1Regular: FontToken;
        title2Bold: FontToken;
        title2Regular: FontToken;
      };
      subtitle: {
        subtitle1Bold: FontToken;
        subtitle1Regular: FontToken;
        subtitle2Bold: FontToken;
        subtitle2Regular: FontToken;
      };
      body: {
        body1Bold: FontToken;
        body1Regular: FontToken;
        body2Bold: FontToken;
        body2Regular: FontToken;
      };
      label: {
        label1Bold: FontToken;
        label1Regular: FontToken;
        label2Bold: FontToken;
        label2Regular: FontToken;
      };
    };

    /* ------------------------------------------------------------------
     * Spacing Scale
     * ------------------------------------------------------------------ */
    spacing: {
      spacing0: string;
      spacing1: string;
      spacing2: string;
      spacing3: string;
      spacing4: string;
      spacing5: string;
      spacing6: string;
      spacing7: string;
      spacing8: string;
      spacing9: string;
      spacing10: string;
      spacing11: string;
      spacing12: string;
      spacing13: string;
      spacing14: string;
      spacing15: string;
      spacing16: string;
    };
  }
}
