import { Team } from '../entities/team.entity';
import { Repository } from 'typeorm';
import { CreateTeamDto, UpdateTeamDto } from '../dtos/team.dto';
export declare class TeamService {
    private teamRepository;
    constructor(teamRepository: Repository<Team>);
    findAll(): Promise<Team[]>;
    findById(id: number): Promise<Team>;
    createTeam(teamDto: CreateTeamDto): Promise<Team>;
    getTeamById(id: number): Promise<Team>;
    updateTeam(id: number, teamDto: UpdateTeamDto): Promise<Team>;
    deleteTeam(id: number): Promise<void>;
}
