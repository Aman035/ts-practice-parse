## PARSE

#### Project Goal

To load, parse and analyze data from a CSV file

#### Steps To Run

##### 1. Install Dependencies

`npm i
`

##### 2. Run Development Server

`npm run dev
`

##### 3. Run Production Server

`npm start
`

#### Notes For Dev

##### Script Setup Process

Using Nodemon for development server to monitoring changes and refreshing
Standard Script commands defined in package.json
Specifying tsc config for build by changing tsCongif.json ( set up using tsc --init )

##### V1

Reading csv files in not a resuable code and every data is present as string. Ideally we can parse some of the values as date or number

##### V2

Added a CSV Reader file and type style type for data.
Issue - Still CsvReader is not a type of class that can be used in any other project since it parse data specificly for this dataset

##### V3

**Refactor Approach 1**
Refactor of CsvReader file using Generic Type - Allows to pass diff types in a class rather than building diff classes itself
This approach uses inheritence.

**Refactor Approach 2**
Refactor using composition
Usually inheritence is used on **is** relationship whereas composition is used on **has** relationship.
In this case MatchReader can have data from other source also such as APIReader ( has a relationship ) so composition makes sense.

##### V4

Building seperate classes for Analysis purpose rather than hardcoding fn for a particular team
