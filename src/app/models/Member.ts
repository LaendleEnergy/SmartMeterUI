
export interface Member {
    name: string;
    dateOfBirth: string;
    gender: string | null;
    id?: string;
}

export interface EditMember {
    name: string;
    dateOfBirth: Date;
    gender: string | null;
    id: string;
}

export interface AddMember {
    name: string;
    dateOfBirth: Date;
    gender: string | null;
}

export interface LeaderboardMember {
    name: string;
    numberOfCreatedTags: number;
    id: string;
}
