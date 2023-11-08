import { type ResourceEffectResult } from '../interfaces/resource-effect-result';

export interface Blueprints {
    recipes: Record<string, ResourceEffectResult>
    effects: ResourceEffectResult[]
}
