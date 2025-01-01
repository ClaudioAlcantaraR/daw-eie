import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import ApplicationLogo from './components/ApplicationLogo'

const config: DocsThemeConfig = {
  logo: <ApplicationLogo />,
  footer: {
    text: 'Claudio Alcantara Rivas - DAW/AGUA - Empresa e iniciativa emprendedora | 2024 - 2025',
  },
  search: {
    placeholder: '',
    component: () => null
  },
  toc: {
    title: "En está página"
  },
  feedback: {
    content: null
  },
  gitTimestamp: null,
  editLink: {
    component: () => null
  }
}

export default config
