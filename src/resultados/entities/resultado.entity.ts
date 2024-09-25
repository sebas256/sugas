import { Competencia } from 'src/competencia/entities/competencia.entity';
import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
@Index("IDX_RESULTADO_CODIGO", ["codigo"], { unique: true })
export class Resultado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 80 })
  codigo: string;

  @Column({ length: 200 })
  nombre: string;

  @Column()
  duracion: number;

  @ManyToOne(() => Competencia, (competencia) => competencia.resultado,{ nullable: false })
    competencia: Competencia
}
