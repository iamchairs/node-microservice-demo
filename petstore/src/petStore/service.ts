import { Body, RuleHandler } from 'expresskit';

import { Pet } from './pet';

export class PetStoreService {

  @RuleHandler('UniquePetName')
  public static isUniqueName(@Body(Pet) pet: Pet): Promise<any> {
    // If the name is not unique, reject
    return Promise.resolve();
  }

}