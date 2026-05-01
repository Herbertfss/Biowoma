import { PlantIdentification } from '../entities/PlantIdentification';
import { PlantIdentificationInput } from '../../../../common/validation/schemas';

export interface PlantRepository {
  createPlantIdentification(
    data: PlantIdentificationInput,
    identifiedBy: string
  ): Promise<PlantIdentification>;
}
