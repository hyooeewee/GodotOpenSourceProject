import { Controller, Get, Redirect } from '@nestjs/common';
import { GospService } from './gosp.service';

@Controller('gosp')
export class GospController {
  constructor(private readonly gospService: GospService) {}
  @Get()
  @Redirect('https://github.com/hyooeewee/GodotOpenSourceProject', 302)
  getHome(): void {
    this.gospService.getHome();
  }
}
