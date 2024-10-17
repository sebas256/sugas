import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArchivoService } from './archivo.service';
import { CreateArchivoDto } from './dto/create-archivo.dto';
import { UpdateArchivoDto } from './dto/update-archivo.dto';

@Controller('archivo')
export class ArchivoController {
  constructor(private readonly archivoService: ArchivoService) {}

  @Post(':resultadoId')
  create(@Body() createArchivoDto: CreateArchivoDto,
  @Param('resultadoId') id: number, ) {
    return this.archivoService.create(createArchivoDto, +id);
  }

  @Get()
  findAll() {
    return this.archivoService.findAll();
  }

  @Get(':id')
  findAllresultado(@Param('id') id: string) {
    return this.archivoService.findAllarchresultado(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArchivoDto: UpdateArchivoDto) {
    return this.archivoService.update(+id, updateArchivoDto);
  }

  @Delete(':id')
  remove(
    @Param('id') id: number
   
  ) {
   return this.archivoService.remove(id);
  }
}
