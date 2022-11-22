import { createTestingPinia } from '@pinia/testing'
import { mount, VueWrapper } from '@vue/test-utils'
import ElementPlus from 'element-plus'
import { beforeEach, describe, expect, it } from 'vitest'

import LinkInput from '@/components/exercise-form/link-input/LinkInput.vue'

describe('LinkInput', () => {
  const initialState = {
    exerciseForm: {
      form: {
        link: ''
      }
    }
  }
  let wrapper: VueWrapper
  const label = 'fakeLabel'

  beforeEach(() => {
    wrapper = mount(LinkInput, {
      global: {
        plugins: [createTestingPinia({ initialState }), ElementPlus]
      }
    })
  })

  it('should display label text', async () => {
    await wrapper.setProps({ label })

    expect(wrapper.html()).toContain(label)
  })

  it('should render input field', () => {
    expect(wrapper.find('input').exists())
  })
})
