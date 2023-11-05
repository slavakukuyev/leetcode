import { Role } from './role';

describe('getEffectiveFrom', () => {

    // Returns the effectiveFrom date of the Role object.
    it('should return the effectiveFrom date of the Role object', () => {
      const role = new Role('Test Role', new Date('2021-01-01'));
      expect(role.getEffectiveFrom()).toEqual(new Date('2021-01-01'));
    });

    // Returns the correct effectiveFrom date when called multiple times.
    it('should return the correct effectiveFrom date when called multiple times', () => {
      const role = new Role('Test Role', new Date('2021-01-01'));
      expect(role.getEffectiveFrom()).toEqual(new Date('2021-01-01'));
      role.effectiveFrom = new Date('2022-01-01');
      expect(role.getEffectiveFrom()).toEqual(new Date('2022-01-01'));
    });

    // Returns the effectiveFrom date for a Role object with a different title.
    it('should return the effectiveFrom date for a Role object with a different title', () => {
      const role = new Role('Test Role', new Date('2021-01-01'));
      expect(role.getEffectiveFrom()).toEqual(new Date('2021-01-01'));
      role.title = 'New Title';
      expect(role.getEffectiveFrom()).toEqual(new Date('2021-01-01'));
    });

    // Returns the effectiveFrom date for a Role object with a future effectiveFrom date.
    it('should return the effectiveFrom date for a Role object with a future effectiveFrom date', () => {
      const role = new Role('Test Role', new Date('2022-01-01'));
      expect(role.getEffectiveFrom()).toEqual(new Date('2022-01-01'));
    });
});
