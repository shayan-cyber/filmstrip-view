
# FlimStrip Template Viewer

This project requires you to develop a website template viewer. The template viewer is modeled after the filmstrip folder view in Windows Explorer.


## Preview
### Client:
https://filmstrip-view.vercel.app/

### Backend
https://filmstrip-view.onrender.com/api/data


## Screenshots

![App Screenshot](https://i.imgur.com/JG3Ds7c.png)


## Features

- Single Page Application with ReactJS
- Display image as large view in like FilmStrip
- Carousel/slide of thumbnails below
- Previous and next button to navigate
- Paginated data fetching through an nodejs API
- On Next button click we'll fetch the next page data when 4 images remaining to show for better optimization.(If we have many images then it's not optimal to dumb all data at one through one API endpoint response)


## Tech Stack

**Client:** React,Vite, Typescript, TailwindCSS

**Server:** Node, Express


## Installation

clone the repo

```bash
git clone https://github.com/shayan-cyber/filmstrip-view.git
```



### Backend
```bash
cd backend
npm i
```
make a .env file and add
```bash
API_URL=http://localhost:3000/
```

Run the server
```bash
npm run dev
```

### Client
```bash
cd client
npm i
```
make a .env file and add
```bash
API_URL=http://localhost:3000/
```

Run the client
```bash
npm run dev
```




##### Client URL: http://localhost:5173/

##### Server URL: http://localhost:3000/
## API Reference(server)
http://localhost:3000/
#### Get all items

```http
  GET /api/data?page={page}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `page` | `integer` | **optional**. Page number |




