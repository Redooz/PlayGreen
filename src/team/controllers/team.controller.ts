import {
  Controller,
  Param,
  UseGuards,
  Get,
  Post,
  Put,
  Delete,
  Body,
} from '@nestjs/common';
import { TeamService } from '../services/team.service';
import {
  ApiTags,
  ApiBody,
  ApiBearerAuth,
  ApiParam,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiNoContentResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Team } from '../entities/team.entity';
import { CreateTeamDto, UpdateTeamDto } from '../dtos/team.dto';
import { Role } from 'src/user/constants/user.enums';

@Controller('team')
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiTags('Teams')
@ApiBearerAuth()
export class TeamController {
  constructor(private teamService: TeamService) {}

  @Get()
  @ApiOperation({ summary: 'Get all teams' })
  @ApiOkResponse({
    status: 200,
    description: 'Returns an array of all teams',
    type: Team,
    isArray: true,
  })
  async getTeams(): Promise<Team[]> {
    return this.teamService.findAll();
  }

  @Post()
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Create a new team' })
  @ApiBody({ type: CreateTeamDto })
  @ApiCreatedResponse({
    description: 'Team successfully created',
    type: Team,
  })
  async createTeam(@Body() teamDto: CreateTeamDto): Promise<Team> {
    return this.teamService.createTeam(teamDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get team by ID' })
  @ApiParam({ name: 'id', description: 'Team ID' })
  @ApiOkResponse({ status: 200, description: 'The found team', type: Team })
  async getTeamById(@Param('id') id: number): Promise<Team> {
    return this.teamService.getTeamById(id);
  }

  @Put(':id')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Update team by ID' })
  @ApiParam({ name: 'id', description: 'Team ID' })
  @ApiBody({ type: UpdateTeamDto })
  @ApiOkResponse({
    status: 200,
    description: 'Team successfully updated',
    type: Team,
  })
  async updateTeam(
    @Param('id') id: number,
    @Body() teamDto: UpdateTeamDto,
  ): Promise<Team> {
    return this.teamService.updateTeam(id, teamDto);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Delete team by ID' })
  @ApiParam({ name: 'id', description: 'Team ID' })
  @ApiNoContentResponse({
    status: 204,
    description: 'Team successfully deleted',
  })
  async deleteTeam(@Param('id') id: number): Promise<void> {
    return this.teamService.deleteTeam(id);
  }
}
