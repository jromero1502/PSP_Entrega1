export interface TaskModel {
    id?: string,
    title: string,
    description: string,
    createdDate: Date,
    modifiedDate: Date,
    createdBy: string,
    state: string
}