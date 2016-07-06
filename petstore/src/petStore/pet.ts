import {Validate, ScrubIn} from 'expresskit';

export class Pet {
  @ScrubIn()
  public id: number;

  @Validate({
    required: true,
    type: 'string',
    minLength: 2,
    maxLength: 255
  })
  public name: string;

  @Validate({
    required: true,
    type: 'string',
    minLength: 2,
    maxLength: 255
  })
  public tag: string;
}