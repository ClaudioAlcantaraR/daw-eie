import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Claudio Alcantara Rivas</span>,
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
