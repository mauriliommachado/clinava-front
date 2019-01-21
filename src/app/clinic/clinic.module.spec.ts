import { ClinicModule } from './clinic.module';

describe('ClinicModule', () => {
  let clinicModule: ClinicModule;

  beforeEach(() => {
    clinicModule = new ClinicModule();
  });

  it('should create an instance', () => {
    expect(clinicModule).toBeTruthy();
  });
});
