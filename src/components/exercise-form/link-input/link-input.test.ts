import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import ElementPlus from 'element-plus'
import { describe, expect, it } from 'vitest'

import LinkInput from '@/components/exercise-form/link-input/LinkInput.vue'
import { useExerciseFormStore } from '@/stores/exercise-form/exerciseForm'

describe('LinkInput', () => {
  const initialState = {
    exerciseForm: {
      form: {
        link: ''
      },
      isPropValid: {
        link: true
      }
    }
  }

  const wrapper = mount(LinkInput, {
    global: {
      plugins: [createTestingPinia({ initialState }), ElementPlus]
    }
  })

  const store = useExerciseFormStore()
  const input = wrapper.find('input')
  const label = 'fakeLabel'
  const fakeLink = 'fakeLink'

  it('should display label text', async () => {
    await wrapper.setProps({ label })
    expect(wrapper.html()).toContain(label)
  })

  it('should render input field', () => {
    expect(input.exists()).toBe(true)
  })

  it('should change store value on input', async () => {
    await input.setValue(fakeLink)
    expect(store.form.link).toBe(fakeLink)
  })

  it('should change input value on store change', async () => {
    await store.$patch({ form: { link: fakeLink } })
    expect(input.element.value).toBe(fakeLink)
  })

  it('should display aria-invalid with store value', () => {
    expect(wrapper.find('[aria-invalid="false"]').exists()).toBe(true)
  })

  it('should change aria-invalid on store change', async () => {
    await store.$patch({ isPropValid: { link: false } })
    expect(wrapper.find('[aria-invalid="true"]').exists()).toBe(true)
  })
})
