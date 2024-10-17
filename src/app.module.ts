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
import { ArchivoModule } from './archivo/archivo.module';
import { Archivo } from './archivo/entities/archivo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'gguias',
      entities: [Programa, Competencia, Resultado, Archivo],
      synchronize: true,
    }),
    ProgramaModule,
    CompetenciaModule,
    ResultadosModule,
    ProgramacompetenciaModule,
    ArchivoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
