import { makeExecutableSchema } from 'graphql-tools';
import country from './country.graphql';
import todo from './todo.graphql';
import queries from './queries.graphql';
import mutations from './mutations.graphql';
import resolvers from '../resolvers';

const schemaString = `
${country}
${todo}
${queries}
${mutations}
schema {
    query: Query
    mutation: Mutation
}
`;

export default makeExecutableSchema({
  resolvers,
  typeDefs: schemaString,
});
