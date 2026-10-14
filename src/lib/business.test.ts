import { describe, expect, it } from 'vitest';
import { business, hoursStatus } from './business';

describe('Supplied business facts', () => {
  it('preserves the supplied Google rating', () => { expect(business.rating).toBe(4.8); });
  it('preserves the supplied review count', () => { expect(business.reviewCount).toBe(369); });
  it('uses the supplied telephone number', () => { expect(business.phoneHref).toBe('tel:+919844411898'); });
  it('uses the listed 9 pm closing time in Bengaluru', () => {
    expect(business.closingHour).toBe(21);
    expect(hoursStatus(new Date('2026-10-14T15:30:00Z'))).toBe('Past listed closing time');
    expect(hoursStatus(new Date('2026-10-14T15:29:00Z'))).toBe('Call to confirm today’s hours');
  });
});