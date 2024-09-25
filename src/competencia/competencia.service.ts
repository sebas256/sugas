import { Injectable } from '@nestjs/common';
import { CreateCompetenciaDto } from './dto/create-competencia.dto';
import { UpdateCompetenciaDto } from './dto/update-competencia.dto';
import { Competencia } from './entities/competencia.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CompetenciaService {
  constructor(
    @InjectRepository(Competencia)
    private competenciaRepository: Repository<Competencia>,
  ) {}

  async create(createCompetenciaDto: CreateCompetenciaDto): Promise<Competencia> {
    return this.competenciaRepository.save(createCompetenciaDto);
  }
 
  findAll(): Promise<Competencia[]> {
    return this.competenciaRepository.find({ relations: ['programas'] });
  }

  findOne(codigo : string): Promise<Competencia> {
    return this.competenciaRepository.findOne({ where: { codigo }, relations: ['programas'] });
  }

  async update(codigo: string, competencia: Competencia): Promise<Competencia> {
    await this.competenciaRepository.update(codigo, competencia);
    return this.findOne(codigo);
  }


  async remove(codigo: string): Promise<void> {
    await this.competenciaRepository.delete(codigo);
  }
}
