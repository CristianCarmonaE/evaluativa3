import { TestBed } from '@angular/core/testing';

import { ListaCarritoService } from './lista-carrito.service';

describe('ListaCarritoService', () => {
  let service: ListaCarritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaCarritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
