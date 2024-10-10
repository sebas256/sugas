import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProgramacompetenciaService } from './programacompetencia.service';
import { CreateProgramacompetenciaDto } from './dto/create-programacompetencia.dto';
import { UpdateProgramacompetenciaDto } from './dto/update-programacompetencia.dto';

@Controller('programacompetencia')
export class ProgramacompetenciaController {
  constructor(private readonly programacompetenciaService: ProgramacompetenciaService) {}

  @Post()
  create(@Body() createProgramacompetenciaDto: CreateProgramacompetenciaDto) {
    return this.programacompetenciaService.create(createProgramacompetenciaDto);
  }

  @Get()
  findAll() {
    return this.programacompetenciaService.findAll();
  }

  @Get('programa/:id')
  findOne(@Param('id') id: string) {
    return this.programacompetenciaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProgramacompetenciaDto: UpdateProgramacompetenciaDto) {
    return this.programacompetenciaService.update(+id, updateProgramacompetenciaDto);
  }

  

  @Delete(':programId/competencia/:competenciaId')
   removeRole(@Param('programId') programId: number, @Param('competenciaId') competenciaId: number) {
    return  this.programacompetenciaService.remove(programId,competenciaId);
    
  }
}
