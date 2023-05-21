import { Events } from 'src/event-teams/entities/event-teams.entity';
export declare class Team {
    id: number;
    teamName: string;
    eventsTeams: Events[];
    created_at: Date;
    updated_at: Date;
    deleted: boolean;
    deleted_at: Date;
}
