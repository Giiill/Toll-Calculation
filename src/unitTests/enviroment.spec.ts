import { envByUrl } from "../utils/enviroment"; 

describe('envByUrl', () => {
  // Мокаем window.location.href
  const originalLocationHref = window.location.href;
  beforeAll(() => {
    Object.defineProperty(window, 'location', {
      value: { href: 'http://localhost:3000' },
      writable: true,
    });
  });

  afterAll(() => {
    Object.defineProperty(window, 'location', {
      value: { href: originalLocationHref },
      writable: true,
    });
  });

  it('returns empty string for development environment', () => {
    const result = envByUrl();
    expect(result).toEqual('');
  });

  it('returns "/Calculation/" for production environment', () => {
    // Меняем location.href, чтобы эмулировать окружение продакшн
    window.location.href = 'https://example.com/Calculation/';
    const result = envByUrl();
    expect(result).toEqual('/toll-calculation/');
  });
});
