const { Schema, model, Types } = require('mongoose');

//TODO replace with data model from exam description

const dataSchema = new Schema({
    model: {
        type: String,
        required: true
    },
    manufacturer: {
        type: String,
        required: true
    },
    engine: {
        type: String,
        required: true
    },
    topSpeed : {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true,
        validate: {
            validator: (v) => /^https?:\/\//.test(v),
            message: 'Image URL must start with http:// or https://'
        }
    },
    description: {
        type: String,
        required: true
    },
    likes: {
        type: [/* Types.ObjectId */],
        ref: 'User',
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User'
    }
});

const Data = model('Data', dataSchema);

module.exports = { Data };
