const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    thumbnail: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: false
    },
    techs: {
        type: [String],
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, {
    toJSON: {
        virtuals: true
    }
});

SpotSchema.virtual('thumbnail_url').get(function () {
    return `http://192.168.1.116:3333/files/${this.thumbnail}`
});

SpotSchema.virtual('thumbnail_url_local').get(function () {
    return `http://localhost:3333/files/${this.thumbnail}`
});

module.exports = mongoose.model('Spot', SpotSchema);