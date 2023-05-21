import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { Roles } from 'src/auth/decorators/roles.decorator';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { EventService } from '../services/event.service';
import { CreateEventDto } from '../dtos/create-event.dto';
import { UpdateEventDto } from '../dtos/update-event.dto';
import { Role } from 'src/user/constants/user.enums';

@Controller('event')
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiTags('Events')
@ApiBearerAuth()
export class EventController {
  constructor(private eventService: EventService) {}

  @Post(':team_option')
  @Roles(Role.ADMIN)
  @ApiBody({ type: CreateEventDto })
  @ApiOperation({ summary: 'Create an event' })
  @ApiResponse({ status: 201, description: 'Event created successfully' })
  async createEvent(
    @Body() eventDto: CreateEventDto,
    @Param('team_option') teamOption: number,
  ) {
    return this.eventService.createEvent(eventDto, teamOption);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an event by ID' })
  @ApiResponse({ status: 200, description: 'Event retrieved successfully' })
  async getEventById(@Param('id') id: number) {
    return this.eventService.getEventById(id);
  }

  @Get()
  @ApiOperation({ summary: 'Get all events' })
  @ApiResponse({ status: 200, description: 'Events retrieved successfully' })
  async getAllEvents() {
    return this.eventService.getAll();
  }

  @Put(':id')
  @Roles(Role.ADMIN)
  @ApiBody({ type: UpdateEventDto })
  @ApiOperation({ summary: 'Update an event' })
  @ApiResponse({ status: 200, description: 'Event updated successfully' })
  async updateEvent(@Param('id') id: number, @Body() eventDto: UpdateEventDto) {
    return this.eventService.updateEvent(id, eventDto);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Delete an event' })
  @ApiResponse({ status: 200, description: 'Event deleted successfully' })
  async deleteEvent(@Param('id') id: number) {
    return this.eventService.deleteEvent(id);
  }
}
