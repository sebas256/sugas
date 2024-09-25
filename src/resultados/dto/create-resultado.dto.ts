import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Competencia } from "src/competencia/entities/competencia.entity";


export class CreateResultadoDto {
    @IsString()
    @IsNotEmpty()
    nombre : string;
    @IsString()
    @IsNotEmpty()  
    codigo : string;
    @IsNumber()
    @IsNotEmpty()
    duracion : number;
    @IsNumber()
    @IsNotEmpty()
    competencia : Competencia
}
