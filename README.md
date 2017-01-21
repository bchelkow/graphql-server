# GraphQL Server example

```sh
#with npm
npm install
npm start

#with yarn
yarn install
yarn start
```

## Queries

**countries: [Country]** - return list of countries, it's proxy for `https://restcountries.eu/rest/v1/all`

**todos: [Todo]** - return todos list


## Mutations

**createTodo(title: String!, task:String!): Todo** - create new todo

**checkTodo(title: String!): Todo** - set done flag to true

## Schemas

- Country:

```
type Country {
    name: String
    topLevelDomain: [String]
    alpha2Code: String
    alpha3Code: String
    callingCodes: [String]
    capital: String
    altSpellings: [String]
    relevance: String
    region: String
    subregion: String
    population: Int
    latlng: [Int]
    demonym: String
    area: Int
    gini: Float
    timezones: [String]
    borders: [String]
    nativeName: String
    numericCode: String
    currencies: [String]
    languages: [String]
    area: Int
}
```

- Todo

```
type Todo {
    id: ID!
    title: String
    task: String
    done: Boolean
}
```
