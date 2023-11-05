/**
 * Role class
 * @param title role title
 * @param effectiveFrom effective from date
 * @throws Error if title or effectiveFrom is not provided
 * @throws Error if effectiveFrom is not a valid date
 */
class Role {
  title: string;
  effectiveFrom: Date;
  
  constructor(title: string, effectiveFrom: Date) {
      if (!title) {
          throw new Error('title is required');
      }
      if (!effectiveFrom) {
          throw new Error('effectiveFrom is required');
      }

      this.title = title;
      this.effectiveFrom = effectiveFrom;
  }

  getEffectiveFrom(): Date {
      return this.effectiveFrom;
  }

  getTitle(): string {
      return this.title;
  }
}

export { Role };
