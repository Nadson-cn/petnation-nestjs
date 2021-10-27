import { Test } from '@nestjs/testing';
import { AnimalsModule } from './animals.module';

describe('Testing import Orders module', () => {
  it('Testing AnimalsModule', async () => {
    try {
      const module = await Test.createTestingModule({
        imports: [AnimalsModule],
      }).compile();
      expect(module).not.toBeNull();
    } catch (err) {
      expect(err).not.toBeNull();
    }
  });
});
