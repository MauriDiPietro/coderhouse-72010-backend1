import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true,
    index: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
  },
  mascotas: [
    {
      type: Schema.Types.ObjectId,
      ref: "pets",  //! nombre de la coleccion
      default: [],
    },
  ],
});

UserSchema.pre('find', function(){
    this.populate('mascotas');
})

export const UserModel = model("users", UserSchema);
