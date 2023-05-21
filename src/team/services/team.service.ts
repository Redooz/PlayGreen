import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Team } from '../entities/team.entity';
import { Repository } from 'typeorm';
import { CreateTeamDto, UpdateTeamDto } from '../dtos/team.dto';
import { EventsService } from './events.service';

@Injectable()
export class TeamService {
  constructor(
    @Inject('TEAM_REPOSITORY')
    private teamRepository: Repository<Team>,
  ) {}

  async findAll() {
    return this.teamRepository.find();
  }

  async findById(id: number) {
    const team = await this.teamRepository.findOne({
      where: {
        id,
      },
    });

    if (!team) {
      throw new NotFoundException('Team not found');
    }

    return team;
  }

  async createTeam(teamDto: CreateTeamDto): Promise<Team> {
    const team = this.teamRepository.create(teamDto);
    return this.teamRepository.save(team);
  }

  async getTeamById(id: number): Promise<Team> {
    const team = await this.teamRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!team) {
      throw new NotFoundException('Team not found');
    }

    return team;
  }

  async updateTeam(id: number, teamDto: UpdateTeamDto): Promise<Team> {
    const team = await this.getTeamById(id);

    // Update the team entity with the provided data
    Object.assign(team, teamDto);

    return this.teamRepository.save(team);
  }

  async deleteTeam(id: number): Promise<void> {
    const team = await this.getTeamById(id);

    await this.teamRepository.remove(team);
  }

  /*async getEventsByTeam(id: number) {
    const team = await this.getTeamById(id);

    return {
      team,
      events: await this.eventsService.findAllByTeam(team.id),
    };
  }*/
}
