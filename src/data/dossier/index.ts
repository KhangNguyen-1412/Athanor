import type { HeroDossierItem } from './types';
import { VEDA_DOSSIERS } from './vedaDossier';
import { LOKHEIM_DOSSIERS } from './lokheimDossier';
import { AFATA_DOSSIERS } from './afataDossier';
import { NORMAN_DOSSIERS } from './normanDossier';
import { CARANO_DOSSIERS } from './caranoDossier';
import { EASTERN_DOSSIERS } from './easternDossier';

export * from './types';
export * from './vedaDossier';
export * from './lokheimDossier';
export * from './afataDossier';
export * from './normanDossier';
export * from './caranoDossier';
export * from './easternDossier';

export const HERO_DOSSIERS: Record<string, HeroDossierItem> = {
  ...VEDA_DOSSIERS,
  ...LOKHEIM_DOSSIERS,
  ...AFATA_DOSSIERS,
  ...NORMAN_DOSSIERS,
  ...CARANO_DOSSIERS,
  ...EASTERN_DOSSIERS
};
