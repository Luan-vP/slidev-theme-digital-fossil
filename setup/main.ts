import { configs } from '@slidev/client'
import { defineAppSetup } from '@slidev/types'

// Mirror the deck's `themeConfig.palette` onto <html data-palette> so the
// palettes in styles/layout.css can key off it. No palette → parchment.
export default defineAppSetup(() => {
  const palette = configs.themeConfig?.palette
  if (palette && typeof document !== 'undefined') {
    document.documentElement.dataset.palette = String(palette)
  }
})
