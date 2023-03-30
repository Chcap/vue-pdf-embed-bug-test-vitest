import { describe, expect, it } from 'vitest'

import { mount } from '@vue/test-utils'
import PdfViewer from '../PdfViewer.vue'

describe('PdfViewer', () => {
    it.skip('renders properly', () => {
        const wrapper = mount(PdfViewer, {
            global: {
                stubs: {
                    'vue-pdf-embed': {
                        template: '<span>PDF VIEWER</span>',
                    },
                },
            },
        });
        expect(wrapper.text()).toContain('My Pdf');
    })
})
