const mongoose = require("mongoose");
const validator = require("validator");

const movieSchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: [true, "Поле 'country' должно быть заполнено"],
      minlength: [2, "Минимальная длина поля 'country' - 2"],
      maxlength: [30, "Максимальная длина поля 'country' - 30"],
    },

    director: {
      type: String,
      required: [true, "Поле 'director' должно быть заполнено"],
      minlength: [2, "Минимальная длина поля 'director' - 2"],
      maxlength: [30, "Максимальная длина поля 'director' - 30"],
    },

    duration: {
      type: Number,
      required: [true, "Поле 'duration' должно быть заполнено"],
      minlength: [2, "Минимальная длина поля 'duration' - 2"],
      maxlength: [10, "Максимальная длина поля 'duration' - 10"],
    },

    year: {
      type: Number,
      required: [true, "Поле 'year' должно быть заполнено"],
      minlength: [2, "Минимальная длина поля 'year' - 2"],
      maxlength: [10, "Максимальная длина поля 'year' - 10"],
    },

    description: {
      type: String,
      required: [true, "Поле 'description' должно быть заполнено"],
      minlength: [2, "Минимальная длина поля 'description' - 2"],
      maxlength: [30, "Максимальная длина поля 'description' - 30"],
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
      minlength: [2, "Минимальная длина поля 'nameRU' - 2"],
      maxlength: [30, "Максимальная длина поля 'nameRU' - 30"],
    },

    nameEN: {
      type: String,
      required: [true, "Поле 'nameEN' должно быть заполнено"],
      minlength: [2, "Минимальная длина поля 'nameEN' - 2"],
      maxlength: [30, "Максимальная длина поля 'nameEN' - 30"],
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false },
);

module.exports = mongoose.model("movie", movieSchema);
