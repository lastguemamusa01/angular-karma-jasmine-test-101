import { ReduceTextPipe } from './reduce-text.pipe';

describe('ReduceTextPipe', () => {

  let pipe: ReduceTextPipe;

  beforeEach( () => {
    pipe = new ReduceTextPipe();
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('use tranform correctly', () => {
    const text = "Hellow this is a test to check the pipe";
    const newText = pipe.transform(text, 5);

    expect(newText.length).toBe(5);
  });

});
