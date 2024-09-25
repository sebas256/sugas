import { Injectable } from '@nestjs/common';
import { CreateResultadoDto } from './dto/create-resultado.dto';
import { UpdateResultadoDto } from './dto/update-resultado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Resultado } from './entities/resultado.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ResultadosService {
  constructor(
    @InjectRepository(Resultado)
    private resultadoRepository: Repository<Resultado>,
  ) {}

  async create(createResultadoDto: CreateResultadoDto) {
   const pro = this.resultadoRepository.create(createResultadoDto);
    return this.resultadoRepository.save(pro);
  }

  findAll() {
    return `This action returns all resultados`;
  }

  findOne(id: number) {
    return `This action returns a #${id} resultado`;
  }

  update(id: number, updateResultadoDto: UpdateResultadoDto) {
    return `This action updates a #${id} resultado`;
  }

  remove(id: number) {
    return `This action removes a #${id} resultado`;
  }
}
