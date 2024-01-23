export interface Member {
  name: string;
  dateOfBirth: string | null;
  gender: string | null;
  id?: string;
}

export interface EditMember {
  name: string;
  dateOfBirth: Date | null;
  gender: string | null;
  id: string;
}

export interface AddMember {
  name: string;
  dateOfBirth: Date | null;
  gender: string | null;
}

export interface LeaderboardMember {
  name: string;
  numberOfCreatedTags: number;
  id: string;
}
