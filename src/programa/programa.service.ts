import { ConflictException, Injectable } from '@nestjs/common';
import { CreateProgramaDto } from './dto/create-programa.dto';
import { UpdateProgramaDto } from './dto/update-programa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Programa } from './entities/programa.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProgramaService {
  programassena = []
  constructor(
    @InjectRepository(Programa)
    private programaRepository: Repository<Programa>,
  ) {}
  
  async create(createProgramaDto: CreateProgramaDto): Promise<Programa> {
    
    const pro = this.programaRepository.create(createProgramaDto);
    try{
    return this.programaRepository.save(pro);
    }
    catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('Ya existe un programa con este código');
      }
    }
  }

  findAll(): Promise<Programa[]> {
    return this.programaRepository.find({ relations: ['competencias'] });
  }

  findOne(codigo: string): Promise<Programa> {
    return this.programaRepository.findOne({ where: { codigo }, relations: ['competencias'] });
  }
  /*
  async findOne(codigo: string): Promise<Programa | null> {
    return this.programaRepository.findOneBy({ codigo });

  }*/

  update(id: number, updateProgramaDto: UpdateProgramaDto) {
    return `This action updates a #${id} programa`;
  }

  remove(codigo: string) {
    const indice = this.programassena.findIndex((ele) => ele.codigo == codigo)
    if (indice == -1)
       return 'No existe un programa con ese codigo ...'
    else
      this.programassena.splice(indice,1)
    return `El programa con codigo : ${codigo} fue borrado`;
  }
}
