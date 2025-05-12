
import express from "express";
import 'dotenv/config';
import { db }  from "./connect.js";

const app = express();
app.use(express.json());

const PORT = 3000;

{  /* CRUD - Usuarios */ }

app.post("/user", async (req, res) => {
  await db.user.create({
    data: {
      name: req.body.name,
      email: req.body.email,
      emailVerified: req.body.emailVerified,
      image: req.body.image,
    },
  });
  res.status(201).json(req.body);
}); 

app.get("/user", async (req, res) => {
  const users = await db.user.findMany();
  res.status(200).json(users);
});

app.put("/user/:id", async (req, res) => {
  await db.user.create({
    where: {
      id: req.params.id,
    },
    data: {
      name: req.body.name,
      email: req.body.email,
      emailVerified: req.body.emailVerified,
      image: req.body.image,
    },
  });
  res.status(201).json(req.body);
});

app.delete("/user/:id", async (req, res) => {
  await db.user.delete({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({ message: "Usuário deletado com sucesso!" });
});

{
  /* CRUD - Edições */
}
app.post("/editions", async (req, res) => {
  const edicoes = await db.editions.create({
    data: {
      editionId: req.body.editionId,
      editionDate: req.body.editionDate,
    },
  });
  res.status(201).json(req.body);
});

app.get("/editions", async (req, res) => {
  const editions = await db.editions.findMany();
  res.status(200).json(editions);
});

app.post("/editions/:id", async (req, res) => {
  const edicoes = await db.editions.findUnique({
    where: {
      id: req.params.id,
    },
    data: {
      editionId: req.body.editionId,
      editionDate: req.body.editionDate,
    },
  });
  res.status(201).json(req.body);
});

app.delete("/editions", async (req, res) => {
  const editions = await db.editions.delete({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({ message: "Edição deletado com sucesso!" });
});

{
  /* CRUD - Playlist */
}
app.post("/playlist", async (req, res) => {
  const playList = await db.playlist.create({
    data: {
      playlistOrder: req.body.playlistOrder,
      songsId: req.body.songsId,
      editionId: req.body.editionId,
    },
  });
  res.status(201).json(req.body);
});

app.get("/playlist", async (req, res) => {
  const playlist = await db.editions.findMany();
  res.status(200).json(playlist);
});

app.put("/playlist/:id", async (req, res) => {
  const playList = await db.playlist.findUnique({
    where: {
      id: req.params.id,
    },
    data: {
      playlistOrder: req.body.playlistOrder,
      songsId: req.body.songsId,
      editionId: req.body.editionId,
    },
  });
  res.status(201).json(req.body);
});

app.delete("/playlist/:id", async (req, res) => {
  const playlist = await db.editions.delete({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({ message: "Playlist deletado com sucesso!" });
});

{
  /* CRUD - Songs */
}
app.post("/songs", async (req, res) => {
  const songs = await db.songs.create({
    data: {
      title: req.body.title,
      Artist: req.body.Artist,
      sampleAddr: req.body.sampleAddr,
      coverImage: req.body.coverImage,
    },
  });
  res.status(201).json(req.body);
});

app.get("/songs", async (req, res) => {
  const songs = await db.songs.findMany();
  res.status(200).json(songs);
});

app.put("/songs/:id", async (req, res) => {
  const songs = await db.songs.findUnique({
    where: {
      id: req.params.id,
    },
    data: {
      title: req.body.title,
      Artist: req.body.Artist,
      sampleAddr: req.body.sampleAddr,
      coverImage: req.body.coverImage,
    },
  });
  res.status(201).json(req.body);
});

app.delete("/songs/:id", async (req, res) => {
  const songs = await db.songs.delete({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({ message: "Música deletada com sucesso!" });
});



app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
