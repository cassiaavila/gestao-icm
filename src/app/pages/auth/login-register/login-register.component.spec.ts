import { ComponentFixture, TestBed } from '@angular/core/testing'

import { LoginRegisterComponent } from './login-register.component'

describe('LoginComponent', () => {
  let component: LoginRegisterComponent
  let fixture: ComponentFixture<LoginRegisterComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginRegisterComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(LoginRegisterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
