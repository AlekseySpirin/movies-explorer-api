const mongoose = require("mongoose");
const validator = require("validator");

const movieSchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: [true, "Поле 'country' должно быть заполнено"],
    },

    director: {
      type: String,
      required: [true, "Поле 'director' должно быть заполнено"],
    },

    duration: {
      type: Number,
      required: [true, "Поле 'duration' должно быть заполнено"],
    },

    year: {
      type: String,
      required: [true, "Поле 'year' должно быть заполнено"],
    },

    description: {
      type: String,
      required: [true, "Поле 'description' должно быть заполнено"],
    },
    image: {
      type: String,
      required: true,
      validate: {
        validator: (v) => validator.isURL(v),
        message: "Некорректный URL",
      },
    },
    trailerLink: {
      type: String,
      required: true,
      validate: {
        validator: (v) => validator.isURL(v),
        message: "Некорректный URL",
      },
    },
    thumbnail: {
      type: String,
      required: true,
      validate: {
        validator: (v) => validator.isURL(v),
        message: "Некорректный URL",
      },
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },

    movieId: {
      type: Number,
      required: true,
    },

    nameRU: {
      type: String,
      required: [true, "Поле 'nameRU' должно быть заполнено"],
    },

    nameEN: {
      type: String,
      required: [true, "Поле 'nameEN' должно быть заполнено"],
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false },
);

module.exports = mongoose.model("movie", movieSchema);
