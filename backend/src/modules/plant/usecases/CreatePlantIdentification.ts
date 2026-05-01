import { PlantIdentification } from '../domain/entities/PlantIdentification';
import { PlantRepository } from '../domain/ports/PlantRepository';
import { PlantIdentificationInput } from '../../../common/validation/schemas';

export class CreatePlantIdentification {
  constructor(private readonly repository: PlantRepository) {}

  async execute(
    data: PlantIdentificationInput,
    identifiedBy: string
  ): Promise<PlantIdentification> {
    const name = data.name.trim();
    const description = data.description.trim();

    if (!name || !description) {
      throw new Error('Nome e descrição são obrigatórios.');
    }

    return this.repository.createPlantIdentification(
      {
        name,
        description,
        imageUrl: data.imageUrl,
      },
      identifiedBy
    );
  }
}
