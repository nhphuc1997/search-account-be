import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Base } from './Base.entity';
import { ApiProperty } from '@dataui/crud/lib/crud';

@Entity('category')
export class Category extends Base {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  @ApiProperty()
  name: string;
}
