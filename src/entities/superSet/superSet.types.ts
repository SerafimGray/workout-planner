import { Exercise } from '@/entities/exercise/exercise'

export interface ISuperSet {
  readonly exercises: Array<Exercise>
  readonly timeout: number
}
