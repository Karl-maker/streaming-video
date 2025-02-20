/// <reference types="jest" />
import secondsToMinutes from "@/utils/seconds.to.minutes.util";

describe('secondsToMinutes', () => {
  it('should convert 0 seconds to "0:00"', () => {
    expect(secondsToMinutes(0)).toBe('0:00');
  });

  it('should convert 60 seconds to "1:00"', () => {
    expect(secondsToMinutes(60)).toBe('1:00');
  });

  it('should convert 61 seconds to "1:01"', () => {
    expect(secondsToMinutes(61)).toBe('1:01');
  });

  it('should convert 120 seconds to "2:00"', () => {
    expect(secondsToMinutes(120)).toBe('2:00');
  });

  it('should convert 150 seconds to "2:30"', () => {
    expect(secondsToMinutes(150)).toBe('2:30');
  });

  it('should convert 3599 seconds to "59:59"', () => {
    expect(secondsToMinutes(3599)).toBe('59:59');
  });

  it('should convert 3600 seconds to "60:00"', () => {
    expect(secondsToMinutes(3600)).toBe('60:00');
  });

  it('should convert 3661 seconds to "61:01"', () => {
    expect(secondsToMinutes(3661)).toBe('61:01');
  });

  it('should convert 7201 seconds to "120:01"', () => {
    expect(secondsToMinutes(7201)).toBe('120:01');
  });

  it('should handle negative numbers by returning "0:00"', () => {
    expect(secondsToMinutes(-5)).toBe('0:00');
  });

  it('should handle very large numbers correctly', () => {
    expect(secondsToMinutes(1234567)).toBe('20576:07');
  });

  it('should format the remaining seconds with leading zero for numbers less than 10', () => {
    expect(secondsToMinutes(7)).toBe('0:07');
  });
});
