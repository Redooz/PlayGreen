import { TeamService } from '../services/team.service';
import { Team } from '../entities/team.entity';
import { CreateTeamDto, UpdateTeamDto } from '../dtos/team.dto';
export declare class TeamController {
    private teamService;
    constructor(teamService: TeamService);
    getTeams(): Promise<Team[]>;
    createTeam(teamDto: CreateTeamDto): Promise<Team>;
    getTeamById(id: number): Promise<Team>;
    updateTeam(id: number, teamDto: UpdateTeamDto): Promise<Team>;
    deleteTeam(id: number): Promise<void>;
}
