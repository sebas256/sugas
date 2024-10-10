import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResultadosService } from './resultados.service';
import { CreateResultadoDto } from './dto/create-resultado.dto';
import { UpdateResultadoDto } from './dto/update-resultado.dto';

@Controller('resultados')
export class ResultadosController {
  constructor(private readonly resultadosService: ResultadosService) {}

  @Post(':competenciaId/:programaId')
  create(@Body() createResultadoDto: CreateResultadoDto,
  @Param('competenciaId') competenciaId: number, 
  @Param('programaId') programaId : number) {
    console.log(programaId)
    return this.resultadosService.create(createResultadoDto,competenciaId,programaId);
  }

  @Get()
  findAll() {
    return this.resultadosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resultadosService.findOne(+id);
  }

  @Get(':idprograma/:idcompetencia')
  findcomppro(@Param('idcompetencia') idcomp: number,
  @Param('idprograma') idprog: number,) {
    return this.resultadosService.findresultadoprocomp(idprog,idcomp);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResultadoDto: UpdateResultadoDto) {
    return this.resultadosService.update(+id, updateResultadoDto);
  }

  @Delete('codigo/:id')
  remove(@Param('id') id: number) {
    return this.resultadosService.remove(id);
  }
}
