import { TestBed } from '@angular/core/testing';

import { BracketTesterService } from './bracket-tester.service';

describe('BracketTesterService', () => {
  let service: BracketTesterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BracketTesterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should pass empty ""', () => {
    const result = service.test("");
    expect(result).toBeTruthy();
  });

  it('should pass simple "{}"', () => {
    const result = service.test("{}");
    expect(result).toBeTruthy();
  });

  it('should fail simple "}{"', () => {
    const result = service.test("}{");
    expect(result).toBeFalsy();
  });

  it('should fail short "{{}"', () => {
    const result = service.test("{{}");
    expect(result).toBeFalsy();
  });

  it('should pass full "{abc...xyz}"', () => {
    const result = service.test("{abc...xyz}");
    expect(result).toBeTruthy();
  });

  it('should pass brackets inside string "asdf{}asdf"', () => {
    const result = service.test("asdf{}asdf");
    expect(result).toBeTruthy();
  });

  it('should pass brackets outside string "asdfasdf{}"', () => {
    const result = service.test("asdfasdf{}");
    expect(result).toBeTruthy();
  });

  it('should pass brackets outside string #2 "{}asdfasdf"', () => {
    const result = service.test("{}asdfasdf");
    expect(result).toBeTruthy();
  });

  it('should pass string "abc...xyz"', () => {
    const result = service.test("abc...xyz");
    expect(result).toBeTruthy();
  });

  it('should fail random "{}}{{}}}{{}{}{}{{{}}}{{}}{}{"', () => {
    const result = service.test("{}}{{}}}{{}{}{}{{{}}}{{}}{}{");
    expect(result).toBeFalsy();
  });

  it('should fail random full "{b}}{{a}}}{{}{}{}{{{q}}}{{}}{}{"', () => {
    const result = service.test("{b}}{{a}}}{{}{}{}{{{q}}}{{}}{}{");
    expect(result).toBeFalsy();
  });

  it('should pass random "{{{{a}}{b}}{c}}{d}"', () => {
    const result = service.test("{{{{a}}{b}}{c}}{d}");
    expect(result).toBeTruthy();
  });

  it('should pass whitespace "{ }"', () => {
    const result = service.test("{ }");
    expect(result).toBeTruthy();
  });

  it('should pass new line "{\n}"', () => {
    const result = service.test("{\n}");
    expect(result).toBeTruthy();
  });
});
