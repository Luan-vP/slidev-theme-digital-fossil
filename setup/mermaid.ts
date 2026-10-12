import { configs } from '@slidev/client'
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

// Circuit palette (opt in with `themeConfig: { palette: circuit }`): nodes are
// components on solder-mask green, edges are heavy gold traces.
const circuitThemeVariables = {
  ...fossilThemeVariables,
  background: '#0F3B2A',
  primaryColor: '#0A2A1E',
  primaryTextColor: '#F2E7C9',
  primaryBorderColor: '#D4A64A',
  lineColor: '#D4A64A',
  secondaryColor: '#145039',
  tertiaryColor: '#1C5C43',
  textColor: '#DCE5D6',
  mainBkg: '#0A2A1E',
  nodeBorder: '#D4A64A',
  clusterBkg: '#145039',
  clusterBorder: '#D4A64A',
  edgeLabelBackground: '#0F3B2A',
}

const isCircuit = () => configs.themeConfig?.palette === 'circuit'

export default defineMermaidSetup(() => ({
  theme: 'base',
  themeVariables: isCircuit() ? circuitThemeVariables : fossilThemeVariables,
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
    ${isCircuit() ? '.flowchart-link { stroke-width: 3px !important; }' : ''}
  `,
}))
