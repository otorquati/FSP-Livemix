import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

{
  /* CRUD - Usuarios */
}
app.post("/user", async (req, res) => {
  await prisma.user.create({
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
  const users = await prisma.user.findMany();
  res.status(200).json(users);
});

app.put("/user/:id", async (req, res) => {
  await prisma.user.create({
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
  await prisma.user.delete({
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
  const edicoes = await prisma.editions.create({
    data: {
      editionId: req.body.editionId,
      editionDate: req.body.editionDate,
    },
  });
  res.status(201).json(req.body);
});

app.get("/editions", async (req, res) => {
  const editions = await prisma.editions.findMany();
  res.status(200).json(editions);
});

app.post("/editions/:id", async (req, res) => {
  const edicoes = await prisma.editions.findUnique({
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
  const editions = await prisma.editions.delete({
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
  const playList = await prisma.playlist.create({
    data: {
      playlistOrder: req.body.playlistOrder,
      songsId: req.body.songsId,
      editionId: req.body.editionId,
    },
  });
  res.status(201).json(req.body);
});

app.get("/playlist", async (req, res) => {
  const playlist = await prisma.editions.findMany();
  res.status(200).json(playlist);
});

app.put("/playlist/:id", async (req, res) => {
  const playList = await prisma.playlist.findUnique({
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
  const playlist = await prisma.editions.delete({
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
  const songs = await prisma.songs.create({
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
  const songs = await prisma.songs.findMany();
  res.status(200).json(songs);
});

app.put("/songs/:id", async (req, res) => {
  const songs = await prisma.songs.findUnique({
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
  const songs = await prisma.songs.delete({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({ message: "Música deletada com sucesso!" });
});

app.listen(3000);
