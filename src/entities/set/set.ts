import { ISet } from '@/entities/set/set.types'

export class Set implements ISet {
  readonly repetitions: number
  readonly weight: number

  constructor(repetitions: number, weight: number) {
    this.repetitions = repetitions
    this.weight = weight
  }
}
