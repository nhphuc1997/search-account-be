import { Injectable } from '@nestjs/common';
import { Environment, Paddle } from '@paddle/paddle-node-sdk';

@Injectable()
export class PaddleService {
  private readonly paddle: any;

  constructor() {
    this.paddle = new Paddle(
      'd6000163f75519dd000272461cab6ee9af6829380281af0e42',
      {
        environment: Environment.sandbox,
      },
    );
  }

  async getProducts() {
    const productCollection = this.paddle.products.list();
    const priceCollection = this.paddle.prices.list();
    const products = await productCollection.next();
    const prices = await priceCollection.next();
    return products.map((product: any) => {
      const price = prices.find(
        (_item: any) => _item?.productId === product?.id,
      );
      return {
        ...product,
        unitPrice: price?.unitPrice,
      };
    });
  }
}
