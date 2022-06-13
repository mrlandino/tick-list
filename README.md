# Tick List

![App Front Page](./public/main screen.png)

This is a single user application for rock climbers to store their favorite climbs in a "tick list". Users are able to check their climbs off the list as completed as well as be able to see "beta" videos showing them how to do the climbs. Users can also add additional climbs to their tick list. 

## Table of Contents

- [Authors](#authors)
- [Tech Stack](#tech-stack)
- [API Reference](#api-reference)
- [GIFs](#gifs)
- [Running Tests](#running-tests)
- [Running Locally](#running-locally)
- [Deployment](#deployment)
- [Additional Resources](#additional-resources)

## Authors

- [Ross Landino @mrlandino](https://www.github.com/mrlandino)



## Tech Stack

**Client:** React, JavaScript, HTML, CSS, Sass, NPM

**Testing:** Cypress

**Server:** Heroku API

**Accessibility:** WAVE, Lighthouse


## API Reference

#### Get all movies

```http
  GET https://rancid-tomatillos.herokuapp.com/api/v2/movies
```

#### Get a single movie

```http
  GET https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Get a movie's videos

```http
  GET https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos
```


## GIFs

![App In Use](./public/rotten-tom.gif)


## Running Tests

To run end-to-end tests, run the following command

```bash
  npm run cypress
```


## Run Locally

Clone the project

```bash
  git@github.com:mrlandino/rotten-tomatillos.git
```

Go to the project directory

```bash
  cd rotten-tomatillos
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## Deployment

- https://rotten-tomatillos.netlify.app/

## Additional Resources

- [Figma Wireframe](https://www.figma.com/file/hMy4gk4yspX1CiUwYwxACy/Rotten-Tomatillos)
