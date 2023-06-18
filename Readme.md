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
