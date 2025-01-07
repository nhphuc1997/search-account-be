import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Base } from './Base.entity';
import { ApiProperty } from '@dataui/crud/lib/crud';

@Entity('order')
export class Order extends Base {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  @ApiProperty()
  order_number: string;

  @Column({ nullable: true })
  @ApiProperty()
  total_price: string;

  @Column({ nullable: true })
  @ApiProperty()
  user_name: string;
}
