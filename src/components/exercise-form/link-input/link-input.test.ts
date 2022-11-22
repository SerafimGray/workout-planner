import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import ElementPlus from 'element-plus'
import { describe, expect, it } from 'vitest'

import LinkInput from '@/components/exercise-form/link-input/LinkInput.vue'

describe('LinkInput', () => {
  it('should display label', () => {
    const initialState = {
      exerciseForm: {
        form: {
          link: ''
        }
      }
    }
    const wrapper = mount(LinkInput, {
      data() {
        return {
          label: 'hi'
        }
      },
      global: {
        plugins: [createTestingPinia({ initialState }), ElementPlus]
      }
    })

    console.log(wrapper.html())
    expect(wrapper.find('label').text()).toBe('hi')
  })
})
