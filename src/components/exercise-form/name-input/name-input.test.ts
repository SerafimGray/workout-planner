import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import ElementPlus from 'element-plus'
import { describe, expect, it } from 'vitest'

import NameInput from '@/components/exercise-form/name-input/NameInput.vue'
import { useExerciseFormStore } from '@/stores/exercise-form/exerciseForm'

describe('LinkInput', () => {
  const initialState = {
    exerciseForm: {
      form: {
        name: ''
      },
      isPropValid: {
        name: true
      }
    }
  }

  const wrapper = mount(NameInput, {
    global: {
      plugins: [createTestingPinia({ initialState }), ElementPlus]
    }
  })

  const store = useExerciseFormStore()
  const input = wrapper.find('input')
  const label = 'fakeLabel'
  const fakeName = 'fakeName'

  it('should display label text', async () => {
    await wrapper.setProps({ label })
    expect(wrapper.html()).toContain(label)
  })

  it('should render input field', () => {
    expect(input.exists())
  })

  it('should change store value on input', async () => {
    await input.setValue(fakeName)
    expect(store.form.name).toBe(fakeName)
  })

  it('should change input value on store change', async () => {
    await store.$patch({ form: { name: fakeName } })
    expect(input.element.value).toBe(fakeName)
  })

  it('should display aria-invalid with store value', () => {
    expect(wrapper.find('[aria-invalid="false"]').exists())
  })

  it('should change aria-invalid on store change', async () => {
    await store.$patch({ isPropValid: { name: false } })
    expect(wrapper.find('[aria-invalid="true"]').exists())
  })
})
