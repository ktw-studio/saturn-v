import { ObjectType, Query } from 'type-graphql';

@ObjectType()
export class UserResolver {
    @Query(() => String)
    public async name() {
        return 'name';
    }
}
