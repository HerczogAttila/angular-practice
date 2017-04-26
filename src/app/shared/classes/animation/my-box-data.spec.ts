import { MyBoxData } from './my-box-data';

describe('Hero', () => {
  it('should create', () => {
    expect(new MyBoxData()).toBeTruthy();
  });

  it('has group', () => {
    const box = new MyBoxData(4);
    expect(box.group).toBe(4);
  });

  it('has visible', () => {
    const box = new MyBoxData(7, false);
    expect(box.visible).toBe(false);
  });

  it('toggle visible false', () => {
    const box = new MyBoxData();
    box.visible = true;
    box.toggleVisible();
    expect(box.visible).toBe(false);
  });

  it('toggle visible true', () => {
    const box = new MyBoxData();
    box.visible = false;
    box.toggleVisible();
    expect(box.visible).toBe(true);
  });
});
