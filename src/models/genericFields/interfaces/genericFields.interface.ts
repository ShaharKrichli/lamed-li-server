export interface IGenericFields {
    id: number

    subType: number,
    technicalName: string,

    title: string,
    tooltipText: string
    placeHolder?: string,

    fieldType: string, // foregin key to a field type options
    apiURL: string // for dropdowns options such as cities street and more.
    isSave: boolean,

    fieldValue: string

    page: number,
    rowNumber: number // row number - keep it 10-20-30 - so future changes and rown can be.
    rowLength: number // number between 1-12
    priority: number
    required: string
    isDisplayDefault: boolean
    duplicatedId: number
    validateByValue: boolean
}