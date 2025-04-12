import { type TTaskPriority, type TTaskStatus } from '@/types'

export interface ITask {
  id: string
  projectId: string
  title: string
  description?: string
  status: TTaskStatus
  priority: TTaskPriority
  assignedToId?: string
  createdById: string
  dueDate?: string
  createdAt: string
  updatedAt: string
}

export class Task {
  static load(data: ITask): Task {
    if (!data.id) throw new Error('Task ID is required')
    if (!data.projectId) throw new Error('Project ID is required')
    if (!data.title) throw new Error('Task title is required')
    if (!data.status) throw new Error('Task status is required')
    if (!data.priority) throw new Error('Task priority is required')
    if (!data.createdById) throw new Error('Creator ID is required')

    return new Task(data)
  }

  constructor(private data: ITask) {}

  get id(): string {
    return this.data.id
  }

  get projectId(): string {
    return this.data.projectId
  }

  get title(): string {
    return this.data.title
  }

  get description(): string {
    return this.data.description ?? ''
  }

  get status(): TTaskStatus {
    return this.data.status
  }

  get priority(): TTaskPriority {
    return this.data.priority
  }

  get assignedToId(): string | undefined {
    return this.data.assignedToId
  }

  get createdById(): string {
    return this.data.createdById
  }

  get dueDate(): Date | undefined {
    return this.data.dueDate ? new Date(this.data.dueDate) : undefined
  }

  get createdAt(): Date {
    return new Date(this.data.createdAt)
  }

  get updatedAt(): Date {
    return new Date(this.data.updatedAt)
  }

  toJSON(): ITask {
    return { ...this.data }
  }

  equals(other: Task): boolean {
    return this.id === other.id
  }

  isValid(): boolean {
    return Boolean(
      this.id &&
      this.projectId &&
      this.title &&
      this.status &&
      this.priority &&
      this.createdById &&
      this.createdAt &&
      this.updatedAt
    )
  }

  isOverdue(): boolean {
    if (!this.dueDate) return false
    return this.dueDate < new Date()
  }
}
