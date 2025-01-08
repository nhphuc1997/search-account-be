import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Base } from './Base.entity';
import { ApiProperty } from '@dataui/crud/lib/crud';

@Entity('banner')
export class Banner extends Base {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  @ApiProperty()
  url: string;
}
