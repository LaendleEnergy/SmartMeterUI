
export interface Member {
    name: string;
    dateOfBirth: string;
    gender: string | null;
    id?: string;
}

export interface MemberInput {
    name: string;
    dateOfBirth: Date;
    gender: string | null;
}