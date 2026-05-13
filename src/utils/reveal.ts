import type { CSSProperties } from 'react'

export function revealDelayStyle(delayMs: number): CSSProperties {
  const slowedDelayMs = Math.round(delayMs * 1.5)

  return {
    '--reveal-delay': `${slowedDelayMs}ms`,
  } as CSSProperties
}
