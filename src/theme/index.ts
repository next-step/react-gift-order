// value
import { colors } from './color'
import { typography } from './typography'
import { spacing } from './spacing'

// type
import type { Colors } from './color'
import type { Typography } from './typography'
import type { Spacing } from './spacing'


export interface Theme extends Colors, Typography, Spacing {}

export const theme: Theme = {
  ...colors,
  ...typography,
  ...spacing,
}

export type { Colors, Typography, Spacing }