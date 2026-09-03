import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTrimmer',
})
export class TextTrimmerPipe implements PipeTransform {
  transform(value: string | null | undefined, config?: { maxLength?: number; replacement?: string }): string {
    if (value === null || value === undefined) return '';

    const finalMaxLength = config?.maxLength !== undefined ? config.maxLength : 25;
    const finalReplacement = config?.replacement !== undefined ? config.replacement : '...';

    return value.length <= finalMaxLength ? value : value.substring(0, finalMaxLength) + finalReplacement;
  }
}
