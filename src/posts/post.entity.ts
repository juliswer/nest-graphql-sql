import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  title: string;

  @Column({ type: 'text', nullable: true })
  @Field({ nullable: true })
  content?: string;
}
