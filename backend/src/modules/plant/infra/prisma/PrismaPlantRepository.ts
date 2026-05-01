import { PrismaClient } from '@prisma/client';
import { PlantIdentification } from '../../domain/entities/PlantIdentification';
import { PlantRepository } from '../../domain/ports/PlantRepository';
import { PlantIdentificationInput } from '../../../../common/validation/schemas';

const prisma = new PrismaClient();

export class PrismaPlantRepository implements PlantRepository {
  async createPlantIdentification(
    data: PlantIdentificationInput,
    identifiedBy: string
  ): Promise<PlantIdentification> {
    const record = await prisma.plantIdentification.create({
      data: {
        ...data,
        identifiedBy,
      },
    });

    return {
      id: record.id,
      name: record.name,
      description: record.description,
      imageUrl: record.imageUrl,
      identifiedBy: record.identifiedBy,
      createdAt: record.createdAt,
    };
  }
}
