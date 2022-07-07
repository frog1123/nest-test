import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Frog {
  @Field(type => Int)
  age: number;

  @Field(type => String)
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field(type => String)
  color: string;
}
