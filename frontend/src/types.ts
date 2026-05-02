export interface PlantIdentification {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  identifiedBy: string;
  createdAt: string;
}

export interface CreatePlantIdentificationRequest {
  name: string;
  description: string;
  imageUrl: string;
}
