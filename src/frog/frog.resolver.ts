import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { Frog } from './frog.model';

@Resolver()
export class FrogResolver {
  @Query(() => Frog, { nullable: true })
  async frog(@Args('id', { type: () => Int }) id: number) {
    const frogs = [
      { age: 10, firstName: 'frog', color: 'lime' },
      { age: 8, firstName: 'toad', color: 'green' },
      { age: 9, firstName: 'joey', color: 'red' }
    ];

    return frogs[id];
  }
}
