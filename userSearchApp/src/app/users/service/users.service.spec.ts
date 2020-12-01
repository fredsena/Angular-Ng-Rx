import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, 
  HttpTestingController } from '@angular/common/http/testing';

import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersService]
    });
    service = TestBed.inject(UsersService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  
  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getUsers(): should get data successfully', () => {

    service.getUsers().subscribe( usersData => {
      expect(usersData.length).toBe(1);
    });

    const req = httpMock.expectOne(service.usersUrl);
    expect(req.request.method).toBe("GET");

    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

  });

  it('getUsersByFullSearchText(): should get data successfully', () => {

    service.getUsersByFullSearchText("fred").subscribe( usersData => {
      expect(usersData.length).toBe(1);
    });

    const req = httpMock.expectOne(`${service.usersUrl}?q=fred`);
    expect(req.request.method).toBe("GET");

    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    httpMock.expectNone(`${service.usersUrl}?q=keyla`);
  });

  // it('should throw an error if trying to search is not supported ', () => {
  //   service.getUsersByFullSearchText("")
  //     .subscribe(() => {}, err => {
  //       expect(err).toContain(`An error occurred`);
  //     });
  //     httpMock.expectNone(`${service.usersUrl}?q=keyla`);
  // });

});
