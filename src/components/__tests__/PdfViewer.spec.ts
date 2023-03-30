import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import PdfViewer from '../PdfViewer.vue'

describe('PdfViewer', () => {
  it('renders properly', () => {
    const wrapper = mount(PdfViewer, {} );
    expect(wrapper.text()).toContain('My Pdf');
  })
})
