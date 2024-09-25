import { Module } from '@nestjs/common';
import { ResultadosService } from './resultados.service';
import { ResultadosController } from './resultados.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Resultado } from './entities/resultado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Resultado])],
  controllers: [ResultadosController],
  providers: [ResultadosService],
})
export class ResultadosModule {}
