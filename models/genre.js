var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
  {
    name: {type: String, required: true, min: 3, max: 100, enum: ['Fiction','Science Fiction','Fantasy', 'French Poetry', 'Romance', 'Military Story'], default: 'Fiction'},
  }
);

// Virtual for genre's URL
GenreSchema
.virtual('url')
.get(function () {
  return '/catalog/genre/' + this.id;
});

//Export model
module.exports = mongoose.model('Genre', GenreSchema);
