import { TestBed } from '@angular/core/testing';

import { EmailcontactService } from './emailcontact.service';

describe('EmailcontactService', () => {
  let service: EmailcontactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailcontactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
