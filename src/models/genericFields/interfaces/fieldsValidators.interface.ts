export interface IFieldValidators {
    id: number
    functionName: string // foregin key to possiable validation function
    param1?: string
    param2?: string
    param3?: string
    errorMsg: string
}