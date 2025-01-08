import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Base } from './Base.entity';
import { ApiProperty } from '@dataui/crud/lib/crud';

@Entity('product')
export class Product extends Base {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  @ApiProperty()
  name: string;

  @Column({ nullable: true })
  @ApiProperty()
  price: string;

  @Column({ nullable: true })
  @ApiProperty()
  thumnail: string;

  @Column({ nullable: true })
  @ApiProperty()
  images: string;

  @Column({ nullable: true })
  @ApiProperty()
  categoryId: number;

  @Column({ nullable: true })
  @ApiProperty()
  categoryName: string;
}
