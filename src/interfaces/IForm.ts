export interface IForm {
    agency: string | null;
    contact: string | null;
    email: string | null;
    event: string | null;
    cause: string | null;
    impact: string | null;
    dateAndTime: Date | null;
    eventType: string | null;
    category: string | null;
    other?: string | null
    severity: string | null;
    needAssistance: string | null;
    images?: any | null;
}