import { Publisher, OrderCreatedEvent, Subjects } from '@agreejwc/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
