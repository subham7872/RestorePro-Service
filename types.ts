
export enum DamageType {
  WATER = 'Water',
  FIRE = 'Fire/Smoke',
  MOLD = 'Mold',
  STORM = 'Storm/Flood',
  SEWAGE = 'Sewage',
  OTHER = 'Other'
}

export interface EmergencyLead {
  id: string;
  damageType: DamageType;
  zipCode: string;
  phone: string;
  name: string;
  timestamp: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}
