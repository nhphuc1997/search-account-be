import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Base } from './Base.entity';

@Entity('product')
export class Product extends Base {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  price: string;

  @Column({ nullable: true })
  thumnail: string;

  @Column({ nullable: true })
  images: string;
}
