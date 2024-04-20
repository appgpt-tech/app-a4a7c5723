//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Carpenter')
export class CarpenterEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  Name: string;

  @Column('text', { nullable: true })
  Skills: string;

  @Column('text', { nullable: true })
  Availability: string;

  @Column('text', { nullable: true })
  ContactInformation: string;

  @Column('real', { nullable: true })
  Price: number;
}
