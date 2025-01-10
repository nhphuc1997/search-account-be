import { Injectable } from '@nestjs/common';
import { Environment, Paddle } from '@paddle/paddle-node-sdk';

@Injectable()
export class PaddleService {
  private readonly paddle: any;

  constructor() {
    this.paddle = new Paddle(
      'd6000163f75519dd000272461cab6ee9af6829380281af0e42',
      {
        environment: Environment.sandbox, // or Environment.sandbox for accessing sandbox API
      },
    );
  }

  async getProducts() {
    const productCollection = this.paddle.products.list();
    return await productCollection.next();
  }
}
