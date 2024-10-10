import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProgramaModule } from './programa/programa.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Programa } from './programa/entities/programa.entity';
import { CompetenciaModule } from './competencia/competencia.module';
import { Competencia } from './competencia/entities/competencia.entity';
import { ResultadosModule } from './resultados/resultados.module';
import { Resultado } from './resultados/entities/resultado.entity';
import { ProgramacompetenciaModule } from './programacompetencia/programacompetencia.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'gguias',
      entities: [Programa, Competencia, Resultado],
      synchronize: true,
    }),
    ProgramaModule,
    CompetenciaModule,
    ResultadosModule,
    ProgramacompetenciaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
