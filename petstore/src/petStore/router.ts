import { Router, Resource, Rule, Param, Body, GET, POST, DELETE } from 'expresskit';
import { Pet } from './pet';

import '../swagger';
import './service';

@Router('/pets')
export class PetStoreController {

  @GET('/')
  public static async getAll(@Resource('SwaggerClient') client: any): Promise<any> {
    return client.pet.findPets();
  }

  @GET('/:petId')
  public static async getPet(@Param('petId') petId: string, @Resource('SwaggerClient') client: any): Promise<any> {
    return client.pet.findPetById({petId: petId});
  }

  @POST('/')
  @Rule('UniquePetName')
  public static async addPet(@Body(Pet) newPet: Pet, @Resource('SwaggerClient') client: any): Promise<Pet> {
    return client.pet.addPet(newPet);
  }

  @DELETE('/:petId')
  public static async deletePet(@Param('petId') petId: string, @Resource('SwaggerClient') client: any): Promise<any> {
    return client.pet.deletePet({petId: petId});
  }

}
