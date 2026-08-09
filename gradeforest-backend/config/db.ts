export const connectDB = async () => {
  if (!process.env.MONGO_URL) {
    console.warn(
      "MONGO_URL non définie : le serveur démarre sans base de données. " +
      "Les fonctionnalités liées aux données ne marcheront pas tant qu'elle n'est pas configurée."
    );
    return;
  }

  const mongoose = require('mongoose');
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("Connexion MongoDB échouée, le serveur continue sans base de données :", err);
  }
};
