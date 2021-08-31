# jussi-frontend-test
This project is a transpile of a figma design into real React web page with Sass.

## The requirements are:
- [x] To use React as base lib of the project.
- [x] To use SASS for styling.
- [x] To use a public consulting API and use it to implement the  search field on header;

## Assets
 - [Figma Design](https://www.figma.com/file/O9AEeYB6ZWyMTZzMZhvjaY/loja-vtex-jussi?node-id=0%3A1)

###### ATTENTION: AS THE ASSET GIVEN DOES NOT SUPPORT RESPONSIVE LAYOUTS I DECIDED FOR NOT IMPLMENT IT BY MY WAY SO THE RESULT OF THIS WORK ONLY WORKS PROPERLY IN DESKTOP SCREENS.

I have decide it for  a simple one reason: They wanted to test if I was able to implement a given layout. So if I implement a responsive screen, and as by default it was not given,  any decision I would make would turn the result  on a totally different layout. and  not the one  they gave me to implement.

## Development of the API request for Search field.
On this project I have use the Address Search API by CEP provided by [Viacep](https://viacep.com.br/)

In orther to get the adresss, just type a valid CEP in the Search Input then click in the search icon.

##### The search input accepts two patterns of CEP.

> XXXXX-XXX or XXXXXXXX

##### Any different pattern will result on an alert message.


# Page visualization

You can see the my test result on [this link](https://jussi-frontend-test.vercel.app/)


# Running this project on localhost
In order to run this project locally:
 - clone the repository
```
git clone  https://github.com/bbrunocosta/jussi-frontend-test.git
```
- install dependencies
```
yarn
```
after instalation run the project
```
yarn start
```
