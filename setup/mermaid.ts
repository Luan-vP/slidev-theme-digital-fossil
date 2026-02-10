import { defineMermaidSetup } from '@slidev/types'

const fossilThemeVariables = {
  background: '#EAE2CF',
  primaryColor: '#B86F3C',
  primaryTextColor: '#2E261D',
  primaryBorderColor: '#4A7C7C',
  lineColor: '#4A7C7C',
  secondaryColor: '#5D7EA3',
  tertiaryColor: '#D8A657',
  fontFamily: 'EB Garamond, "Crimson Pro", serif',
  textColor: '#2E261D',
  mainBkg: '#F5EBDC',
  nodeBorder: '#4E3B2C',
  clusterBkg: '#E0D2B5',
  clusterBorder: '#4A7C7C',
}

export default defineMermaidSetup(() => ({
  theme: 'base',
  themeVariables: fossilThemeVariables,
  themeCSS: `
    :root {
      --fossil-primary: var(--slidev-color-primary);
      --fossil-secondary: var(--slidev-color-secondary);
      --fossil-highlight: var(--slidev-color-highlight);
    }
    .mermaid text,
    .mermaid .node.fossilPrimary rect,
    .mermaid .node.fossilPrimary path {
      fill: var(--fossil-primary);
      stroke: var(--slidev-color-heading);
    }
    .mermaid .node.fossilSecondary rect,
    .mermaid .node.fossilSecondary path {
      fill: var(--fossil-secondary);
      stroke: var(--slidev-color-heading);
    }
    .mermaid .node.fossilHighlight rect,
    .mermaid .node.fossilHighlight path {
      fill: var(--fossil-highlight);
      stroke: var(--slidev-color-heading);
    }
  `,
}))
