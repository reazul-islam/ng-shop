import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryWiseBlogComponent } from './category-wise-blog.component';

describe('CategoryWiseBlogComponent', () => {
  let component: CategoryWiseBlogComponent;
  let fixture: ComponentFixture<CategoryWiseBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryWiseBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryWiseBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
