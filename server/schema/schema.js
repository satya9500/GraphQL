const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

let books = [
    { name: "Book 1", genre: "Genre 1", id: "1" },
    { name: "Book 2", genre: "Genre 2", id: "2" },
    { name: "Book 3", genre: "Genre 3", id: "3" },
];

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                return books.find(element => element.id == args.id);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})