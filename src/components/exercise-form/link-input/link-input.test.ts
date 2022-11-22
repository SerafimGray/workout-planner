import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import ElementPlus from 'element-plus'
import { describe, expect, it } from 'vitest'

import LinkInput from '@/components/exercise-form/link-input/LinkInput.vue'

describe('LinkInput', () => {
  it('should display label text', async () => {
    const initialState = {
      exerciseForm: {
        form: {
          link: ''
        }
      }
    }
    const wrapper = mount(LinkInput, {
      global: {
        plugins: [createTestingPinia({ initialState }), ElementPlus]
      }
    })
    const label = 'fakeLabel'

    await wrapper.setProps({ label })

    expect(wrapper.html()).toContain(label)
  })
})
