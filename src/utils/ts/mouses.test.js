import { mousesToStr } from './mousesToStr';

test("the 'mousesToStr' function should work correctly", () => {
    expect(mousesToStr(0)).toBe("нет мышей");
    expect(mousesToStr(1)).toBe("мышь");
    expect(mousesToStr(2)).toBe("2 мыши");
    expect(mousesToStr(3)).toBe("3 мыши");
    expect(mousesToStr(4)).toBe("4 мыши");
    expect(mousesToStr(5)).toBe("5 мышей");
    expect(mousesToStr(6)).toBe("6 мышей");
    expect(mousesToStr(7)).toBe("7 мышей");
    expect(mousesToStr(8)).toBe("8 мышей");
    expect(mousesToStr(9)).toBe("9 мышей");
    expect(mousesToStr(10)).toBe("10 мышей");
    expect(mousesToStr(22)).toBe("22 мыши");
    expect(mousesToStr(325)).toBe("325 мышей");
});