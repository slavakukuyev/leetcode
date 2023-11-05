import { Role } from './role';
import { updateMap, getRolesByDate } from './roles_by_dates';

describe('updateMap', () => {
  it('should add a role to the map if the date is greater than or equal to the effective date of the role', () => {
    // Arrange
    const map = new Map<Date, Role>();
    const role = new Role("role 1", new Date("2020-01-01"));
    const dates = [new Date("2020-01-15")];

    // Act
    updateMap(map, role, dates);

    // Assert
    expect(map.get(dates[0])).toBe(role);
  });

  // Add more tests here to cover other scenarios
  it('should not add a role to the map if the date is less than the effective date of the role', () => {
    // Arrange
    const map = new Map<Date, Role>();
    const role = new Role("role 1", new Date("2020-01-15"));
    const dates = [new Date("2020-01-01")];

    // Act
    updateMap(map, role, dates);

    // Assert
    expect(map.get(dates[0])).toBeUndefined();
  });

  it('should add a role to the map if the date is equal to the effective date of the role', () => {
    // Arrange
    const map = new Map<Date, Role>();
    const role = new Role("role 1", new Date("2020-01-15"));
    const dates = [new Date("2020-01-15")];

    // Act
    updateMap(map, role, dates);

    // Assert
    expect(map.get(dates[0])).toBe(role);
  });

  it('should add a role to the map if the date is greater than the effective date of the role', () => {
    // Arrange
    const map = new Map<Date, Role>();
    const role = new Role("role 1", new Date("2020-01-15"));
    const dates = [new Date("2020-01-16")];

    // Act
    updateMap(map, role, dates);

    // Assert
    expect(map.get(dates[0])).toBe(role);
  });

  it('should add a role to the map if the date is less than the effective date of the role', () => {
    // Arrange
    const map = new Map<Date, Role>();
    const role = new Role("role 1", new Date("2020-01-15"));
    const dates = [new Date("2020-01-14")];

    // Act
    updateMap(map, role, dates);

    // Assert
    expect(map.get(dates[0])).toBeUndefined();
  });

  it('should validate roles by dates', () => {
    // Arrange
    const map = new Map<Date, Role>();
    const role1 = new Role("role 1", new Date("2020-01-15"));
    const role2 = new Role("role 2", new Date("2020-01-16"));
    const dates = [new Date("2020-01-14"), new Date("2020-01-15"), new Date("2020-01-16"), new Date("2020-01-17")];

    // Act
    updateMap(map, role1, dates);
    updateMap(map, role2, dates);

    // Assert
    expect(map.get(dates[0])).toBeUndefined();
    expect(map.get(dates[1])).toBe(role1);
    expect(map.get(dates[2])).toBe(role2);
    expect(map.get(dates[3])).toBe(role2);
  });   
});

describe('getRolesByDate', () => {
    it('should return a map of roles by dates', () => {
        // Arrange
        const roles = [
            new Role("role 1", new Date("2020-01-15")),
            new Role("role 2", new Date("2020-01-16")),
        ];
        const dates = [new Date("2020-01-14"), new Date("2020-01-15"), new Date("2020-01-16"), new Date("2020-01-17")];
    
        // Act
        const map = getRolesByDate(roles, dates);
    
        // Assert
        expect(map.get(dates[0])).toBeUndefined();
        expect(map.get(dates[1])).toBe(roles[0]);
        expect(map.get(dates[2])).toBe(roles[1]);
        expect(map.get(dates[3])).toBe(roles[1]);
        });

    // Add more tests here to cover other scenarios
    it('should return a map of roles by dates', () => {
        // Arrange
        const roles = [
            new Role("role 1", new Date("2020-01-15")),
            new Role("role 2", new Date("2020-01-16")),
            new Role("role 3", new Date("2020-01-17")),
        ];
        const dates = [new Date("2020-01-14"), new Date("2020-01-15"), new Date("2020-01-16"), new Date("2020-01-17"), new Date("2020-01-18")];
    
        // Act
        const map = getRolesByDate(roles, dates);
    
        // Assert
        expect(map.get(dates[0])).toBeUndefined();
        expect(map.get(dates[1])).toBe(roles[0]);
        expect(map.get(dates[2])).toBe(roles[1]);
        expect(map.get(dates[3])).toBe(roles[2]);
        expect(map.get(dates[4])).toBe(roles[2]);
        });

    it('should  return an empty  map of roles by dates', () => {
        // Arrange
        const roles = [
            new Role("role 1", new Date("2020-01-15")),
            new Role("role 2", new Date("2020-01-16")),
            new Role("role 3", new Date("2020-01-17")),
        ];
        const dates:Array<Date> = [];
    
        // Act
        const map = getRolesByDate(roles, dates);
    
        // Assert
        expect(map.size).toBe(0);
        });
});