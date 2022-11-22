import { createTestingPinia } from '@pinia/testing'
import { mount, VueWrapper, DOMWrapper } from '@vue/test-utils'
import ElementPlus from 'element-plus'
import { beforeEach, describe, expect, it } from 'vitest'

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
  let wrapper: VueWrapper
  const label = 'fakeLabel'
  let input: DOMWrapper<HTMLInputElement>
  const fakeLink = 'fakeLink'
  let store: any

  beforeEach(() => {
    wrapper = mount(LinkInput, {
      global: {
        plugins: [createTestingPinia({ initialState }), ElementPlus]
      }
    })

    store = useExerciseFormStore()

    input = wrapper.find('input')
  })

  it('should display label text', async () => {
    await wrapper.setProps({ label })

    expect(wrapper.html()).toContain(label)
  })

  it('should render input field', () => {
    expect(input.exists())
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
    expect(wrapper.find('[aria-invalid="false"]').exists())
  })

  it('should change aria-invalid on store change', async () => {
    await store.$patch({ isPropValid: { link: false } })
    expect(wrapper.find('[aria-invalid="true"]').exists())
  })
})
