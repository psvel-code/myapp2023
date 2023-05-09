import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: string): string {
    const parts = value.split(':').map((part) => parseInt(part, 10));
    console.log("parts", parts);

    if (parts.length === 2) {
      const minutes = parts[0];
      const seconds = parts[1];
      return `${minutes}m ${seconds}s`;
    }

    else if (parts.length === 3) {
      const hours = parts[0];
      const minutes = parts[1];
      const seconds = parts[2];
      return `${hours}h ${minutes}m`;
    }

    else if (parts.length === 4) {
      const days = parts[0];
      const hours = parts[1];
      const minutes = parts[2];
      return `${days}d ${hours}h ${minutes}m`;

    }

    else if (parts.length === 5) {
      const months = parts[0];
      const days = parts[1];
      const hours = parts[2];
      const minutes = parts[3];
      return `${months}m ${days}d ${hours}h ${minutes}m`;
    }

    else if (parts.length === 6) {

      const years = parts[0];
      const months = parts[1];
      const days = parts[2];
      const hours = parts[3];
      const minutes = parts[4];
      return ` ${years}y ${months}m ${days}d ${hours}h ${minutes}m`;
    }

    else {
      return value;
    }
  }
}
