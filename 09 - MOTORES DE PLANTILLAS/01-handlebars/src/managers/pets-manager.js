import fs from "node:fs";
import { v4 as uuidv4 } from "uuid";
import { createHash } from "../utils/user-utils.js";

class PetsManager {
  constructor(path) {
    this.path = path;
  }

  async getAllPets() {
    try {
      if (fs.existsSync(this.path)) {
        const pets = await fs.promises.readFile(this.path, "utf-8");
        return JSON.parse(pets);
      } else return [];
    } catch (error) {
      throw new Error(error);
    }
  }

  async createPets(obj) {
    try {
      const pet = {
        id: uuidv4(),
        ...obj,
      };
      const pets = await this.getAllPetss(); //[] | [{}, {}]
      const petsExists = pets.find((u) => u.email === pet.email);
      if (petsExists) throw new Error("Pets already exists");
      createHash(pet);
      pets.push(pet);
      await fs.promises.writeFile(this.path, JSON.stringify(pets));
      return pet;
    } catch (error) {
      throw error;
    }
  }

  async updatePets(obj, id) {
    try {
      const pets = await this.getAllPetss();
      let petsExist = await this.getPetsByid(id);
      petsExist = { ...petsExist, ...obj };
      createHash(petsExist);
      const newArray = pets.filter((u) => u.id !== id);
      newArray.push(petsExist);
      await fs.promises.writeFile(this.path, JSON.stringify(newArray));
      return petsExist;
    } catch (error) {
      throw error;
    }
  }

  async getPetsByid(id) {
    try {
      const pets = await this.getAllPetss();
      const petsExists = pets.find((u) => u.id === id);
      if (!petsExists) throw new Error("Pets does not exist");
      return petsExists;
    } catch (error) {
      throw error;
    }
  }

  async deletePets(id) {
    try {
      const pets = await this.getAllPetss();
      if (!pets.length) throw new Error("Petss is empty");
      const petsExists = await this.getPetsByid(id);
      const newArray = pets.filter((u) => u.id !== id);
      await fs.promises.writeFile(this.path, JSON.stringify(newArray));
      return petsExists;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export const manager = new PetsManager("./pets.json");
